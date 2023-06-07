import createInput from '../modules/createInput.mjs';
import importedScrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';

const config = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'scrapers/sitemaps/sitemap-jolocom.xml',
    }),
    siteName: 'Blogposts',
    destinationFile: 'scrapers/output/jolocom.json',
    domQueryForContent: '.blog-post-single p, .blog-post-single h1, .blog-post-single h2, .blog-post-single h3, .blog-post-single h4, .blog-post-single h5, .blog-post-single h6, .blog-post-single li, '
}


console.log("config.sitemap");
console.log(config.sitemap);

async function process(page, domQueryForContent) {
    const mainContent = await extractMainContent(page, domQueryForContent);

    let pageTitle = await page.$eval('.blog-post-single h1', (element) => {
        return element.textContent.trim()
    });


    let all = {};
    all.elements = mainContent;
    all.pageTitle = pageTitle;
    return all;
}
export default async function scrapeData() {
    importedScrape(config, process);
};