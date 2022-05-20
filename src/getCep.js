'use strict'

const axios = require('axios')

module.exports = async (cep) => {

	if (!cep) {
		return new Error('Por favor Insira um cep')
	}

	const base = `https://viacep.com.br/ws/${cep}/json/`

	const cepSearch = await axios.get(base)
		.then(r=> r.data)
	  .catch(e => e)
	
	return cepSearch

}