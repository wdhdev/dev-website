$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $(".goTop").fadeIn();
        } else {
            $(".goTop").fadeOut();
        }
    })

    $(".goTop").click(function() { scroll(0, 0) });
})