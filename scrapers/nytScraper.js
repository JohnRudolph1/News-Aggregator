const puppeteer = require("puppeteer");

const getNyt = async (url) => {
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
      let items = document.querySelectorAll(".css-1l4spti");
      const results = [];
      items.forEach((item) => {
        results.push({
          title: item.querySelector(
            ".css-1j9dxys"
          ).innerText,
          desc: item.querySelector(
            ".css-1echdzn"
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
module.exports = getNyt;
//if you want to scrape other sites just make a new scraper and export the function
//then add the function to the server to allow it to fetch from new site
