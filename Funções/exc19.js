/*
Toda função pode ter os seguintes fatores:
    Uma chamada, um conjunto de parâmetros, uma ação e um retorno.

Funções são ações executadas assim que são chamadas ou em decorrência de algum evento
Uma função pode receber parâmetros e retornar um resultado. 



// Função que verifica se o número é par ou impar

function parimp(n){
    if(n%2==0){
        return 'Par'
    }else{
        return 'Impar!'
    }
}
let res = parimp(0)
console.log(res)


// Função de Soma

function soma(n1=0, n2=0){
    return n1 + n2
}
console.log(soma(7,3))

// Jogar una função dentro de uma váriavel

let v = function(x){
    return x*2
}
console.log(v(5))


// Calcular o fatorial de um número

function fatorial(n){
    let fat = 1
    for(let c = n ; c > 1 ; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))

function fatorial(n){
    let fat = 1
    for(let c = n ; c > 1 ; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))


// Recursividade. Chamar função dentro dela mesma

function fatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))

// 5! = 5 x 4 x 3 x 2 x 1
// 5! = 5 x 4!

// n! = n (n-1)!

*/