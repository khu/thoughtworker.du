window["DOUBAN"]["BOOKS"]["RECENTBOOKS"] = function() {
	this.act_with = function(books_for_individual) {
		if (books_for_individual.size() > 0) {
			var douban_id = books_for_individual.get(0).douban_id
			var html = "<li id=" + douban_id + "></li>"
			var recent_read = books_for_individual.size() > 5? 5 : books_for_individual.size()

			for (var i = 0; i < recent_read; i++) {
				html += "<li><a href='" + books_for_individual.get(i).book_url + "' target='_blank'>";
				html += "<img src='"+ books_for_individual.get(i).image_url.replace("lpic", "spic") + "'></a></li>";
			}
			html += "</ul>"
			DOUBAN.getUser({
				id:douban_id,
				callback:function(json){
					var user = DOUBAN.parseUser(json);
					var icon_url = user.link.icon;
					var nid = user.nid
					$("#" + nid).html("<image src=" + icon_url + "/>")
				} 
			})
			$("#recent").append(html)
		}
	};	
}