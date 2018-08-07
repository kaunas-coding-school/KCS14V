var vardas;
var amzius;

var Skaiciuoti = function () {
	var dabar = (new Date()).getFullYear();
	vardas = document.getElementById('vardas').value;	
	amzius = document.getElementById('amzius').value;	
	
	document.getElementById('rez').innerHTML = vardas + ' gime: ' + (dabar - amzius);
}