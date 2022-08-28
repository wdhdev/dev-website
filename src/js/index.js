$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $(".navbar").addClass("sticky");
            $(".goTop").fadeIn();
        } else {
            $(".navbar").removeClass("sticky");
            $(".goTop").fadeOut();
        }
    })

    $(".menu-toggler").click(function() {
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");

        $(window).scroll(function() {
            $(".menu-toggler").removeClass("active");
            $(".navbar-menu").removeClass("active");
        })
    })

    $(".goTop").click(function() { scroll(0, 0) });
})