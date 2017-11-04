/*
JSON request:
{
   "chave":"45150819652219000198550990000000011442380343",
   "motivo":"Cancelamento por motivos administrativos.",
   "ambiente":"1"
}
*/

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://webmaniabr.com/api/1/nfe/cancelar/",
  "method": "PUT",
  "headers": {
    "cache-control": "no-cache",
    "content-type": "application/json",
    "x-consumer-key": "SEU_CONSUMER_KEY",
    "x-consumer-secret": "SEU_CONSUMER_SECRET",
    "x-access-token": "SEU_ACCESS_TOKEN",
    "x-access-token-secret": "SEU_ACCESS_TOKEN_SECRET"
  },
  "processData": false,
  "data": "{\"chave\":\"45150819652219000198550990000000011442380343\",\"motivo\":\"Cancelamento por motivos administrativos.\",\"ambiente\":\"1\"}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
