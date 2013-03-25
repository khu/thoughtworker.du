window["DOUBAN"]["BOOKS"]["CONTINUNOUSFETCHER"] = function (fav_books_el, contacts, douban_books_callback) {
  var MAX_RESULTS = 3;
  this.contacts = contacts;

  this.bind_scroll_event = function () {
    var fetcher = this
    $(window).on('scroll', function () {
      if (fav_books_el.is(':visible')) {
        var current_contract = fetcher.contacts.current()
        fetcher.fetch_books_for(current_contract);
        if (current_contract.are_all_books_loaded()) {
          fetcher.fetch_books_for(fetcher.contacts.current());
        }
      }
    });
  };

  this.fetch_books = function () {
    this.fetch_books_for(this.contacts.current());
    this.bind_scroll_event();
  };
  this._parse = function (contact, book) {
    return new DOUBAN.BOOKS.DOMAIN.BOOK(contact, book.book);
  };

  this.fetch_books_for = function (contact) {
    if (contact.are_all_books_loaded()) {
      return;
    }
    var doubanbooks = this;

    DOUBAN.getUserCollection({
      uid : contact.id,
      status : 'read',
      callback : function (books) {
        contact.load(books.entry.length);
        contact.totalBooks = books.total;
        var books_for_individual = new DOUBAN.BOOKS.DOMAIN.BOOKS();
        for (var idx = 0; idx < MAX_RESULTS; idx++) {
          books_for_individual.add(doubanbooks._parse(contact, books.entry[idx]));
        }
        books = books_for_individual.books;
        for (var i = 0; i < MAX_RESULTS; i++) {
          douban_books_callback[i].act_with(books_for_individual);
        }
      }
    });
  }
};

window["DOUBAN"]["BOOKS"]["ONETIMEFETCHER"] = function (fav_books_el, contacts, douban_books_callback) {
  var MAX_RESULTS = 3;
  this.contacts = contacts;

  this._parse = function (contact, book) {
    return new DOUBAN.BOOKS.DOMAIN.BOOK(contact, book.book);
  };

  this.fetch_books_for = function (contact) {
    var doubanbooks = this;
    DOUBAN.getUserCollection({
      uid : contact.id,
      status : 'read',
      callback : function (books) {
        contact.totalBooks = books.total;
        var books_for_individual = new DOUBAN.BOOKS.DOMAIN.BOOKS();
        for (var idx = 0; idx < MAX_RESULTS; idx++) {
          books_for_individual.add(doubanbooks._parse(contact, books.collections[idx]));
        }
        books = books_for_individual.books;
        for (var i = 0; i < MAX_RESULTS; i++) {
          douban_books_callback[i].act_with(books_for_individual);
        }
      }
    });
  };

  this.fetch_books = function () {
    var fetcherObject = this;
    this.contacts.foreach(function (contact) {
      fetcherObject.fetch_books_for(contact)
    })
  }
};

