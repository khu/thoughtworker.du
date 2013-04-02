var searchResultNavigation = function () {
    $(".search_result_tab").on("click", function () {
        var $this = $(this);
        $('.search_result_tab').removeClass('selected');
        $this.addClass('selected');
        return false;
    });
}

var searchResultListener = function (id) {
    $("#book-result").on("click", function () {
        $('#search-result-books-content').removeClass('hide');
        $('#search-result-colleagues-content').addClass('hide');
    });

    $("#colleague-result").on("click", function () {
        $('#search-result-books-content').addClass('hide');
        $('#search-result-colleagues-content').removeClass('hide');
    });
}
