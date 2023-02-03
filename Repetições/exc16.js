/*
 Extrutura de Repetição
                          |
                          v
                          /\
                         /  \ 👎
        +-------------> /    \----------+
        |               \    /          |     
        |                \  /           |                      
        |                 \/            |     
        |                 |             |
        |     Laço        |             |                  
        |               __v___          |                               
        |              |_true_|         |                 
        |                 |             |
        |_________________|             |
                           _____________|
                          |
                          v

function comerPizza(){
    while (temFatia()){
        comerFatia()
    }
}

*/
// Extrutura de repetição com teste lógico no inicio
var c = 1;
while (c <= 10) {
  console.log(`Passo ${c}`);
  c++;
}
// Extrutura de repetição com teste lógico no final
console.log(`-----------------------`);

var c = 1;
do {
  console.log(`Passo ${c}`);
  c++;
} while (c <= 10);
