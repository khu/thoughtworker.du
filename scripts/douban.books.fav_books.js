function setImageSize(imgobj, iPreImg_w, iPreImg_h) {
  if (typeof(imgobj) != "object")imgobj = $(imgobj);
  var image = new Image();
  var iwidth = iPreImg_w
  var iheight = iPreImg_h
  image.src = imgobj.src;
  if (image.width > iwidth || image.height > iheight) {
    if (image.width > 0 && image.height > 0) {
      if (image.width / image.height >= iwidth / iheight) {
        if (image.width > iwidth) {
          imgobj.width = iwidth;
          imgobj.height = (image.height * iwidth) / image.width;
        } else {
          imgobj.width = image.width;
          imgogj.height = image.height;
        }
      }
      else {
        if (image.height > iheight) {
          imgobj.height = iheight;
          imgobj.width = (image.width * iheight) / image.height;
        } else {
          imgobj.width = image.width;
          imgobj.height = image.height;
        }
      }
    }
  }
  else {
    imgobj.width = image.width;
    imgobj.height = image.height;
  }
}

window["DOUBAN"]["BOOKS"]["FAVBOOKS"] = function(fav_book_el) {
  var end_index = 0;
  var books = [];
  var number_per_loading = 8;

  function bind_scroll_event() {
    $(window).on('scroll', function() {
      if (fav_book_el.is(':visible')) {
        var $window = $(window);
        var scroll_top = $window.scrollTop();
        var window_height = $window.height();

        var height = fav_book_el.offset().top + fav_book_el.height();

        if (height - (scroll_top + window_height) < 100) {
          load_books();
        }
      }
    });
  }

  function load_books() {
    var book_length = books.length;
    if (end_index != book_length) {
      var current_end_index = end_index + number_per_loading;
      if (current_end_index > book_length) {
        current_end_index = book_length;
      }
      var books_dom = $("#fav-books-template").tmpl(books.slice(end_index, current_end_index));

      fav_book_el.append(books_dom);
      books_dom.imagesLoaded(function() {
        fav_book_el.masonry('appended', books_dom);
      });
      end_index = current_end_index;
    }
  }

  this.act_with = function(books_for_individual) {
    if (books.length == 0) {
      books = books_for_individual.books;
      load_books();
      bind_scroll_event();
    }
    else {
      books = books.concat(books_for_individual.books);
    }
  };
}
