if (!window["DOUBAN"]["BOOKS"]) window["DOUBAN"]["BOOKS"] = {}
window["DOUBAN"]["BOOKS"]["DOMAIN"] = {}

window["DOUBAN"]["BOOKS"]["DOMAIN"]["BOOK"] = function(contact, book) {
  this.douban_id = contact.nid;
  this.name = contact.name;
  this.image_url = book.link.image.replace("spic", "lpic");
  this.book_url  = book.link.alternate;
  this.title = book.title;
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
}
