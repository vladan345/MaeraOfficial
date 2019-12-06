var menu=document.getElementById('menu');
var drop=document.getElementsByClassName('ham-nav')[0];

menu.addEventListener('click', open, false);

function open(evObj){
    drop.classList.toggle('toggle');
}

var valute = document.getElementsByClassName('valuta');
var cene = document.getElementsByClassName('cena');

var rsd = ["600,00 RSD","750,00 RSD","750,00 RSD","700,00 RSD","800,00 RSD","1450,00 RSD"];

var eur = ["5,00 EUR","6,30 EUR","6,30 EUR","6,00 EUR","6,70 EUR","12,00 EUR"];

var usd = ["5,70 USD","7,00 USD","7,00 USD","6,50 USD","7,60 USD","13,70 USD"];


valute[0].addEventListener('click', promeniDinar, false);

function promeniDinar() {
for (var i=0; i<rsd.length; i++) {
    
    cene[i].textContent = rsd[i];
    
}
}

valute[1].addEventListener('click', promeniEuro, false);

function promeniEuro() {
for (var i=0; i<eur.length; i++) {
    
    cene[i].textContent = eur[i];
    
}
}

valute[2].addEventListener('click', promeniDolar, false);

function promeniDolar() {
for (var i=0; i<usd.length; i++) {
    
    cene[i].textContent = usd[i];
    
}
}