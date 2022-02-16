const PORT = 3000;
const axios = require("axios");
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const getFox = require("./scrapers/foxScraper");
const getGuardian = require("./scrapers/guardianScraper");
const getNyt = require("./scrapers/nytScraper");
const getNbc = require("./scrapers/nbcScraper");
const getWashingtonPost = require("./scrapers/washingtonPostScraper");

const getPractice = require("./scrapers/practiceScraper");
const getAbc = require("./scrapers/abcScraper");
const getCnn = require("./scrapers/cnnScraper");
const res = require("express/lib/response");
//npm run server outside of scraper folder in the main flder



app.use(express.static(__dirname + '/dist/aggregator'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/aggregator/index.html'));});


//send get request to url/scrape
app.get("/nbc", async (req, res) => {
  let results = await getNbc("https://www.nbcnews.com/politics");
  console.log(results);
  res.json(results);
});

app.get("/guardian", async (req, res) => {
  let results = await getGuardian("https://www.theguardian.com/us");
  console.log(results);
  res.json(results);
});
app.get("/fox", async (req, res) => {
  let results = await getFox("http://feeds.foxnews.com/foxnews/politics");
  console.log(results);
  res.json(results);
});
app.get("/abc", async (req, res) => {
  let results = await getAbc("https://abcnews.go.com/Politics");
  console.log(results);
  res.json(results);
});
app.get("/cnn", async (req, res) => {
  let results = await getCnn("http://rss.cnn.com/rss/cnn_allpolitics.rss");
  console.log(results);
  res.json(results);
});
app.get("/nyt", async (req, res) => {
  let results = await getNyt("https://www.nytimes.com/section/politics");
  console.log(results);
  res.json(results);
});
app.get("/washingtonPost", async (req, res) => {
  let results = await getWashingtonPost(
    "https://www.washingtonpost.com/politics/?itid=hp_top_nav_politics"
  );
  console.log(results);
  res.json(results);
});
app.get("/practice", async (req, res) => {
  let results = await getPractice("https://nypost.com/tag/politics/");
  console.log(results);
  res.json(results);
});

app.listen(PORT);
console.log(`server listening on ${PORT}`);
