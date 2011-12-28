window["DOUBAN"]["BOOKS"]["FETCHER"] = function(contacts, douban_books_callback) {
  this.contacts = contacts;
  this.fetch_books = function() {
    for (var i = 0; i < contacts.length; i++) {
      var books_for_individual = new DOUBAN.BOOKS.DOMAIN.BOOKS();
      this.fetch_books_for(contacts[i], 1, books_for_individual);
    }
  };
  this._parse = function(contact, book) {
    var book = DOUBAN.parseSubject(book['db:subject']);
    return new DOUBAN.BOOKS.DOMAIN.BOOK(contact, book);
  }
  this.fetch_books_for = function(contact, start_index, books_for_individual) {
    var doubanbooks = this;
    DOUBAN.getUserCollection({
      uid: contact.nid,
      cat: 'book',
      status: 'read',
      maxresults: '50',
      startindex: start_index,
      callback: function(books) {
        if (books.entry.length == 0) {
          for (var i = 0; i < douban_books_callback.length; i++) {
            douban_books_callback[i].act_with(books_for_individual);
          }
          return;
        }
        for (var idx = 0; idx < books.entry.length; idx++) {
          books_for_individual.add(doubanbooks._parse(contact, books.entry[idx]));
        }
        doubanbooks.fetch_books_for(contact, start_index + 50, books_for_individual);
      }
    });
  }
}
