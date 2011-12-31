var called = 0
window["DOUBAN"]["BOOKS"]["TAGS"] = function() {
    this.render_books = function(books) {
        var selectedTag = this.transform_to_selector(this.selected_filter(["#tech", "#mgt", "#misc"]))
        for(var i = 0; i < books.length;i++) {
            var bookObj = $(books[i])
            if(bookObj.is(selectedTag)) {
                bookObj.css("visibility", "visible");
            } else {
                if ($("#misc").is(":checked") && !this.is_tech_or_management(bookObj)) {
                    bookObj.css("visibility", "visible");
                } else {
                    bookObj.css("visibility", "hidden");                    
                }
            }
        }
    }
    
    this.is_tech_or_management = function(book) {
        var selector = this.transform_to_selector([$("#tech"), $("#mgt")])
        return book.is(selector);
    }
    
    this.selected_filter = function(ids) {
        var checkbox_objs = []
        for(var i = 0; i < ids.length;i++) {
            if ($(ids[i]).is(":checked")) {
                checkbox_objs.push($(ids[i]))
            }
        }
        return checkbox_objs;
    }
    
    this.transform_to_selector = function(checkbox_objs) {
        var result = "";
        for(var i = 0; i < checkbox_objs.length;i++) {
            var class_attr = $(checkbox_objs[i]).attr("class");
            if(class_attr) {
                result += class_attr + ","                
            }
        }

        if (result != "" && result.substr(-1)  === ',') {
            result = result.substr(0, result.length - 1)
            result = "." + result
        }
        return result.replace(/,( *)/g, ",.");
    }
    this.act_with = function(books_for_individual) {
        var thisobject = this
        books_for_individual.foreach(function(book) {
          DOUBAN.getBookTags({
            id : book.id,
            callback:function(tagsJson) {
              var tagObj = DOUBAN.parseTags(tagsJson);
              var tags = new DOUBAN.BOOKS.DOMAIN.TAGS(tagObj);
              tags.attach_to("#fav-" + book.id);
              thisobject.render_books($("#fav-" + book.id))
            }
          })
        })
    };
}
