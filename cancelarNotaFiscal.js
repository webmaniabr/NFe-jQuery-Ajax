/*
  * Para executar utilizando NodeJS (Necessário instalar jQuery e JSDom via npm install pacote_name --save)
  * var jsdom = require('jsdom');
  * $ = require('jquery')(new jsdom.JSDOM().window);
*/

/**
  * Cancelar Nota Fiscal
  *
  * Atenção: Somente poderá ser cancelada uma NF-e cujo uso tenha sido previamente
  * autorizado pelo Fisco e desde que não tenha ainda ocorrido o fato gerador, ou seja,
  * ainda não tenha ocorrido a saída da mercadoria do estabelecimento. Atualmente o prazo
  * máximo para cancelamento de uma NF-e é de 24 horas (1 dia), contado a partir da autorização
  * de uso. Caso já tenha passado o prazo de 24 horas ou já tenha ocorrido a circulação da
  * mercadoria, emita uma NF-e de devolução para anular a NF-e anterior.
*/

const json = JSON.stringify({
  "chave": "00000000000000000000000000000000000000000000",
  "motivo": "Cancelamento por motivos administrativos."
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
  url: "https://webmaniabr.com/api/1/nfe/cancelar/",
  method: "PUT",
  dataType: 'json',
  data: json
}).done(function( data ) {
  console.log(data)
}).fail(function( error ){
  console.log(error.responseJSON)
})
