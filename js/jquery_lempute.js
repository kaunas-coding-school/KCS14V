var sideState = true;
function toggleSidebar(){
    $('.sidebar').slideToggle();
    if (sideState) {
        $('.mainLayout').css('grid-template-columns','1fr');
    } else {
        $('.mainLayout').css('grid-template-columns','1.2fr 5fr');
    }
    sideState = !sideState;
}

$('.burger').click(function(){
    // $('.sidebar').slideToggle();
    toggleSidebar();
});

$('.cell').click(function () {
    $(this).toggleClass('juoda');
});


$.get("/failas.html", function (data, status) {
    $('#failo_turinys_cia').html(data);
});
