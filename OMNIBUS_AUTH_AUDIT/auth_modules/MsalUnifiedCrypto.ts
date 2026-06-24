import { ICrypto, PkceCodes } from "@azure/msal-common";
import { randomBytes, createHash } from "crypto";

/**
 * CustomCryptoProvider: Engineered for standard browser environments (W3C Web Crypto).
 */
export class CustomCryptoProvider implements ICrypto {
  createNewGuid(): string {
    const buf = new Uint8Array(16);
    crypto.getRandomValues(buf);
    buf[6] = (buf[6] & 0x0f) | 0x40;
    buf[8] = (buf[8] & 0x3f) | 0x80;
    const hex = [...buf].map(b => b.toString(16).padStart(2, "0")).join("");
    return [
      hex.slice(0, 8),
      hex.slice(8, 12),
      hex.slice(12, 16),
      hex.slice(16, 20),
      hex.slice(20),
    ].join("-");
  }

  base64Encode(input: string): string {
    const bytes = new TextEncoder().encode(input);
    let binary = "";
    bytes.forEach(b => (binary += String.fromCharCode(b)));
    return btoa(binary)
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/g, "");
  }

  base64Decode(input: string): string {
    const normalized = input.replace(/-/g, "+").replace(/_/g, "/");
    const binary = atob(normalized);
    const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  }

  async generatePkceCodes(): Promise<PkceCodes> {
    const verifierBytes = new Uint8Array(32);
    crypto.getRandomValues(verifierBytes);
    const verifier = this.base64Encode(
      String.fromCharCode(...verifierBytes)
    ).replace(/[^a-zA-Z0-9\-_.~]/g, "");

    const encoder = new TextEncoder();
    const data = encoder.encode(verifier);
    const digest = await crypto.subtle.digest("SHA-256", data);
    const challenge = this.base64Encode(
      String.fromCharCode(...new Uint8Array(digest))
    );

    return { verifier, challenge };
  }

  async getPublicKeyThumbprint(): Promise<string> {
    throw new Error("[OMNIBUS Node 90247] getPublicKeyThumbprint not implemented for browser context.");
  }

  async removeTokenBindingKey(): Promise<boolean> { return true; }
  async clearKeystore(): Promise<boolean> { return true; }
}

/**
 * NodeCryptoProvider: Engineered for backend Node.js runtimes.
 */
export class NodeCryptoProvider implements ICrypto {
  createNewGuid(): string {
    const buf = randomBytes(16);
    buf[6] = (buf[6] & 0x0f) | 0x40;
    buf[8] = (buf[8] & 0x3f) | 0x80;
    const hex = buf.toString("hex");
    return [
      hex.slice(0, 8),
      hex.slice(8, 12),
      hex.slice(12, 16),
      hex.slice(16, 20),
      hex.slice(20),
    ].join("-");
  }

  base64Encode(input: string): string {
    return Buffer.from(input, "utf8")
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/g, "");
  }

  base64Decode(input: string): string {
    const normalized = input.replace(/-/g, "+").replace(/_/g, "/");
    return Buffer.from(normalized, "base64").toString("utf8");
  }

  async generatePkceCodes(): Promise<PkceCodes> {
    const verifier = this.base64Encode(randomBytes(32).toString("binary"))
      .replace(/[^a-zA-Z0-9\-_.~]/g, "");

    const hash = createHash("sha256").update(verifier).digest("base64");
    const challenge = hash
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/g, "");

    return { verifier, challenge };
  }

  async getPublicKeyThumbprint(): Promise<string> {
    throw new Error("[OMNIBUS Node 90247] getPublicKeyThumbprint not implemented for server context.");
  }

  async removeTokenBindingKey(): Promise<boolean> { return true; }
  async clearKeystore(): Promise<boolean> { return true; }
}
