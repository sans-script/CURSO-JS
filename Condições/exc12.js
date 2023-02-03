// // Condição Aninhadas
//                          |
//                          v
//                          /\
//                         /  \
//        +---------------/ if \---------------+
//        |               \    /               |    
//        |                \  /                |                     
//        |                 \/                 |
//        |                                    |
//      __|___                                 |
//     |_true_|                                /\   
//        |                           +-------/if\--------+
//        |                           |       \  /        |
//        |                           |        \/         |
//        |                         __|___             ___|___
//        |                        |_true_|           |_false_|
//        |                           |                   |
//        |                           +---------°---------+  
//        |                                     |
//        +_________________°___________________| 
//                          |
//                          |
//                          V

//         if (condição1){
//             bloco1
//         }else{
//             if(condção2){
//                 bloco2
//             }else{
//                 bloco3
//             }
//         }


var idade = 66
console.log(`Você tem ${idade} anos.`)

if(idade < 16){
    console.log(`Não vota`)
} else if(idade < 18 || idade > 65){
    console.log("Voto opcional")
} else{
    console.log('Voto obrigatório')
}
