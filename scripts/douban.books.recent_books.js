window["DOUBAN"]["BOOKS"]["RECENTBOOKS"] = function() {
  this.act_with = function(books_for_individual) {
    if (books_for_individual.size() > 0) {
      var contact = books_for_individual.get(0).contact;
      var books = books_for_individual.slice(5);

      $("<p></p>").append($("#recent-people-template").tmpl(contact)).append($("<ul class='recent'></ul>").append($("#recent-books-template").tmpl( books ))).appendTo("#recent")
    }
  };
}
