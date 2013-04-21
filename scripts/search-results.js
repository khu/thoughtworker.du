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

    $("#search-button").on("click", function () {
        var str = "search_results.html?input="+document.searchform['input'].value;
        window.location.replace(str);
    });

}
