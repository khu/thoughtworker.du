var getContacts = function (uid, callback) {
  callback(DOUBAN.parseUsers(contact_json).entries);
  // DOUBAN.getUserContacts({
  //     uid : uid,
  //     maxresults : 50,
  //     callback : function (users) {
  //       callback(contact_json.entry);
  //     }
  //   });
};

var renderHomePage = function(id) {
    var contactsObj = new DOUBAN.BOOKS.DOMAIN.CONTACTS(DOUBAN.parseUsers(contact_json).entries);
    new DOUBAN.BOOKS.ONETIMEFETCHER(null, contactsObj, [new DOUBAN.BOOKS.RECENTBOOKS.HOME('#recent')]).fetch_books();
}

var navigation = function() {
    $('.nav_tab').on('click', function() {
        var $this = $(this);
        $('.nav_tab').removeClass('selected');
        $this.addClass('selected');
        $(".nav_page").addClass("hide");
        return false;
    });
};

var navTabListener = function(id) {
    $("#home").on("click", function () {
        $("#recent").removeClass("hide");
    });

    $("#colleagues").on("click", function () {
        $("#colleagues_container").removeClass("hide");
        renderBooksForAllColleagues();
        getContactsSectionForAll(id);
        getContactsSectionForOffice(id, "北京", '#beijing_colleagues_books');
        getContactsSectionForOffice(id, "陕西西安", '#xian_colleagues_books');
        getContactsSectionForOffice(id, "四川成都", '#chengdu_colleagues_books');
    });
}

$(function () {
    DOUBAN.apikey = '0043bd00d263a6f400cb3702772af4dc';
    var id = window.location.search == "" ? "thoughtworks" : window.location.search.replace("?id=", "");

    renderHomePage(id);

    navigation();
    navTabListener(id);

    officeNavigation();
    officeListener(id);

    initialNavigation();
    initialListener(id);
});
