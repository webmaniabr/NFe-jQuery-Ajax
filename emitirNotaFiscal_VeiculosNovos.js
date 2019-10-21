/*
  * Para executar utilizando NodeJS (Necessário instalar jQuery e JSDom via npm install pacote_name --save)
  * var jsdom = require('jsdom');
  * $ = require('jquery')(new jsdom.JSDOM().window);
*/

const json = JSON.stringify({
  "ID": 1137,
  "url_notificacao": "http://meudominio.com/retorno.php",
  "operacao": 1,
  "natureza_operacao": "Venda de produção do estabelecimento",
  "modelo": 1,
  "finalidade": 1,
  "ambiente": 2,
  "cliente": {
     "cpf": "000.000.000-00",
     "nome_completo": "Nome do Cliente",
     "endereco": "Av. Brg. Faria Lima",
     "complemento": "Escritório",
     "numero": 1000,
     "bairro": "Itaim Bibi",
     "cidade": "São Paulo",
     "uf": "SP",
     "cep": "00000-000",
     "telefone": "(00) 0000-0000",
     "email": "nome@email.com"
  },
  "produtos": [
     {
        "nome": "Nome do produto",
        "codigo": "nome-do-produto",
        "ncm": "6109.10.00",
        "cest": "28.038.00",
        "quantidade": 3,
        "unidade": "UN",
        "peso": "0.800",
        "origem": 0,
        "subtotal": "44.90",
        "total": "134.70",
        "classe_imposto": "REF2892",
        "veiculos_novos": {
           "tipo_operacao": "1",
           "chassi": "00000000000000000",
           "cor": "A1",
           "cor_descricao": "Descrição da Cor",
           "cv": "100",
           "cilindrada": "1000",
           "peso_liquido": "2.5000",
           "peso_bruto": "2.5000",
           "serie": "00001",
           "tipo_combustivel": "16",
           "numero_motor": "00001",
           "cmt": "2.000",
           "dist": "150",
           "ano_modelo": "2019",
           "ano_fabricacao": "2018",
           "tipo_pintura": "Tipo de Pintura",
           "tipo_veiculo": "06",
           "especie_veiculo": "1",
           "vin": "N",
           "condicao_veiculo": "1",
           "marca_modelo": "00001",
           "cor_denatran": "04",
           "lotacao": "5",
           "restricao": "0"
        }
     }
  ],
  "pedido": {
     "pagamento": 0,
     "presenca": 2,
     "modalidade_frete": 0,
     "frete": "12.56",
     "desconto": "10.00",
     "total": "174.60"
  }
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
  url: "https://webmaniabr.com/api/1/nfe/emissao/",
  method: "POST",
  dataType: 'json',
  data: json
}).done(function( data ) {
  console.log(data)
}).fail(function( error ){
  console.log(error.responseJSON)
})
