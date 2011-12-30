
window["DOUBAN"]["BOOKS"]["TAGS"] = function() {
    this.render_books = function(selectedTag, books) {
        for(var i = 0; i < books.length;i++) {
            var bookObj = $(books[i])
            if(bookObj.is(selectedTag)) {
                    bookObj.css("visibility", "visible");
            } else {
                if ($("#misc").is(":checked")) {
                    bookObj.css("visibility", "visible");
                } else {
                    bookObj.css("visibility", "hidden");
                }
            }
        }    
    }

    this.selected_tag = function(ids) {
        var result = "";
        for(var i = 0; i < ids.length;i++) {
            if($(ids[i]).is(':checked')) {
                var class_attr = $(ids[i]).attr("class");
                if(class_attr) {
                    result += class_attr + ","                
                }
            }
        }

        if (result != "" && result.substr(-1)  === ',') {
            result = result.substr(0, result.length - 1)
            result = "." + result
        }
        return result.replace(/,( *)/g, ",.");
    }
    this.act_with = function(books_for_individual) {
        var selected = this.selected_tag(["#tech", "#mgt", "#misc"]);
        var thisobject = this
        books_for_individual.foreach(function(book) {
          DOUBAN.getBookTags({
            id : book.id,
            callback:function(tagsJson) {
              var tagObj = DOUBAN.parseTags(tagsJson);
              var tags = new DOUBAN.BOOKS.DOMAIN.TAGS(tagObj);
              tags.attach_to("#fav-" + book.id);
              thisobject.render_books(selected, $("#fav-" + book.id))
            }
          })
        })
    };
}
