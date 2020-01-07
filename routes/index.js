const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://chucknorrisfacts.net/top-100";
var router = express.Router();

axios(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    let arrayFromServer = [];
    let jokesArray =[];
    let clean = [];
    const jokes = $("div#content > div > div").map(function() {
      arrayFromServer.push($(this).text());
    });
    
    for(let i =0; i<=arrayFromServer.length; i++){

      let joke = arrayFromServer[i]+'';
        
      if(joke.includes('Chuck Norris')){
        joke = joke.replace(/Chuck Norris/gi, 'Rajesh Hamal');
        jokesArray.push(joke);
      }
    } //for loop ends

    
  

      /* GET home page. */
      router.get("/", function(req, res, next) {
        res.render("index", { jokes: JSON.stringify(jokesArray) });
      });
    
  })
  .catch(console.error);

module.exports = router;
