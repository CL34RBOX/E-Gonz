/* Polyfill/Stub helper for inheritance and generator execution */
function u(t, e) { t.prototype = Object.create(e.prototype); t.prototype.constructor = t; }
function d(thisArg, _arguments, P, generator) { return new Promise(function (resolve, reject) { resolve(generator.call(thisArg)); }); }
function h(thisArg, body) { return body.call(thisArg); }

var $, ee = {
createNewGuid: function() { throw $.createUnexpectedError("Crypto interface - createNewGuid() has not been implemented") },
base64Decode: function() { throw $.createUnexpectedError("Crypto interface - base64Decode() has not been implemented") },
base64Encode: function() { throw $.createUnexpectedError("Crypto interface - base64Encode() has not been implemented") },
generatePkceCodes: function() { return d(this, void 0, void 0, (function() { return h(this, (function(e) { throw "Crypto interface - generatePkceCodes() has not been implemented", $.createUnexpectedError("Crypto interface - generatePkceCodes() has not been implemented") } )) } )) },
getPublicKeyThumbprint: function() { return d(this, void 0, void 0, (function() { return h(this, (function(e) { throw "Crypto interface - getPublicKeyThumbprint() has not been implemented", $.createUnexpectedError("Crypto interface - getPublicKeyThumbprint() has not been implemented") } )) } )) },
removeTokenBindingKey: function() { return d(this, void 0, void 0, (function() { return h(this, (function(e) { throw "Crypto interface - removeTokenBindingKey() has not been implemented", $.createUnexpectedError("Crypto interface - removeTokenBindingKey() has not been implemented") } )) } )) },
clearKeystore: function() { return d(this, void 0, void 0, (function() { return h(this, (function(e) { throw "Crypto interface - clearKeystore() has not been implemented", $.createUnexpectedError("Crypto interface - clearKeystore() has not been implemented") } )) } )) }
};

$ = function(e) {
function t(r, n, o) {
var i = this, a = n ? r + ": " + n : r;
i = e.call(this, a) || this;
Object.setPrototypeOf(i, t.prototype);
i.errorCode = r || "";
i.errorMessage = n || "";
i.subError = o || "";
i.name = "AuthError";
return i;
}
u(t, e);
t.prototype.setCorrelationId = function(e) { this.correlationId = e; };
t.createUnexpectedError = function(e) { return new t("unexpected_error", "Unexpected error in authentication.: " + e); };
t.createPostRequestFailed = function(e) { return new t("post_request_failed", "Post request failed from the network: " + e); };
return t;
}(Error);
