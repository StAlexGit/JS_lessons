"use strict"; 
function first() {
    "use strict"; 
    var kolya = { name: "Kolya"};
    
    return kolya;
}

function second() {
    
    //'with'.you = 'far away';
    
    return 'with'.you;
}
let kk = new Function('a','b', 'return a+b;');  
console.log(first());
console.log(second());
console.log(kk (2, 8));