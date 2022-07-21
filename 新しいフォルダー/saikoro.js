function getDice1() {
    var dice1 = Math.floor(Math.random() * 6);          
    document.getElementById('condice1').innerHTML = (dice1 + 1);
}