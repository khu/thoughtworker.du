if (!window["DOUBAN"]["BOOKS"]) window["DOUBAN"]["BOOKS"] = {}
window["DOUBAN"]["BOOKS"]["DOMAIN"] = {}

window["DOUBAN"]["BOOKS"]["DOMAIN"]["BOOK"] = function(contact, book) {
  this.image_url = book.link.image.replace("spic", "lpic");
  this.book_url  = book.link.alternate;
  this.cover_image_url = this.image_url.replace("lpic", "spic");
  this.title = book.title;

  this.contact = {};
  this.contact.id = contact.nid;
  this.contact.name = contact.name;
  this.contact.page_url = contact.link.alternate;
  this.contact.book_page_url = "http://book.douban.com/perple/" + contact.nid;
  this.contact.image_icon = contact.link.icon;
}

window["DOUBAN"]["BOOKS"]["DOMAIN"]["BOOKS"] = function(books) {
  if(!books) {
    this.books = []
  } else {
    this.books = books
  };

  this.add = function(book) {
    this.books.push(book)
  }

  this.size = function() {
    return this.books.length
  }

  this.get = function(index) {
    return this.books[index]
  }
  this.slice = function(size) {
    return this.books.slice(0, size);
  }
}
