const puppeteer = require("puppeteer");

const getAbc = async (url) => {
  let data = [];
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
  });

  const page = await browser.newPage();
  //"https://www.eventbrite.com/d/mo--st-louis/all-events/"
  await page.goto(url);
   {
    const pageResults = await page.evaluate(() => {
      let items = document.querySelectorAll(".ContentRoll__Item");
      const results = [];
      items.forEach((item) => {
        results.push({
          title: item.querySelector(
            ".AnchorLink"
          ).innerText,
          desc: item.querySelector(".ContentRoll__Desc")
          .innerText,
          url: item.querySelector("a").getAttribute("href"),
          // img: item.querySelector("img").getAttribute("src"),
        });
      });
      return results;
    });
    
    data = data.concat(pageResults);

  }
  await browser.close();

  return data;
};
module.exports = getAbc;
//if you want to scrape other sites just make a new scraper and export the function
//then add the function to the server to allow it to fetch from new site
