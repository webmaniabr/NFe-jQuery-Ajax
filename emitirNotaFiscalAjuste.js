/*
  * Para executar utilizando NodeJS (Necessário instalar jQuery e JSDom via npm install pacote_name --save)
  * var jsdom = require('jsdom');
  * $ = require('jquery')(new jsdom.JSDOM().window);
*/

/**
  * Informações da Nota Fiscal Eletrônica
  *
  * A Nota Fiscal de Ajuste é destinada somente para fins específicos de escrituração
  * contábil para empresas de Lucro Normal ou Presumido, não representando saída ou entrada
  * de produtos. Utilizado para nota de crédito de ICMS como transferência, ressarcimento
  * ou restituição do ICMS.
*/

const json = JSON.stringify({
	"operacao": 1,
	"natureza_operacao": "CREDITO ICMS ESTOQUE",
	"codigo_cfop": 2.949,
	"valor_icms": 1000,
	"ambiente": 2,
	"cliente": {
		"cpf": "000.000.000-00",
		"nome_completo": "Nome completo",
		"endereco": "Av. Brg. Faria Lima",
		"complemento": "Escritório",
		"numero": 1000,
		"bairro": "Itaim Bibi",
		"cidade": "São Paulo",
		"uf": "SP",
		"cep": "00000-000",
		"telefone": "(00) 0000-0000",
		"email": "nome@email.com"
	}
})

$.ajax({
  headers: {
    "cache-control": "no-cache",
    "content-type": "application/json",
    "x-consumer-key": "Pfdi55HclcN9ii2r7vDFTTBNPm4LFhIE",
    "x-consumer-secret": "K7DDL8i4ZZkBFEDus1BpnclGETNTaMP3L6NkPqRJSN9Ii0T0",
    "x-access-token": "164-kye21coaQ8w7ulvxrAJa3FJKD7tVBeqV1C47ILwiH15hWOv6",
    "x-access-token-secret": "Cxq00hNcvRL26dZ96tyjYymDaj4khQUuOP0RkXAIHRCLeJNA"
  },
  url: "https://webmaniabr.com/api/1/nfe/ajuste/",
  method: "POST",
  dataType: 'json',
  data: json
}).done(function( data ) {
  console.log(data)
}).fail(function( error ){
  console.log(error.responseJSON)
})
