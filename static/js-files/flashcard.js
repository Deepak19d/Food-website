$(document).ready(function () {
    $(".card1").click(function () {
        $(".blurbg").css("filter", "blur(5px)");
        $("#card11").fadeIn();
        $(".blurimg").css("top","-7.5rem");
        $(".blurh1").css("top","-6.05rem");
    });
});
$(document).ready(function () {
    $(".cardclose").click(function () {
        $(".blurbg").css("filter", "blur(0px)");
        $("#card11").css("display","none");
        // $("body").css("overflow","visible");
    });
});
$(document).ready(function () {
    $(".card2").click(function () {
        $(".blurbg").css("filter", "blur(5px)");
        $("#card22").fadeIn();
        $(".blurimg").css("top","-7.5rem");
        $(".blurh1").css("top","-6.05rem");
    });
});
$(document).ready(function () {
    $(".cardclose").click(function () {
        $(".blurbg").css("filter", "blur(0px)");
        $("#card22").css("display","none");
        // $("body").css("overflow","visible");
    });
});
