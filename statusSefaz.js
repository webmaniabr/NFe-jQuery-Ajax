/*
  * Para executar utilizando NodeJS (Necessário instalar jQuery e JSDom via npm install pacote_name --save)
  * var jsdom = require('jsdom');
  * $ = require('jquery')(new jsdom.JSDOM().window);
*/

/**
  * Status do Sefaz
  *
  * OBS: A utilização do endpoint deve ser realizada como demonstrativo do Status do
  * Sefaz em sua plataforma, sendo necessário trabalhar com cache de ao menos 10 minutos.
  * Não é necessário realizar a requisição antes da emissão de cada Nota Fiscal,
  * porque este procedimento é realizado de forma automática em todos os endpoints.
*/

$.ajax({
  headers: {
    "cache-control": "no-cache",
    "content-type": "application/json",
    "x-consumer-key": "SEU_CONSUMER_KEY",
    "x-consumer-secret": "SEU_CONSUMER_SECRET",
    "x-access-token": "SEU_ACCESS_TOKEN",
    "x-access-token-secret": "SEU_ACCESS_TOKEN_SECRET"
  },
  url: "https://webmaniabr.com/api/1/nfe/sefaz/",
  method: "GET"
}).done(function( data ) {
  console.log(data)
}).fail(function( error ){
  console.log(error.responseJSON)
})
