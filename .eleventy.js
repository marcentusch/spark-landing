// Transforms
const htmlMinTransform = require("./src/transforms/html-min-transform.js");

// Create a helpful production flag
const isProduction = process.env.NODE_ENV === "production";

module.exports = (config) => {
  // Only minify HTML if we are in production because it slows builds _right_ down
  if (isProduction) {
    config.addTransform("htmlmin", htmlMinTransform);
  }

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  // Passtrhoughs
  config.addPassthroughCopy({ "src/fonts/": "fonts/" });
  config.addPassthroughCopy({ "src/js/thirdparty/": "js/thirdparty/" });
  config.addPassthroughCopy({ "src/js/": "js/" });

  return {
    // Setting the template engine to nunjucks. Now .html files can use nunjucks
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
