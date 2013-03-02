window["DOUBAN"]["BOOKS"]["RECENTBOOKS"] = function(recent_book_el) {
  this.act_with = function(books_for_individual) {
    if (books_for_individual.size() == 0) return;

    var contact = books_for_individual.get(0).contact;
    var books = books_for_individual.slice(7);

    var people_icon_section = $("#recent-people-template").tmpl(contact);
    var book_element = $("#recent-books-template").tmpl(books);
    book_element.fancybox({
        onComplete : function(o){
          var hidden_link = $(o).next();
          var href = hidden_link.attr("href");
          var text = hidden_link.text()
          $("#fancybox-title-float-main").html("<a href='" + href + "' style='text-decoration:underline'>" + text + "</a>")
        }
    });
    book_element = $('<p></p>').append(book_element);
    var books_section = $('<div class="ninecol last"></div>').append(book_element);
    $(recent_book_el).append(people_icon_section).append(books_section);
  };
};

window["DOUBAN"]["BOOKS"]["RECENTBOOKS"]["HOME"] = function(recent_book_el) {
  this.act_with = function(books_for_individual) {
    if (books_for_individual.size() == 0) return;

    var contact = books_for_individual.get(0).contact;
    var books = books_for_individual.get(0);

    var people_section = $("#recent-people-template").tmpl(contact);
    var book_element = $("#recent-book-template").tmpl(books);

    var books_section = $('<div class="recent-book"></div>').append(book_element);

    $(recent_book_el).append(books_section);
    $(".recent-book:last-child").append(people_section);
  };
};
