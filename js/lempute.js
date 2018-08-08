var lemputesBusena = true;

function toggleLempute() {
    elementas = document.getElementById('lempute');
	if (lemputesBusena) {
        elementas.src = "/img/light_on.jpg";
    } else {
        elementas.src = "/img/light_off.jpg";
    }
    lemputesBusena = !lemputesBusena;
}

toggleLempute();

$('.sachmatai span').click(function () {
    $('.sachmatai .cell').toggleClass('juoda')
});

window.setInterval(function(){
    $('.sachmatai .cell').toggleClass('juoda')
}, 1000);