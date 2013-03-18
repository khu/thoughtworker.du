var offices = ["beijing", "xian", "chengdu"];
var initials = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var officeNavigation = function () {
    $(".office_tab").on("click", function () {
        var $this = $(this);
        $('.office_tab').removeClass('selected');
        $this.addClass('selected');
        return false;
    });
}

var initialNavigation = function () {
    $(".initial_tab").on("click", function () {
        var $this = $(this);
        $('.initial_tab').removeClass('selected');
        $this.addClass('selected');
        return false;
    });
}

var getContactsSectionForAll = function (id) {
    getContacts(id, function (contacts) {
        var contactsObj = new DOUBAN.BOOKS.DOMAIN.CONTACTS(contacts);
        new DOUBAN.BOOKS.ONETIMEFETCHER(null, contactsObj, [new DOUBAN.BOOKS.RECENTBOOKS('#all_colleagues_books')]).fetch_books();
    });
}

var getContactsSectionForOffice = function (id, office, elements) {
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

var hideAllBooksElements = function () {
    $('#all_colleagues_books').addClass('hide');
}

var showAllBooksElements = function () {
    $('#all_colleagues_books').removeClass('hide');
}

var hideAllInitialElements = function () {
    for (index in initials) {
        var elements = '#' + initials[index] + '_colleagues';
        $(elements).addClass('hide');
    }
}

var hideAllOfficeElements = function () {
    for (index in offices) {
        var elements = '#' + offices[index] + '_colleagues_books';
        $(elements).addClass('hide');
    }
}

var renderBooksForAllColleagues = function () {
    showAllBooksElements();
    hideAllOfficeElements();
    hideAllInitialElements();
}

var renderInitialElements = function (current_elements) {
    for (index in initials) {
        var elements = '#' + initials[index] + '_colleagues';
        if (elements == current_elements) {
            $(elements).removeClass('hide');
        } else {
            $(elements).addClass('hide');
        }
    }
}

var renderOfficeElements = function (current_elements) {
    for (index in offices) {
        var elements = '#' + offices[index] + '_colleagues_books';
        if (elements == current_elements) {
            $(elements).removeClass('hide');
        } else {
            $(elements).addClass('hide');
        }
    }
}

var renderBooksByInitial = function (elements) {
    hideAllBooksElements();
    hideAllOfficeElements();
    renderInitialElements(elements);
}

var getAndRenderBooksByInitial = function (id, initial, elements) {
    $(elements).empty();
    var contactsByInitial = [];
    getContacts(id, function (contacts) {
        var contactsObj = new DOUBAN.BOOKS.DOMAIN.CONTACTS(contacts);
        var allContacts = contactsObj.contacts;
        for (var i = 0; i < allContacts.length; i++) {
            if (allContacts[i].initial === initial) {
                contactsByInitial.push(allContacts[i]);
            }
        }
        contactsObj.contacts = contactsByInitial;
        new DOUBAN.BOOKS.ONETIMEFETCHER(null, contactsObj, [new DOUBAN.BOOKS.RECENTBOOKS(elements)]).fetch_books();
    });
    renderBooksByInitial(elements);
}

var renderBooksByOffice = function (elements) {
    hideAllBooksElements();
    hideAllInitialElements();
    renderOfficeElements(elements);
}

var initialOnClick = function (id, initial) {
    var tab_elements = "#" + initial + "_tab";
    var render_elements = "#" + initial + "_colleagues";
    $(tab_elements).on("click", function () {
        getAndRenderBooksByInitial(id, initial, render_elements);
    });
}

var officeOnClick = function (office) {
    var tab_elements = "#" + office + "_colleagues_tab";
    var render_elements = "#" + office + "_colleagues_books";
    $(tab_elements).on("click", function () {
        renderBooksByOffice(render_elements);
    });
}

var officeListener = function (id) {
    $("#all_colleagues_tab").on("click", function () {
        renderBooksForAllColleagues();
    });

    for (index in offices) {
        officeOnClick(offices[index]);
    }
}

var initialListener = function (id) {
    $('#all_tab').on("click", function () {
        renderBooksForAllColleagues();
    });

    for (index in initials) {
        initialOnClick(id, initials[index]);
    }
}