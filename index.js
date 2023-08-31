/*
//Exercicio 1
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])//ira printar Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1])//ira printar Virginia Cavendish
console.log(filme.transmissoesHoje[2])//Globo 14h
*/

//Exercicio 2
/*

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}// copia as chaves do objeto cachorro e altera o nome de Juca para Juba

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}//troca todos os a por o

console.log(cachorro)//nome: Juca, idade: 3, SRD
console.log(gato)//nome: Juba, idade: 3, SRD
console.log(tartaruga)//nome: Jubo, idade: 3, SRD

*/
//Exercicio 4
/*

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))//false porque a chave tem o valor de false
console.log(minhaFuncao(pessoa, "altura"))//undefined pq n existe chave nesse valor

*/

// Exemplo de entrada
const pessoa = {
    nome: "Vitor Hugo", 
    apelidos: ["Vitinho", "Vitão", "Vit"]
 }
 
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
 // Exemplo de saída
 //"Eu sou Vitor, mas pode me chamar de: Vitinho, Vitão ou Vit"