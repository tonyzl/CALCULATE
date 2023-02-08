const displayPvalue = document.getElementById('previus-value');
const displayAvalue = document.getElementById('actual-value');
const btsNumbers = document.querySelectorAll('.number');
const btsOpers = document.querySelectorAll('.operator');

const calculate = new Calculate();
console.log(calculate.toadd(2,3)); 
console.log(calculate.tosus(2,3)); 
console.log(calculate.todiv(2,3)); 
console.log(calculate.tomult(2,3)); 