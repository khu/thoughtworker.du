window["DOUBAN"]["BOOKS"]["FAVBOOKS"] = function() {
  this.act_with = function(books_for_individual) {
    var html = "<ul>"
    var content = $("<ul/>");
    for(var idx = 0; idx < books_for_individual.size(); idx++) {
      var bookImage = $("<img/>");
      bookImage.attr("src", books_for_individual.get(idx).image_url);

      var bookLink = $("<a/>");
      bookLink.attr("href", books_for_individual.get(idx).book_url);
      bookLink.attr("target", "_blank");
      bookLink.append(bookImage);

      var bookItem = $("<li/>");
      bookItem.append(bookLink);

      content.append(bookItem);
    }
    $("#content").html(content)
  };
}
