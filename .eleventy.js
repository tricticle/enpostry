module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/about/');
    eleventyConfig.addPassthroughCopy('./src/assets/');
    eleventyConfig.addPassthroughCopy('./src/blogs/');
    eleventyConfig.addPassthroughCopy('./src/tricticle/');
eleventyConfig.addPassthroughCopy('./src/Ads.txt/');
    return {
        dir:{
            input: "src",
            output: "public"
        }
    };
}
