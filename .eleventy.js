module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/about/');
    eleventyConfig.addPassthroughCopy('./src/assets/');
    eleventyConfig.addPassthroughCopy('./src/tricticle/');
    eleventyConfig.addPassthroughCopy('./src/ads.txt');
    eleventyConfig.addPassthroughCopy('./src/Product\ Sans\ Bold.ttf');
    eleventyConfig.addPassthroughCopy('./src/manifest.json');
    eleventyConfig.addPassthroughCopy('./src/service-worker.js');
    eleventyConfig.addPassthroughCopy('./src/sitemap.xml');

    eleventyConfig.addCollection("blog", function(collection) {
        collection = collection.getFilteredByGlob("./src/blogs/*.md");
        for(let i = 0; i < collection.length; i++) {
            const post = collection[i];
            post.data.permalink = `/${post.date.getFullYear()}/${post.fileSlug}.html`;
        }
        return collection;
    });

    return {
        dir:{
            input: "src",
            output: "public"
        }
    };
}