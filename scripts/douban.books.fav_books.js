function setImageSize(imgobj, iPreImg_w, iPreImg_h) {
    if (typeof(imgobj) != "object")imgobj = $(imgobj);
    var image = new Image();
    var iwidth = iPreImg_w
    var iheight = iPreImg_h
    image.src = imgobj.src;
    if (image.width > iwidth || image.height > iheight) {
        if (image.width > 0 && image.height > 0) {
            if (image.width / image.height >= iwidth / iheight) {
                if (image.width > iwidth) {
                    imgobj.width = iwidth;
                    imgobj.height = (image.height * iwidth) / image.width;
                } else {
                    imgobj.width = image.width;
                    imgogj.height = image.height;
                }
            }
            else {
                if (image.height > iheight) {
                    imgobj.height = iheight;
                    imgobj.width = (image.width * iheight) / image.height;
                } else {
                    imgobj.width = image.width;
                    imgobj.height = image.height;
                }
            }
        }
    }
    else {
        imgobj.width = image.width;
        imgobj.height = image.height;
    }
}

window["DOUBAN"]["BOOKS"]["FAVBOOKS"] = function() {
    this.act_with = function(books_for_individual) {
        var html = "<ul>"
        var content = $("<ul/>");
        for (var idx = 0; idx < books_for_individual.size(); idx++) {
            var bookImage = $("<img/>");
            bookImage.attr("src", books_for_individual.get(idx).image_url);
            bookImage.attr('onload', 'setImageSize(this,280,380)');
            var bookLink = $("<a/>");
            bookLink.attr("href", books_for_individual.get(idx).book_url);
            bookLink.attr("target", "_blank");
            bookLink.append(bookImage);

            var bookItem = $("<li/>");
            bookItem.append(bookLink);

            content.append(bookItem);
        }
        $("#content").append(content)
    };
}