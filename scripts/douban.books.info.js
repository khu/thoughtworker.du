var book_info = function(book_element) {
  book_element.on('mouseover', function() {
    var $this = $(this);
    var $desc = $("#book_description")
    var t = setTimeout(function() {
      var book_id = $this.find("a").attr("data-book-id");

      DOUBAN.getBook({
        id: book_id,
        callback: function(book) {
          var book_info = new DOUBAN.BOOKS.DOMAIN.BOOK_INFO(book_id, book);
          var book_el = $("#book-description-template").tmpl(book_info);
          $desc.html(book_el).show();
          $desc.css("left", $this.offset().left + "px");
          $desc.css("top", $this.offset().top + "px");
        }
      });
    }, 1000);
    $desc.data('timeout', t);
  });

  $("#book_description").on('mouseout', function() {
    var $this = $(this);
    clearTimeout($this.data('timeout'));
    $this.hide();
  });
};

window["DOUBAN"]["BOOKS"]["DOMAIN"]["BOOK_INFO"] = function(id, book) {
  this.id = id;
  this.title = book.title ? book.title.$t : "";
  this.summary = book.summary ? book.summary.$t : "";
  this.rating = book["gd:rating"] ? book["gd:rating"]["@average"] : "";
}
