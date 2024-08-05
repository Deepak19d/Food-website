$(document).ready(function () {
    $("#sale").click(function () {
        $(".blurbg").css("filter", "blur(5px)");
        $("#salepopup").show();
        // $("body").css("overflow","hidden");
        $(".blurimg").css("top","-7.5rem");
        $(".blurh1").css("top","-6.05rem");

    });
});
$(document).ready(function () {
    $("#unblur").click(function () {
        $(".blurbg").css("filter", "blur(0px)");
        $("#salepopup").css("display","none");
        $("body").css("overflow","visible");
        $("#couponpopup").show();
        $("#randomcoupon").hide();
    });
});



const saleList = ["Get 40% off", "Get 35% off", "Get 20% off", "Get 25% off", "Get 45% off"];

randomizeFunctionsale()

function randomizeFunctionsale() {
    document.getElementById("randomsale").innerHTML = saleList[Math.floor(Math.random() * saleList.length)]
}



