var getContacts = function (uid, callback) {
  DOUBAN.getUserContacts({
    uid : uid,
    maxresults : 50,
    callback : function (users) {
      callback(DOUBAN.parseUsers(users).entries);
    }
  });
};

var navigation = function() {
    $('.nav_tab').on('click', function() {
        var $this = $(this);
        $('.nav_tab').removeClass('selected');
        $this.addClass('selected');
        $(".nav_page").addClass("hide");
        return false;
    });
};

$(function () {
    navigation();
    DOUBAN.apikey = '060ca04f1db455951225e0ed591d00bf';
    var id = window.location.search == "" ? "thoughtworks" : window.location.search.replace("?id=", "");
    getContacts(id, function (contacts) {
      var contactsObj = new DOUBAN.BOOKS.DOMAIN.CONTACTS(contacts);
      new DOUBAN.BOOKS.ONETIMEFETCHER(null, contactsObj, [new DOUBAN.BOOKS.RECENTBOOKS.HOME('#recent')]).fetch_books();
    });

    $("#home").on("click", function () {
        $("#recent").removeClass("hide");
    });

    $("#colleagues").on("click", function () {
        $("#colleagues_container").removeClass("hide");
        getContacts(id, function (contacts) {
            var contactsObj = new DOUBAN.BOOKS.DOMAIN.CONTACTS(contacts);
            new DOUBAN.BOOKS.ONETIMEFETCHER(null, contactsObj, [new DOUBAN.BOOKS.RECENTBOOKS('#colleagues_books')]).fetch_books();
        });
    });
});
