const puppeteer = require("puppeteer");
//fox scraper
const getFox = async (url) => {
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
      let items = document.querySelectorAll(".article");
      const results = [];
      items.forEach((item) => {
        results.push({
          title: item.querySelector(
            ".title"
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

//abc scraper
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
  //guardian scraper
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
//add new scrapers here
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
const getCnn = async (url) => {
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
      let items = document.querySelectorAll(".cd__content");
      const results = [];
      items.forEach((item) => {
        results.push({
          title: item.querySelector(
            ".cd__headline-text"
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



  module.exports = getCnn;
  module.exports = getNbc;
  module.exports = getGuardian;
  module.exports = getFox;;
  module.exports = getAbc;
  
//if you want to scrape other sites just make a new scraper and export the function
//then add the function to the server to allow it to fetch from new site
