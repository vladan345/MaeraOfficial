
//Promena majici

var crno = document.getElementsByClassName('t-black')[0];

crno.addEventListener('click', promeniCrno, false);

var urlMajice = ['shirt','shirt2','shirtL','shirtC'];

var slike = document.getElementsByClassName('crne');

function promeniCrno() {
    
    for(var i=0; i < slike.length; i++) {
        
        slike[i].src = 'img/shop-img/'+ urlMajice[i] + '.png';
    }
}
var belo = document.getElementsByClassName('t-white')[0];

belo.addEventListener('click', promeniBelo, false);

function promeniBelo() {
    
    for(var i=0; i < slike.length; i++) {
        
        slike[i].src = 'img/shop-img/'+ urlMajice[i] + 'W.png';
    }
}


//Promena dukseva


var crnoH = document.getElementsByClassName('hoodie-black')[0];

crnoH.addEventListener('click', promeniCrne, false);

var urlDuks = ['hoodie','hoodie2','hoodieL','hoodieC'];

var slikeH = document.getElementsByClassName('crni');

function promeniCrne() {
    
    for(var i=0; i < slike.length; i++) {
        
        slikeH[i].src = 'img/shop-img/'+ urlDuks[i] + '.png';
    }
}
var beloH = document.getElementsByClassName('hoodie-white')[0];

beloH.addEventListener('click', promeniBele, false);

function promeniBele() {
    
    for(var i=0; i < slike.length; i++) {
        
        slikeH[i].src = 'img/shop-img/'+ urlDuks[i] + 'W.png';
    }
}