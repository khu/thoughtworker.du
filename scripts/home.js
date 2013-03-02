var getContacts = function (uid, callback) {
  DOUBAN.getUserContacts({
    uid : uid,
    maxresults : 50,
    callback : function (users) {
      callback(DOUBAN.parseUsers(users).entries);
    }
  });
};

$(function () {
    DOUBAN.apikey = '060ca04f1db455951225e0ed591d00bf';
    var id = window.location.search == "" ? "thoughtworks" : window.location.search.replace("?id=", "");
    getContacts(id, function (contacts) {
      var contactsObj = new DOUBAN.BOOKS.DOMAIN.CONTACTS(contacts);
      new DOUBAN.BOOKS.ONETIMEFETCHER(null, contactsObj, [new DOUBAN.BOOKS.RECENTBOOKS.HOME('#recent')]).fetch_books();
    });

  }
);