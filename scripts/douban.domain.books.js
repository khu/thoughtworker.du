if (!window["DOUBAN"]["BOOKS"]) window["DOUBAN"]["BOOKS"] = {}
window["DOUBAN"]["BOOKS"]["DOMAIN"] = {}


window["DOUBAN"]["BOOKS"]["DOMAIN"]["BOOK"] = function(contact, image_url, book_url) {
	this.image_url = image_url;
	this.book_url  = book_url;
	this.douban_id = contact.nid;
	this.name = contact.name;
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

