let select = document.getElementById('select')
let input = document.getElementById('input')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


function adicionar(){
    if (isNumero(input.value) && !inLista(input.value, valores)){
        valores.push(Number(input.value))
        let item = document.createElement('option')
        item.text = `Valor ${input.value} adicionado`
        select.appendChild(item)
        res.innerHTML = ''
    } else{
        alert('Valor inválido ou já presente na lista')
    }
    input.value = ''
    input.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adione valores antes de finalizar!')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let média = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        média = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números inseridos</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma total de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média total de todos os valores é ${média}</p>`
    }
}
