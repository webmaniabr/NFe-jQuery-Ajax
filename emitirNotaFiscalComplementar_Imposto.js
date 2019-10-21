/*
  * Para executar utilizando NodeJS (Necessário instalar jQuery e JSDom via npm install pacote_name --save)
  * var jsdom = require('jsdom');
  * $ = require('jquery')(new jsdom.JSDOM().window);
*/

/**
  * Informações da Nota Fiscal Complementar
  *
  * A Nota Fiscal Complementar é destinada para acrescentar dados e valores
  * não informados no documento fiscal original. Utilizado para acréscimo no preço
  * e quantidade da mercadoria ou somar valores faltantes dos impostos ICMS, ICMS-ST e IPI.
  *
  * OBS: Deve ser complementado o Preço/Quantidade OU Impostos.
  * OB2: Caso deseje complementar as duas opções devem ser emitidas NF-e separadas.
*/

const json = JSON.stringify({
	"nfe_referenciada": "00000000000000000000000000000000000000000000",
	"operacao": 1,
	"natureza_operacao": "Natureza da operação",
	"ambiente": 2,
	"cliente": {
		"cpf": "000.000.000-00",
		"nome_completo": "Nome completo",
		"endereco": "Av. Brg. Faria Lima",
		"complemento": "Escritorio",
		"numero": 1000,
		"bairro": "Itaim Bibi",
		"cidade": "São Paulo",
		"uf": "SP",
		"cep": "00000-000",
		"telefone": "(00) 0000-0000",
		"email": "nome@email.com"
	},
	"impostos": {
		"icms": {
			"codigo_cfop": "6.102",
			"situacao_tributaria": "900",
			"bc_icms": "100.00",
			"valor_icms": "18.00"
		}
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
  url: "https://webmaniabr.com/api/1/nfe/complementar/",
  method: "POST",
  dataType: 'json',
  data: json
}).done(function( data ) {
  console.log(data)
}).fail(function( error ){
  console.log(error.responseJSON)
})
