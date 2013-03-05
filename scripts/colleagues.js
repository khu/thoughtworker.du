var colleagues_navigation = function(){
    $(".colleague_tab").on("click", function () {
        var $this = $(this);
        $('.colleague_tab').removeClass('selected');
        $this.addClass('selected');
        return false;
    });
}

var getContactsIn = function(id, office) {
    var contactsInOffice = [];
    getContacts(id, function (contacts) {
        for (var i = 0; i < contacts.length; i++) {
            if (contacts[i].location === office) {
                contactsInOffice.push(contacts[i]);
            }
        }
        var contactsObjInOffice = new DOUBAN.BOOKS.DOMAIN.CONTACTS(contactsInOffice);
        $('#colleagues_books').empty();
        new DOUBAN.BOOKS.ONETIMEFETCHER(null, contactsObjInOffice, [new DOUBAN.BOOKS.RECENTBOOKS('#colleagues_books')]).fetch_books();
    });
}

$(function () {
    colleagues_navigation();
    var id = window.location.search == "" ? "thoughtworks" : window.location.search.replace("?id=", "");

    $("#all_colleagues_tab").on("click", function () {
        getContacts(id, function (contacts) {
            var contactsObj = new DOUBAN.BOOKS.DOMAIN.CONTACTS(contacts);
            $('#colleagues_books').empty();
            new DOUBAN.BOOKS.ONETIMEFETCHER(null, contactsObj, [new DOUBAN.BOOKS.RECENTBOOKS('#colleagues_books')]).fetch_books();
        });
    });

    $("#beijing_colleagues_tab").on("click", function () {
        getContactsIn(id, "北京");
    });

    $("#xian_colleagues_tab").on("click", function () {
        getContactsIn(id, "陕西西安");
    });

    $("#chengdu_colleagues_tab").on("click", function () {
        getContactsIn(id, "四川成都");
    });
});