var tagNavigation = function () {
    $(".tag_tab").on("click", function () {
        var $this = $(this);
        $('.tag_tab').removeClass('selected');
        $this.addClass('selected');
        return false;
    });
}
