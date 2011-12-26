var allTags = new DOUBAN.BOOKS.DOMAIN.TAGS();

window["DOUBAN"]["BOOKS"]["TAGS"] = function() {
  this.act_with = function(books_for_individual) {
    books_for_individual.foreach(function(book) {
      DOUBAN.getBookTags({
        id : book.id,
        callback:function(tagsJson) {
          var tagObj = DOUBAN.parseTags(tagsJson);
          var tags = new DOUBAN.BOOKS.DOMAIN.TAGS(tagObj);
          allTags.merge(tags).renderTo("#tags");
        }
      })
    })
  };
}
