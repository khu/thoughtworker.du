var officeNavigation = function(){
    $(".colleague_tab").on("click", function () {
        var $this = $(this);
        $('.colleague_tab').removeClass('selected');
        $this.addClass('selected');
        return false;
    });
}

var getContactsSectionForAll = function(id) {
    getContacts(id, function (contacts) {
        var contactsObj = new DOUBAN.BOOKS.DOMAIN.CONTACTS(contacts);
        new DOUBAN.BOOKS.ONETIMEFETCHER(null, contactsObj, [new DOUBAN.BOOKS.RECENTBOOKS('#all_colleagues_books')]).fetch_books();
    });
}

var getContactsSectionForOffice = function(id, office, elements) {
    var contactsInOffice = [];
    getContacts(id, function (contacts) {
        for (var i = 0; i < contacts.length; i++) {
            if (contacts[i].location === office) {
                contactsInOffice.push(contacts[i]);
            }
        }
        var contactsObjInOffice = new DOUBAN.BOOKS.DOMAIN.CONTACTS(contactsInOffice);
        new DOUBAN.BOOKS.ONETIMEFETCHER(null, contactsObjInOffice, [new DOUBAN.BOOKS.RECENTBOOKS(elements)]).fetch_books();
    });
}

var renderBooksForAllColleagues = function() {
    $('#all_colleagues_books').removeClass('hide');
    $('#beijing_colleagues_books').addClass('hide');
    $('#xian_colleagues_books').addClass('hide');
    $('#chengdu_colleagues_books').addClass('hide');
}

var renderBooksForBeijingColleagues = function() {
    $('#beijing_colleagues_books').removeClass('hide');
    $('#all_colleagues_books').addClass('hide');
    $('#xian_colleagues_books').addClass('hide');
    $('#chengdu_colleagues_books').addClass('hide');
}

var renderBooksForXianColleagues = function() {
    $('#xian_colleagues_books').removeClass('hide');
    $('#all_colleagues_books').addClass('hide');
    $('#beijing_colleagues_books').addClass('hide');
    $('#chengdu_colleagues_books').addClass('hide');
}

var renderBooksForChengduColleagues = function() {
    $('#chengdu_colleagues_books').removeClass('hide');
    $('#xian_colleagues_books').addClass('hide');
    $('#all_colleagues_books').addClass('hide');
    $('#beijing_colleagues_books').addClass('hide');
}

var officeListener = function(id) {
    $("#all_colleagues_tab").on("click", function () {
        renderBooksForAllColleagues();
    });

    $("#beijing_colleagues_tab").on("click", function () {
        renderBooksForBeijingColleagues();
    });

    $("#xian_colleagues_tab").on("click", function () {
        renderBooksForXianColleagues();
    });

    $("#chengdu_colleagues_tab").on("click", function () {
        renderBooksForChengduColleagues();
    });
}