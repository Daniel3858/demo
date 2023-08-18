/* function fazerSuco(fruta1, fruta2) {     
    return 'suco de: ' + fruta1 + ' com ' + fruta2
}
const suco1 = fazerSuco('manga', 'graviola')
const suco2 = fazerSuco('abacaxi', 'morango')
console.log(suco1 + ' e, ' + suco2 + '.'); */
/* function Person(name) {
    this.name = name,
    this.walk = function() {
      return this.name + ' está andando.'
    }
  }
let daniel = new Person('Daniel')
// console.log(daniel.walk());
let joao = new Person('João')
// console.log(joao.walk()) */
/* let phrase = 'Jesus é bom e o Diabo é vacilão'
// console.log(phrase)
let myArray = phrase.split("")
// console.log(myArray) 
let separation = myArray.join("")
// console.log(separation);
let arrayzinhuu = Array.from(separation)
separation = arrayzinhuu.join('')
// console.log(separation)
// console.log(arrayzinhuu) */
/* let lista = ['sql', 'css', 'js']
function retirando(tecnologia, array) {
  let index = array.indexOf(tecnologia)
  array.splice(index, 1)
};
retirando('sql', lista)
//console.log(lista)
lista.push('sql')
//console.log(lista) */
/* function calculator(number1, operator, number2) {
  let result = 0;

  if (operator == '*') {
    result = number1 * number2
  } else if (operator == '/') {
    result = number1 / number2
  } else if (operator == '') {
    throw 'Precisa ser colocado um operador'
  } else {
    throw new Error('Não temos esse operador no momento')
  }

  return console.log('Esse é o seu resultado ' + result)
}
try {
  //calculator(3, '+', 2)
} catch (error) {
  console.log(error.message)
}
//console.log('depois do erro') */
/* function revelandoSuaNota(notaNúmerica) {
  let notaFinal = '';

  if (notaNúmerica >= 90 && notaNúmerica <= 100) {
    notaFinal = 'A'
  } else if (notaNúmerica >= 80 && notaNúmerica <= 89) {
    notaFinal = 'B'
  } else if (notaNúmerica >= 70 && notaNúmerica <= 79) {
    notaFinal = 'C'
  } else if (notaNúmerica >= 60 && notaNúmerica <= 69) {
    notaFinal = 'D'
  } else if (notaNúmerica >= 0 && notaNúmerica <= 59) {
    notaFinal = 'E'
  } else {
    throw new Error('Nota inválida')
  }

  return 'Sua nota final é: ' + notaFinal
}
//console.log(revelandoSuaNota(90)) */
/* let OneObject = {
  despesas: [1839, 7483, 8744],
  receitas: [2847, 5739, 9849],
}
function calculate(array) {
  let total = 0;
  for(let valor of array) {
    total =+ valor
  }
  return total
}
function meuSaldo() {
  let minhasReceitas = calculate(OneObject.receitas)
  let minhasDespesas = calculate(OneObject.despesas)
  let meuSaldo = minhasReceitas - minhasDespesas;
  if (meuSaldo >= 0) {
    return 'O seu saldo está positivo: ' + meuSaldo
  } else {
    return 'O seu saldo está negativo: ' + meuSaldo
  }
}
//console.log(meuSaldo()) */
/* function tranformDegree(degree) {
  let celsiusExists = degree.toUpperCase().includes('C')
  let fahrenheitExists = degree.toUpperCase().includes('F')
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado')
  }
  let newDegree;
  let newSign;
  let formula

  if (celsiusExists) {
    newSign = 'F';
    newDegree = Number(degree.toUpperCase().replace('C', ''))
    formula = (celsius) => celsius * 9/5 + 32
  } else if (fahrenheitExists) [
    newSign = 'C',
    newDegree = Number(degree.toUpperCase().replace('F', '')),
    formula = (fahrenheit) => (fahrenheit - 32) * 5/9
  ]


  return formula(newDegree) + newSign
}
// console.log(tranformDegree('20C'))
function transformer(temperature) {
  let celsius = temperature
  let fahrenheit = temperature.toUpperCase().includes('F') 
  let conversão;
  let newCelsius;
  let newFahrenheit

  if (temperature.toUpperCase().includes('C')) {
    newFahrenheit = Number(celsius.toUpperCase().replace('C', ''))
    conversão = newFahrenheit * 9/5 + 32 + 'F'
  } else if (fahrenheit) {
    newCelsius = Number(temperature.toUpperCase().replace('F', ''))
    conversão = newCelsius - 32 * 5/9 + 'C'
  } else if (temperature.toUpperCase().includes('E')) {
    newFahrenheit = Number(temperature.toUpperCase().replace('E', ''))
    conversão = newFahrenheit * 9/5 + 32 + 'F'
  }

  return conversão
} 
//console.log(transformer('24h')) */
/* const booksByCategory = [
  {
    category: 'Riquezas',
    books: [
      {
        title: 'Pai Rico e Pai Pobre',
        author: 'dua yoice'

      },
      {
        title: 'Very Money',
        author: 'Salomas' 
      },
      {
        title: 'Provérbios',
        author: 'Salomas'
      }
    ]
  },
  {
    category: 'Inteligência Emocional',
    books: [
      {
        title: 'Muita Inteligência',
        author: 'Daniel Golleman'
      },
      {
        title: 'Very Inteligence',
        author: 'Danielzion'
      },
      {
        title: 'Salmos',
        author: 'Davi'
      }
    ]
  }
]
const totalCategories = booksByCategory.length
//console.log('O total de categorias é : ' + totalCategories)
for(let category of booksByCategory) {
//  console.log('Total de livros da categoria ' + category.category + ' é: ' + category.books.length)
}
function countAuthors(author) {
  const booksOfAuthor = []
  const authors = []
  const autor = author[0].toUpperCase() + author.substring(1)
  for(let category of booksByCategory) {
    for(let book of category.books) {
      const upper = book.author.toUpperCase()
      if(upper === author.toUpperCase()) {
        booksOfAuthor.push(book.title)
      }
  }}
  for(let category of booksByCategory) {
    for(book of category.books) {
      if(authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
    }}
  const disponiveis = authors.join(', ')
  if(booksOfAuthor.length == 0) {
    throw new Error(`Não temos esse autor no momento. Autores disponiveis: ${disponiveis}.`)
  }
  return 'Livros do autor(a) ' + autor + ': ' + booksOfAuthor.join(', ') + '.'
}
try {
  console.log(countAuthors('davi'))
} catch (error) {
  totozin = error.message
  console.log(totozin)
} */
/* 2° const main = document.querySelector('main')
console.log(main.style.position)

const body = document.querySelector('body')
const button = document.queryselector('#openModal')
const div = document.querySelector('div')
button.addEventListener('click', function () {
  div.classList.remove('invisible')
})
body.addEventListener('keypress', voltando)
function voltando(event) {
  if(event.key === 'Escape') {
    div.classList.add('invisible')
  }
} 

// Criar verificação para ver se tem ou não a classe 'invisible'.
// Tentar rodar esses mesmos arquivos em outro diretório.
*/
/* const {getFlag} = require('./getflag')
const {module2} = require('./getflag')
try {
  console.log(`Oi ${getFlag('--name')}, ${module2('--greeting')}`)
} catch (error) {
  console.log(error.message)
}

const { EventEmitter } = require('events')
const ev = new  EventEmitter() */
/* const { flags } = require('./getflag');
const jeito1 = new flags('--name');
const app = new flags(); // Eu não preciso usar o "new" nessa linha porque não estou usando o constructor.

console.log(`Olá ${jeito1.getFlag()},
 ${app.getFlagValue('--greeting')}`) */
/* const blueBol = {
  size: 40,
  color: "blue"
}
const pinkBol = {...blueBol, color:"pink"} */
/* console.log('pedindo uber')
let pedido = true 

const promessa = new Promise((resolve, reject) => {
  if (pedido == true) {
    return resolve("Carro chegou")
  } return reject("Pedido negado.")
})

promessa
.then(result => {console.log(result)})
.catch(erro => {console.log(erro)})
.finally(() => {console.log("Finalizada!")})
console.log('Aguardando resposta') 


const { STATUS_CODES } = require("http")
const https = require("https")
const API = "https://www.gooogle.com"
https.get(API, response => console.log(response.statusCode)) */
/* import axios from "axios";

Promise.all([
  axios.get("https://api.github.com/users/Daniel3858"),
  axios.get("https://api.github.com/users/Daniel3858/repos")
])
.then(responses => {
  console.log(responses[0].data.login)
  console.log(responses[1].data.length)
})
.catch(err => console.log(err.message))
.finally(() => console.log("Finished Promise!"))


async function start() {
  const url = "https://api.github.com/users/Daniel3858"
  const user = await axios.get(url) // Poderia usar um ".then".
  const login = await user.data.login
  console.log(login)
}

start().catch(e => console.log(e.message)) */

