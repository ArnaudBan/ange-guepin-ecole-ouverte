module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");

  const { DateTime } = require("luxon");
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).setLocale('fr').toLocaleString(DateTime.DATE_FULL);
  });

  // eleventyConfig.addPassthroughCopy("./src/img");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };

};

