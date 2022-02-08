const puppeteer = require("puppeteer");

const getNbc = async (url) => {
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
        let items = document.querySelectorAll(".wide-tease-item__info-wrapper");
        const results = [];
        items.forEach((item) => {
          results.push({
            title: item.querySelector(
              ".wide-tease-item__headline"
            ).innerText,
            
            desc: item.querySelector(
              ".wide-tease-item__description"
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
module.exports = getNbc;  