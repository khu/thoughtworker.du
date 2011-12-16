window["DOUBAN"]["BOOKS"]["FAVBOOKS"] = function() {
	this.act_with = function(books_for_individual) {
		var html = "<ul>"
		for(var idx = 0; idx < books_for_individual.size(); idx++) {
			html += "<li><a href='" + books_for_individual.get(idx).douban_url + "' target='_blank'>";
			html += "<img src='"+ books_for_individual.get(idx).image_url + "'></a></li>";
		}
		$("#content").html(html += "</ul>")
	};
}