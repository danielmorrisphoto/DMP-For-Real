
$(document).ready(function() {
        $('.carousel').carousel({
                interval: 5000
        })
});
$("div.navbar-fixed-top").autoHidingNavbar();

// WHY DID I ADD THIS FUCNTION FOR?
// var checkitem = function() {
//     var $this;
//     $this = $("#slideshow");
//         if ($("#slideshow .carousel-inner .item:first").hasClass("active")) {
//         $this.children(".left").hide();
//         $this.children(".right").show();
// } else if ($("#slideshow .carousel-inner .item:last").hasClass("active")) {
//         $this.children(".right").hide();
//         $this.children(".left").show();
// } else {
//         $this.children(".carousel-control").show();
// }
// };

// checkitem();

// $("#slideshow").on("slid.bs.carousel", "", checkitem);
