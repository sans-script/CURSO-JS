var agora = new Date();
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 12){
    console.log('Bom dia!')
} else if (hora <= 18){
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite')
}


// Condição Múltipla
//                          |
//                          v
//                          /\
//                         /  \
//        +---------------/    \---------------+
//        |               \    /               |    
//        |                \  /                |                     
//        |                 \/                 |
//        |                 |                  |
//      __|__             __|__              __|__
//     |_____|           |_____|            |_____|
//        |                 |                  |
//        |                 |                  |
//        |_________________°__________________|
//                          |
//                          V

// switch (expressão){
//     case valor 1:
//        break <- Obrigatório
//     case valor 2:
//        break <- Obrigatório
//     case valor 3:
//        break <- Obrigatório
//     default:
//        break <- opcional, mas coloca assim mesmo
// }
