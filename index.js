const displayPvalue = document.getElementById('previus-value');
const displayAvalue = document.getElementById('actual-value');
const btsNumbers = document.querySelectorAll('.isnumber');
const btsOpers = document.querySelectorAll('.operator');

const display = new Display(displayPvalue,displayAvalue);

btsNumbers.forEach(boton => {
    boton.addEventListener('click', () => display.insertnumber(boton.innerHTML));
});