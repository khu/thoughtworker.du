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

var getAndRenderBooksForAll = function(id) {
    $('#all_colleagues').removeClass('hide');
    hideOfficeAndInitialElements();
    getContacts(id, function (contacts) {
        var contactsObj = new DOUBAN.BOOKS.DOMAIN.CONTACTS(contacts);
        new DOUBAN.BOOKS.ONETIMEFETCHER(null, contactsObj, [new DOUBAN.BOOKS.RECENTBOOKS('#all_colleagues')]).fetch_books();
    });
}

var hideOfficeAndInitialElements = function () {
    var elements = offices.concat(initials);
    for (index in elements) {
        var element = '#' + elements[index] + '_colleagues';
        $(element).addClass('hide');
    }
}

var renderElements = function (current_elements) {
    var elements = offices.concat(initials).concat("all");
    for (index in elements) {
        var element = '#' + elements[index] + '_colleagues';
        if (element === current_elements) {
            $(element).removeClass('hide');
        } else {
            $(element).addClass('hide');
        }
    }
}

var renderBooksByElements = function (elements) {
    renderElements(elements);
}

var getAndRenderBooksByInitialAndOffice = function (id, office, initial, elements) {
    $(elements).empty();
    getContacts(id, function (contacts) {
        var contactsObj;

        if(office != "all") {
            var contactsInOffice = [];
            for (var i = 0; i < contacts.length; i++) {
                if (contacts[i].location == office) {
                    contactsInOffice.push(contacts[i]);
                }
            }
            contactsObj = new DOUBAN.BOOKS.DOMAIN.CONTACTS(contactsInOffice);
        }else {
            contactsObj = new DOUBAN.BOOKS.DOMAIN.CONTACTS(contacts);
        }

        if(initial != "all") {
            var contactsByInitial = [];
            var allContacts = contactsObj.contacts;
            for (var i = 0; i < allContacts.length; i++) {
                if (allContacts[i].initial === initial) {
                    contactsByInitial.push(allContacts[i]);
                }
            }
            contactsObj.contacts = contactsByInitial;
        }

        new DOUBAN.BOOKS.ONETIMEFETCHER(null, contactsObj, [new DOUBAN.BOOKS.RECENTBOOKS(elements)]).fetch_books();
    });
    renderBooksByElements(elements);
}

var getSelectedOfficeTab = function() {
    var office = $(".office_tab.selected").attr("id").split("_colleagues_tab")[0];
    return getOffice(office);
}

var getSelectedInitialTab = function() {
    return $(".initial_tab.selected").attr("id").split("_tab")[0];
}

var initialOnClick = function (id, initial) {
    var tab_elements = "#" + initial + "_tab";
    var render_elements = "#" + initial + "_colleagues";
    $(tab_elements).on("click", function () {
        var selected_office = getSelectedOfficeTab();
        getAndRenderBooksByInitialAndOffice(id, selected_office, initial, render_elements);
    });
}

var officeOnClick = function (id, office) {
    var tab_elements = "#" + office + "_colleagues_tab";
    var render_elements = "#" + office + "_colleagues";
    $(tab_elements).on("click", function () {
        var selected_office = getOffice(office);
        var selected_initial = getSelectedInitialTab();
        getAndRenderBooksByInitialAndOffice(id, selected_office, selected_initial, render_elements);
    });
}

var allTabClicked = function(id) {
    var render_elements = "#all_colleagues";
    var selected_office = getSelectedOfficeTab();
    var selected_initial = getSelectedInitialTab();
    getAndRenderBooksByInitialAndOffice(id, selected_office, selected_initial, render_elements);
}

var officeListener = function (id) {
    $("#all_colleagues_tab").on("click", function () {
        allTabClicked(id);
    });

    for (index in offices) {
        officeOnClick(id, offices[index]);
    }
}

var initialListener = function (id) {
    $('#all_tab').on("click", function () {
        allTabClicked(id);
    });

    for (index in initials) {
        initialOnClick(id, initials[index]);
    }
}