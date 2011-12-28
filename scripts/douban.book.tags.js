var global_tags = new DOUBAN.BOOKS.DOMAIN.TAGS()

window["DOUBAN"]["BOOKS"]["TAGS"] = function() {
  this.act_with = function(books_for_individual) {
    return;
    books_for_individual.foreach(function(book) {
      DOUBAN.getBookTags({
        id : book.id,
        callback:function(tagsJson) {
          var tagObj = DOUBAN.parseTags(tagsJson);
          var tags = new DOUBAN.BOOKS.DOMAIN.TAGS(tagObj);
          tags.renderToBook("#fav-" + book.id)
          tags.renderTo("#tags", global_tags.merge(tags))
        }
      })
    })
  };
}
