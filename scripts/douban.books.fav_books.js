window["DOUBAN"]["BOOKS"]["FAVBOOKS"] = function() {
	this.act_with = function(all_books, books_for_individual) {
		$("#books_in_total").html(all_books.length);
		var html = "<ul><li>"
		for(var idx = 0; idx < books_for_individual.length; idx++) {
			var aBook = DOUBAN.parseSubject(books_for_individual[idx]['db:subject']);
			var title = books_for_individual[idx]["db:subject"]["title"]["$t"] ? books_for_individual[idx]["db:subject"]["title"]["$t"] : "";
			var douban_link = aBook.link.alternate;
			var image = aBook.link.image;
			var alt_image = title;
			html += "<li><a href='" + aBook.link.alternate + "' target='_blank'>";
			html += "<img src='"+ aBook.link.image + "' alt='" + title +"'>"+ title + "</a></li>";
		}
		$("#content").html(html += "</ul>")
	};
}