var menu = document.getElementById('menu');
var drop = document.getElementsByClassName('close')[0];

menu.addEventListener('click', otvori, false);

function otvori() {
    drop.classList.toggle('open');
    drop.classList.toggle('close');
}