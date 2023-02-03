// Um Array, ou um vetor, ou uma váriavel composta é uma váriavel que tem vários elementos. Cada elemento é composto pelo seu valor e por uma chave de identificação

let n = [4, 7, 8, 6];

// n.sort()
// n[3] = 6;
// n.push(1); // Acrecenta na ultima posição

// console.log(n);
// console.log(`O vetor tem ${n.length} posiçõs`);
// console.log(`O primeiro valor do vetor é ${n[0]}`)

// Percurso em vetores

// for (let pos = 0 ; pos<n.length ; pos++){
//     console.log(`A posição ${pos} tem o valor ${n[pos]}`)
// }

// Forma simplificada (Só funciona em arrays e objetos)
// Para cada posição em n
for(let pos in n){
    console.log(`A posição ${pos} tem o valor ${n[pos]}`)
}
// Buscar valores em vetores - n.indexOf(7)

let buscar = n.indexOf(8)
if(buscar == -1){
    console.log('Valor não encontrado')
}else{
    console.log(`O valor está na posição ${buscar}`) 
}
