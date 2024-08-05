//show chat window when click on live_help
$(document).ready(function(){
    $("#live-help").click(function(){
        $("#chat-container").show();
        $(".blurbg").css("filter", "blur(5px)");
        $("#live-help").hide();
        $(".blurimg").css("top","-7.5rem");
        $(".blurh1").css("top","-6.05rem");
    });
});
//close chat window when click on close
$(document).ready(function(){
    $("#close").click(function(){
        $(".blurbg").css("filter", "blur(0px)");
        $("#chat-container").hide();
        $("#live-help").show();
    });
});