import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';

const config = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'scrapers/sitemaps/sitemap-kentbull.com.xml',
    }),
    siteName: 'kentbull.com blog',
    source: 'Blogposts',
    author: 'Kent Bull',
    destinationFile: 'scrapers/output/kentbull.com.json',
    domQueryForContent: 'article p, article h1, article h2, article h3, article h4, article h5, article h6, article li'
}

async function customScrape(page, domQueryForContent, pageUrl) {
    const mainContent = await extractMainContent(page, domQueryForContent);

    let pageTitle = await page.$eval('.posttitle', (element) => {
        return element.textContent.trim()
    });

    let all = {};
    all.mainContent = mainContent;
    all.pageTitle = pageTitle;
    return all;
}
export default async function () {
    scrape(config, customScrape);
};