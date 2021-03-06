/*
  * Para executar utilizando NodeJS (Necessário instalar jQuery e JSDom via npm install pacote_name --save)
  * var jsdom = require('jsdom');
  * $ = require('jquery')(new jsdom.JSDOM().window);
*/

/**
  * Informações da Carta de Correção
  *
  * A Carta de Correção Eletrônica (CC-e) é um evento legal e tem por objetivo
  * corrigir algumas informações da NF-e que já foi emitida.
*/

const json = JSON.stringify({
  "chave": "00000000000000000000000000000000000000000000",
  "correcao": "O CFOP correto é 5.102 referente a revenda tributada no mesmo estado."
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
  url: "https://webmaniabr.com/api/1/nfe/cartacorrecao/",
  method: "POST",
  dataType: 'json',
  data: json
}).done(function( data ) {
  console.log(data)
}).fail(function( error ){
  console.log(error.responseJSON)
})
