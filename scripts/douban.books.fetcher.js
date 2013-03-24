window["DOUBAN"]["BOOKS"]["CONTINUNOUSFETCHER"] = function (fav_books_el, contacts, douban_books_callback) {
  this.contacts = contacts;
  var number_per_loading = 8;

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
    return new DOUBAN.BOOKS.DOMAIN.BOOK(contact, book);
  };

  this.fetch_books_for = function (contact) {
    if (contact.are_all_books_loaded()) {
      return;
    }
    var doubanbooks = this;

    DOUBAN.getUserCollection({
      uid : contact.id,
      cat : 'book',
      status : 'read',
      maxresults : number_per_loading,
      startindex : contact.loaded_books(),
      callback : function (books) {
        contact.load(books.entry.length);
        var books_for_individual = new DOUBAN.BOOKS.DOMAIN.BOOKS();
        for (var idx = 0; idx < books.entry.length; idx++) {
          books_for_individual.add(doubanbooks._parse(contact, books.entry[idx]));
        }
        books = books_for_individual.books;
        for (var i = 0; i < douban_books_callback.length; i++) {
          douban_books_callback[i].act_with(books_for_individual);
        }
      }
    });
  }
};

window["DOUBAN"]["BOOKS"]["ONETIMEFETCHER"] = function (fav_books_el, contacts, douban_books_callback) {
  this.contacts = contacts;
  var number_per_loading = 3;

  this._parse = function (contact, book) {
    return new DOUBAN.BOOKS.DOMAIN.BOOK(contact, book);
  };

  this.fetch_books_for = function (contact) {
    var doubanbooks = this;
    DOUBAN.getUserCollection({
      uid : contact.id,
      cat : 'book',
      status : 'read',
      maxresults : number_per_loading,
      startindex : 1,
      callback : function (books) {
        var books_for_individual = new DOUBAN.BOOKS.DOMAIN.BOOKS();
        for (var idx = 0; idx < books.collections.length; idx++) {
          books_for_individual.add(doubanbooks._parse(contact, books.collections[idx]));
        }
        books = books_for_individual.books;
        for (var i = 0; i < douban_books_callback.length; i++) {
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

