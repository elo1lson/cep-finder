'use strict'

 const cep = require('cepFinder')
 (async()=>{
 
  //Irá retorna as informações do cep através de uma busca
  const find = await cep.findCep(
  'CE',
  'Fortaleza',
  'Rua E')
})
