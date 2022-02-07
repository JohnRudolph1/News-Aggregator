const puppeteer = require("puppeteer");

const getGuardian = async (url) => {
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
      let items = document.querySelectorAll(".fc-item__content");
 
      const results = [];
      items.forEach((item) => {
        results.push({
          title: item.querySelector(
            ".fc-item__title"
          ).innerText,
          
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
module.exports = getGuardian;
//if you want to scrape other sites just make a new scraper and export the function
//then add the function to the server to allow it to fetch from new site
