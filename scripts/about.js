var getDevelopers = function(uids, callback) {
  var developers = new DOUBAN.BOOKS.DOMAIN.CONTACTS();
  var currentIndex = 0;
  for (var index in uids) {
    DOUBAN.getUser({
      id: uids[index],
      callback: function(user) {
        var developer = new DOUBAN.BOOKS.DOMAIN.CONTACT(DOUBAN.parseUser(user));
        developers.add(developer);

        if (currentIndex == uids.length - 1) {
          callback(developers);
        }
        currentIndex++;
      }
    });
  }
}

var initializeAbout = function(developerNames, about_el) {
  getDevelopers(developerNames, function(developers) {
    var developer_section = $("#about-template").tmpl(developers.contacts);
    $(about_el).append(developer_section);
  });
}