var renderBooks = function(selectedTag, books) {
    for(var i = 0; i < books.length;i++) {
        var bookObj = $(books[i])
        if(!bookObj.is(selectedTag)) {
            bookObj.css({visibility: "hidden"})
        } else {
            bookObj.css({visibility: "visible"})
        }
    }    
}

var selectedTag = function(ids) {
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