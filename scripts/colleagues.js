var office_navigation = function(){
    $(".colleague_tab").on("click", function () {
        var $this = $(this);
        $('.colleague_tab').removeClass('selected');
        $this.addClass('selected');
        return false;
    });
}

var renderContactsSectionForAll = function(id) {
    getContacts(id, function (contacts) {
        var contactsObj = new DOUBAN.BOOKS.DOMAIN.CONTACTS(contacts);
        $('#colleagues_books').empty();
        new DOUBAN.BOOKS.ONETIMEFETCHER(null, contactsObj, [new DOUBAN.BOOKS.RECENTBOOKS('#colleagues_books')]).fetch_books();
    });
}

var renderContactsSectionForOffice = function(id, office) {
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

var office_listener = function(id) {
    $("#all_colleagues_tab").on("click", function () {
        renderContactsSectionForAll(id);
    });

    $("#beijing_colleagues_tab").on("click", function () {
        renderContactsSectionForOffice(id, "北京");
    });

    $("#xian_colleagues_tab").on("click", function () {
        renderContactsSectionForOffice(id, "陕西西安");
    });

    $("#chengdu_colleagues_tab").on("click", function () {
        renderContactsSectionForOffice(id, "四川成都");
    });
}