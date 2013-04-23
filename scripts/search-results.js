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
        $('#search_results_for_books').removeClass('hide');
        $('#search_results_for_colleagues').addClass('hide');
    });

    $("#colleague-result").on("click", function () {
        $('#search_results_for_books').addClass('hide');
        $('#search_results_for_colleagues').removeClass('hide');
    });

    $("#search-button").on("click", function () {
        var str = "search_results.html?input="+document.searchform['input'].value;
        window.location.replace(str);
    });

}
