/*
                         |
                         v
                         /\
                        /  \
        _______________/ if \_______________
       |               \    /               |    
       |                \  /                |                     
       |                 \/                 |
       |                                    |
     __|___                              ___|___
    |_true_|                            |_false_|
       |                                    |
       |_________________ o ________________|
                          |
                          v 

// Tipos de Condição
        Condição Simples
            if(condição){
                 true
             } 

        Condição Composta
            if(condição){
                 true
             }else{
                 false
             }
*/
var velocidade = 12;

console.log(`A velocidade é ${velocidade}`);

if (velocidade >= 60) {
  console.log(`Você ultrapassou a velocidade permitida. MULTADO!`);
}
console.log(`Dirija sempre com cinto de segurança`);