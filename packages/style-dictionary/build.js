const StyleDictionaryPackage = require("style-dictionary");
const { transform } = require("@divriots/style-dictionary-to-figma");

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

function getStyleDictionaryConfig(brand) {
  return {
    source: [`tokens/brands/${brand}/*.json`, "tokens/globals/**/*.json"],
    format: {
      figmaTokensPlugin: ({ dictionary }) => {
        const transformedTokens = transform(dictionary.tokens);
        return JSON.stringify(transformedTokens, null, 2);
      },
    },
    platforms: {
      web: {
        transformGroup: "web",
        buildPath: `build/web/${brand}/`,
        files: [
          {
            destination: "tokens.scss",
            format: "scss/variables",
          },
        ],
      },
      json: {
        transformGroup: "js",
        buildPath: `build/figma/${brand}/`,
        files: [
          {
            destination: "tokens.json",
            format: "figmaTokensPlugin",
          },
        ],
      },
    },
  };
}

console.log("Build started...");

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

["brand-1", "brand-2", "brand-3"].map(function (brand) {
  ["web", "json"].map(function (platform) {
    console.log("\n==============================================");
    console.log(`\nProcessing: [${platform}] [${brand}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(
      getStyleDictionaryConfig(brand, platform)
    );

    StyleDictionary.buildPlatform(platform);

    console.log("\nEnd processing");
  });
});

console.log("\n==============================================");
console.log("\nBuild completed!");
