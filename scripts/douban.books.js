window["DOUBAN"]["BOOKS"]["FETCHER"] = function(fav_books_el, contacts, douban_books_callback) {
  this.contacts = contacts;

  var end_index = 0;
  var books = [];
  var number_per_loading = 8;
  
  
  this.bind_scroll_event = function() {
      var fetcher = this
      $(window).on('scroll', function() {
        if (fav_books_el.is(':visible')) {
          var $window = $(window);
          var scroll_top = $window.scrollTop();
          var window_height = $window.height();

          var height = fav_books_el.offset().top + fav_books_el.height();

          if (height - (scroll_top + window_height) < 100) {
            fetcher.fetch_books_for(fetcher.contacts.current());
          }
        }
      });
    }

  this.fetch_books = function() {
    if (books.length == 0) {
        this.fetch_books_for(this.contacts.current());
        this.bind_scroll_event();
     } else {
       books = books.concat(books_for_individual.books);
     }
  };
  this._parse = function(contact, book) {
    var book = DOUBAN.parseSubject(book['db:subject']);
    return new DOUBAN.BOOKS.DOMAIN.BOOK(contact, book);
  }

  this.fetch_books_for = function(contact) {
    if (contact.are_all_books_loaded()) {
        return;
    }
    var doubanbooks = this;

    DOUBAN.getUserCollection({
      uid: contact.id,
      cat: 'book',
      status: 'read',
      maxresults: number_per_loading,
      startindex: contact.loaded_books(),
      callback: function(books) {
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
}
