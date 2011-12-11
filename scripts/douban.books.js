if (!window["DOUBAN"]["BOOKS"]) window["DOUBAN"]["BOOKS"] = function(ids, douban_books_callback) {
	this.ids = ids;
	this.book_collections = [];
	this.fetch_books = function() {
		for (var i = 0; i < ids.length;i++) {
			var books_for_individual = []
			this.fetch_books_for(ids[i], 1, books_for_individual);
		}
	};
	this.fetch_books_for = function(id, start_index, books_for_individual) {
		DOUBAN.apikey = '060ca04f1db455951225e0ed591d00bf';
		var doubanbooks = this;
		DOUBAN.getUserCollection({
			uid:id,
			cat:'book',
			status:'read',
			maxresults:'50',
			startindex:start_index,
			callback:function(books){
				if (books.entry.length == 0) {
					douban_books_callback.act_with(doubanbooks.book_collections, books_for_individual);
					return;
				}
				for(var idx = 0; idx < books.entry.length; idx++) {
					books_for_individual.push(books.entry[idx])
					doubanbooks.book_collections.push(books.entry[idx])
				}
				doubanbooks.fetch_books_for(id, start_index + 50, books_for_individual)
			}
		});		
	}
}