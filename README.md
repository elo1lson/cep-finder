# cep-finder
Uma simples biblioteca para buscar CEPs

## Como usar?
 ```js
 const cep = require('cepFinder')
 (async()=>{
 
   //Irá buscar o cep
   const res = await cep.getCep(
   'Numero do cep'
   )
 
  //Irá retorna as informações do cep através de uma busca
  const find = await cep.findCep(
  'Sigla do estado',
  'Nome do município',
  'Logradouro'
  )
})

 ```
