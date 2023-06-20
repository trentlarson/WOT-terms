import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';
import getTextContent from '../modules/getTextContent.mjs';

const config = {
    // Use a local created sitemap
    // sitemap: await createInput({
    //     sourceType: 'localXMLsitemap',
    //     sourcePath: 'scrapers/sitemaps/sitemap-www.gleif.org.xml',
    // }),

    // Use html sitemap on website
    sitemap: await createInput({
        sourceType: 'querySelector',
        sourcePath: 'https://www.gleif.org/en/meta/sitemap',
        queryString: '.content ul li a',// must be an a element
    }),
    siteName: 'Gleif website',
    source: 'Gleif website',
    author: '–',
    destinationFile: 'scrapers/output/gleif.json',
    domQueryForContent: '.content p, .content h1, .content h2, .content h3, .content h4, .content h5, .content h6, .content li, .content img, .content pre, .content code'
}

async function customScrape(page, domQueryForContent, pageUrl) {
    console.log('pageUrl: ', pageUrl);
    const mainContent = await extractMainContent(page, domQueryForContent);

    const creationDate = await getTextContent(page, '.meta li');

    // let pageTitle;
    // pageTitle = await page.$eval('.content h1', (element) => {
    //     return element.textContent.trim()
    // });

    const pageTitle = await getTextContent(page, '.content h1');


    let all = {};
    all.mainContent = mainContent;
    all.pageTitle = pageTitle;
    all.creationDate = creationDate;
    return all;
}
export default async function () {
    scrape(config, customScrape);
};