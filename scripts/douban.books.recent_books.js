window["DOUBAN"]["BOOKS"]["RECENTBOOKS"] = function() {
  this.act_with = function(books_for_individual) {
    if (books_for_individual.size() == 0) return;
    
    var contact = books_for_individual.get(0).contact;
    var books = books_for_individual.slice(5);

    var people_icon_section = $("#recent-people-template").tmpl(contact)
    var books_section = $("<ul class='recent'></ul>").append($("#recent-books-template").tmpl( books ))
    
    $("<p></p>").append(people_icon_section).append(books_section).appendTo("#recent")
  };
}
