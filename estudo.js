/*let idade = 5
console.log(idade)
let altura = 180
console.log(altura)*/

/*let valorIngressoAdulto = 150
let valorIngressoInfantil = 75
let valorIngressoBebe = 'Isento'
console.log(valorIngressoAdulto)
console.log(valorIngressoInfantil)
console.log(valorIngressoBebe)*/

/*let valorIngressoAdulto = 20;
valorIngressoAdulto = 30;
console.log(valorIngressoAdulto)*/

/*let nome = 'Rafael';
let idade = 25;
let estaAprovado = true;
let sobrenome = undefined;

let pessoa = {
    nome: 'Rafael',
    idade: 25,
    estaAprovado: true,
    sobrenome: 'de Souza'
};
console.log(pessoa)

let vamoDale = {
    nome: 'Rei delas',
    idade: 25,
    estaAprovado: false,
    sobrenome: 'Burgdurf'
}
console.log(vamoDale)*/

//let familia = [true,45,'jhonatan',17];
//console.log(familia.length)
//console.log(familia[0]);

//let namorada = ['Amanda', 17, //'Cachoeirinha', 'Meu amor']
//console.log(namorada[3])

//let corSite = 'Azul'
//function resetaCor(cor, tonalidade){
//    corSite = cor + ' ' + tonalidade;
//};
//console.log(corSite);
//resetaCor('verde', 'claro')
//console.log(corSite);
//let nomeDoCliente = 'Felipe'
//function resetaNome(nome, sobrenome){
  //  nomeDoCliente = nome + ' ' + //sobrenome;
//};
//console.log(nomeDoCliente)
//resetaNome('Matheus', 'Burgdurf')
//console.log(nomeDoCliente)

//Realiza uma tarefa mas não devolve nada
function dizerNome(){
    console.log('Jhonataan');
}
dizerNome();

//Faz um cálculo ou operação e retorna algo
function MultiplicaPorDois(valor){
    return valor*2;
}
let resultado = MultiplicaPorDois(5);
console.log(resultado);

//Operadores Aritiméticos(matemáticos)
//Operadores Atribuição
//Operadores de Comparação
//Operadores Lógicos
//Operadores Bitwise

let salario = 100;

// +, -, *, /, **
console.log(salario + salario);
console.log(salario * salario);

// ++, --, Operadores de incremento

let idade = 18;
console.log(++idade);
console.log(idade);

console.log(--idade);
console.log(--idade)

//Operadores de operação

let valorTecladoGamer = 100;
valorTecladoGamer += valorTecladoGamer
console.log(valorTecladoGamer);
 

//Operadores de igualdade
//Igualdade restrita
console.log( 1 === 1);
console.log( '1' === 1);
//o === verifica o tipo também
console.log ( 1 == 1);
console.log('1' == 1);

//Operador Ternário
//Tem um cliente, se tiver 100 pontos é premium, caso não é comum
let pontos = 200;
let tipo = pontos > 100? 'premium' : 'comum';
console.log(tipo)

//Operadores lógicos
//end, or, not = e, ou, não
//Operador Lógico 'e' (&&)
//retorna TRUE se os dois operandos forem true
console.log(false && true);

let maiorDeIdade = true;
let possuiCarteriraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteriraDeTrabalho;
console.log(podeAplicar)

//Operador Lógico 'ou' (||)
//Basta que uma das condições seja true

//Operador not (!)
let candidatioRecusado = !podeAplicar;
console.log(candidatioRecusado)

//Testes

let html = true;
let js = true;
let css = false;
let podeTrabalhar = html || js && css ;
console.log(podeTrabalhar)

let a = 'vermelho';
let b = 'azul';

let c = a;
a = b;
b = c;
console.log(a);
console.log(b);

//if..Else
//Se a hora estiver entre 06:00 até 12:00 : Bom dia!
//Se estiver entre 12:00 até 18:00 : Boa tarde!
//Caso contrário :  Boa Noite!

let hora = 16;

if (hora > 6 && hora < 12) {
    console.log('Bom dia!');
}
else if (hora > 12 && hora < 18){
    console.log("Boa tarde!")
}
else {
    console.log('Boa noite!')
}

//Switch.. Case
let permissao;
permissao = 'diretor';
switch(permissao){
    case 'comum':
    console.log('Usuário comum');
    break;

    case 'gerente':
    console.log('Usuário gerente');
    break;
     
    case 'diretor':
    console.log('Usuário diretor');
    break;

    default:
        console.log('Usuário não reconhecido')

}

//como repetir coisas de maneira fácil usando o loop

// 1. for
// 2. while
// 3.Do.. while
// 4.For..In
// 5.For..of

for(let i = 1; i <= 5; i ++){
    if(i % 2 !== 0){
        console.log(i)
    }
}

//while loop
let i = 5;

while (i >=1) {
    if(i % 2 !== 0){
        console.log(i);
    }
    i--;
}

//Do.. while

do {
    console.log('digitando');
    i++;
} while(i < 10)

//for..in

const pessoa = {
    nome: 'Felipe',
    idade: 21
};
for(let chave in pessoa){
    console.log(chave, pessoa);
}

//for-of
const cores = ['vermelho','azul','verde']

for(let cor of cores){
    console.log(cor);
}

let valorMaior = max(5,3)
console.log(valorMaior);
function max(num1, num2){
    if(num1 > num2)
        return num1;
     return num2;
}




