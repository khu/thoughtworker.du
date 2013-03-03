var colleagues_navigation = function(){
    $(".colleague_tab").on("click", function () {
        var $this = $(this);
        $('.colleague_tab').removeClass('selected');
        $this.addClass('selected');
        return false;
    });
}

$(function () {
    colleagues_navigation();
});