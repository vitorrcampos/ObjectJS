console.log("Crie um objeto que receba ao menos três propriedades sobre você.")

let eu = {
    idade:17,
    nome:"João",
    hobbye:"Músico"
}
console.log(eu)




console.log("Adicione uma nova propriedade sem alterar seu objeto inicial")
eu.genero = "Punk"
console.log(eu)




 console.log("Remova uma propriedade desse objeto")

delete eu.idade

console.log(eu)



// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = {
    familia: [
        {
            nome: "Beiçola",
            idade: 69,
            telefone: 2555555
        },
        {
            nome: "Lineu",
            idade: 69,
            telefone: 2555555
        }
    ],
    amigos: ["Dona-Nenê", "Tuco", "Gina", "Mendonça", "Júnior"]
}

//Mostre no console o nome de um amigo de cada lista.
console.log(cadastro.familia[0])
console.log(cadastro.amigos[3])

