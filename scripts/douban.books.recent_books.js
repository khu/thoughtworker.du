window["DOUBAN"]["BOOKS"]["RECENTBOOKS"] = function() {
	this.act_with = function(books_for_individual) {
		if (books_for_individual.size() > 0) {
      		var twer = books_for_individual.get(0);
			var douban_id = twer.douban_id;
			
			var recent_read = books_for_individual.size() > 5? 5 : books_for_individual.size()
			var books = [];
			
			for (var i = 0; i < recent_read; i++) {
					var obj = {
						book_url: books_for_individual.get(i).book_url,
						book_cover_image : books_for_individual.get(i).image_url.replace("lpic", "spic")
					}
					books.push(obj)
			}
			var people = {homepage_url:"http://google.com", people_icon:"http://google.com"}
			$("<p></p>").append($("#recent-people-template").tmpl(people)).append($("<ul class='recent'></ul>").append($("#recent-books-template").tmpl( books ))).appendTo("#recent")
		}
	};	
}
