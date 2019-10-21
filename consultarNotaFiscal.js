/*
  * Para executar utilizando NodeJS (Necessário instalar jQuery e JSDom via npm install pacote_name --save)
  * var jsdom = require('jsdom');
  * $ = require('jquery')(new jsdom.JSDOM().window);
*/

const json = JSON.stringify({
  "chave": "00000000000000000000000000000000000000000000"
})

$.ajax({
  headers: {
    "cache-control": "no-cache",
    "content-type": "application/json",
    "x-consumer-key": "SEU_CONSUMER_KEY",
    "x-consumer-secret": "SEU_CONSUMER_SECRET",
    "x-access-token": "SEU_ACCESS_TOKEN",
    "x-access-token-secret": "SEU_ACCESS_TOKEN_SECRET"
  },
  url: "https://webmaniabr.com/api/1/nfe/consulta/",
  method: "GET",
  dataType: 'json',
  data: JSON.parse(json)
}).done(function( data ) {
  console.log(data)
}).fail(function( error ){
  console.log(error.responseJSON)
})
