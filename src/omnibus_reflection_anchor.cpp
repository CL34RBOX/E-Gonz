#include <iostream>
#include <meta>
#include <string_view>
#include <map>

// AZTEC_PALETTE_INJECTION_POINT
struct AztecPalette {
    static constexpr std::string_view TLALOC = "#004080";
    static constexpr std::string_view XIPE = "#FFD700";
    static constexpr std::string_view QUETZAL = "#00A86B";
    static constexpr std::string_view TEZCATL = "#0D0D0D";
    static constexpr std::string_view MICTLAN = "#E5E4E2";
    static constexpr std::string_view HUITZIL = "#8A0303";
    static constexpr std::string_view OBSIDIAN = "#4A4E69";
};

int main() {
    std::println("Operating under the Obsidian Butterfly Matrix...");
    return 0;
}
