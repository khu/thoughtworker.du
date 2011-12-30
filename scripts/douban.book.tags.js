
window["DOUBAN"]["BOOKS"]["TAGS"] = function() {
  this.act_with = function(books_for_individual) {
    var selected =  selectedTag(["#tech", "#mgt", "#misc"])
    books_for_individual.foreach(function(book) {
      DOUBAN.getBookTags({
        id : book.id,
        callback:function(tagsJson) {
          var tagObj = DOUBAN.parseTags(tagsJson);
          var tags = new DOUBAN.BOOKS.DOMAIN.TAGS(tagObj);
          tags.attach_to("#fav-" + book.id);
          renderBooks(selected, ["#fav-" + book.id])
        }
      })
    })
  };
}
