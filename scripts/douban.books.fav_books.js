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

window["DOUBAN"]["BOOKS"]["FAVBOOKS"] = function(fav_book_el) {
  this.act_with = function(books_for_individual) {
      var books_dom = $("#fav-books-template").tmpl(books_for_individual.unique_books());
      books_dom.css("visibility", "hidden")
      fav_book_el.append(books_dom);
      books_dom.imagesLoaded(function() {
        fav_book_el.masonry('appended', books_dom);
        books_dom.css("visibility", "visible")
      });
  };
}
