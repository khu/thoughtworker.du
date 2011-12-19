$(document).ready(function(){
    $("#recent").hide();

    $("#recent_tab").click(function(){
        $("#content").toggle();
        $("#recent").toggle();
        $("#nav div").attr("class","inactive");
        $(this).attr("class","active");
    });

    $("#read_tab").click(function(){
        $("#content").toggle();
        $("#recent").toggle();
        $("#nav div").attr("class","inactive");
        $(this).attr("class","active");
    });
});
