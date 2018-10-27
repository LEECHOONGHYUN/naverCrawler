const request = require('request');
const cheerio = require('cheerio');

const url = "https://datalab.naver.com/keyword/realtimeList.naver";

request({
    method: "GET",
    url: url,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
    }
}, function(error, response, body){
    const $ = cheerio.load(body);

    const age_all = $('[data-age="all"] .title');

    for(let i=0; i<age_all.length; i++){
        console.log(age_all[i].children[0].data);
    } 

});


