module.exports = function(config) {

    config.addPassthroughCopy("src/js");
    config.addPassthroughCopy("src/img");
    config.addPassthroughCopy("src/css");

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    };
}