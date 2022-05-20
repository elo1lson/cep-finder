'use strict'

const axios = require('axios')

module.exports = async (uf, mn, lg) => {

	if (!uf) {
		return new Error('Por favor Insira um estado!')
	}
	if (!mn) {
		return new Error('Por favor insira um município')
	}
	if (!lg) {
		return new Error('Por favor insira um logradouro para pesquisa')
	}

	const base = `https://viacep.com.br/ws/${uf}/${mn}/${lg}/json/`

	const cepFinder = await axios.get(base)
		.then(r => r.data)
		.catch(e => e.data)

	return cepFinder

}