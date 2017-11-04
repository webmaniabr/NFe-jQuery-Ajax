var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://webmaniabr.com/api/1/nfe/sefaz/",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    "content-type": "application/json",
    "x-consumer-key": "SEU_CONSUMER_KEY",
    "x-consumer-secret": "SEU_CONSUMER_SECRET",
    "x-access-token": "SEU_ACCESS_TOKEN",
    "x-access-token-secret": "SEU_ACCESS_TOKEN_SECRET"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
