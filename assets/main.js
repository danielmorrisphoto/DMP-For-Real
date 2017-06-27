
$(document).ready(function() {
        $('.carousel').carousel({
                interval: 3000
        })
});
$("div.navbar-fixed-top").autoHidingNavbar();


// Cuando el mouse esta sobre el texto con id portrait
// ense~ana la foto con id portrait_foto


$(document).ready(function () {
    $('#portrait_label').hover(function(){
        $('.carousel-inner').children().removeClass('active');
        $('#portrait_foto').addClass('active'); //to make text underlined on hover
        $('.carousel').carousel('pause');
        /// $('#image').show(); //displays image on mouse in
    },function(){
        $('.carousel').carousel('cycle'); //remove underline on mouse out
    });

    $('#overview_label').hover(function(){
        $('.carousel-inner').children().removeClass('active');
        $('#overview_foto').addClass('active'); //to make text underlined on hover
        $('.carousel').carousel('pause');
        /// $('#image').show(); //displays image on mouse in
    },function(){
        $('.carousel').carousel('cycle'); //remove underline on mouse out
    });

    $('#travel_label').hover(function(){
        $('.carousel-inner').children().removeClass('active');
        $('#travel_foto').addClass('active'); //to make text underlined on hover
        $('.carousel').carousel('pause');
        /// $('#image').show(); //displays image on mouse in
    },function(){
        $('.carousel').carousel('cycle'); //remove underline on mouse out
    });
});

// $('#formcontainer').hover(function(){
//    $("#myCarousel4").carousel('pause');
// },function(){
//    $("#myCarousel4").carousel('cycle');
// });