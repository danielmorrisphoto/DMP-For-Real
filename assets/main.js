

// Cuando el mouse esta sobre el texto con id portrait
// ense~ana la foto con id portrait_foto


$(document).ready(function () {

        // $("nav.navbar.navbar-fixed-top").autoHidingNavbar();
        

        $('#myCarousel.carousel').carousel({
                interval: 4000
        })

    $('#portrait_label').hover(function(){
        $('.carousel-inner').children().removeClass('active');
        $('#portrait_foto').addClass('active');
        $('.carousel').carousel('pause');
        /// $('#image').show(); //displays image on mouse in
    },function(){
        $('.carousel').carousel('cycle'); //remove underline on mouse out
    });

    $('#overview_label').hover(function(){
        $('.carousel-inner').children().removeClass('active');
        $('#overview_foto').addClass('active');
        $('.carousel').carousel('pause');
        /// $('#image').show(); //displays image on mouse in
    },function(){
        $('.carousel').carousel('cycle'); //remove underline on mouse out
    });

    $('#travel_label').hover(function(){
        $('.carousel-inner').children().removeClass('active');
        $('#travel_foto').addClass('active');
        $('.carousel').carousel('pause');
        /// $('#image').show(); //displays image on mouse in
    },function(){
        $('.carousel').carousel('cycle'); //remove underline on mouse out
    });
});

