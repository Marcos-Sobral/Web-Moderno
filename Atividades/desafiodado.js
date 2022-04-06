var PI = 3.14, raio = 10, Area; // valor do PI atribuido a mim
// ou 
var Area, raio = 10; // Maior precisão com o valor completo do PI
Area = Math.PI * (raio * raio);
console.log("Resultado da Area da circunferencia: " + Area + " m2");

var temp, a = 7, b = 94;
/*temp = a;
a = b;
b = temp;
*/

// ou 

[a, b] = [b, a];

console.log("B: "+ b + " A: " + a);