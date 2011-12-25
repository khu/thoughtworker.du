var navigation = function() {
  $("#recent_tab").click(function() {
    $("#read").hide();
    $("#recent").show();
    $("#nav .nav_tab").removeClass("active");
    $(this).addClass("active");
    return false;
  });

  $("#read_tab").click(function() {
    $("#recent").hide();
    $("#read").show();
    $("#nav .nav_tab").removeClass("active");
    $(this).addClass("active");
    return false;
  });
};

var getContacts = function(uid, callback) {
  DOUBAN.getUserContacts({
    uid :uid,
    callback :function(users) {
      callback(DOUBAN.parseUsers(users).entries);
    }
  });
}

var setLayout = function() {
  var container = $('#read');
  container.imagesLoaded(function() {
    container.masonry({
      itemSelector : 'li',
      isFitWidth: true
    });
  });
}

$(function() {
  DOUBAN.apikey = '060ca04f1db455951225e0ed591d00bf';
  navigation();
  var id = window.location.search == "" ? "thoughworks" : window.location.search.replace("?id=", "")
  getContacts(id, function(contacts) {
    new DOUBAN.BOOKS.FETCHER(contacts, [new DOUBAN.BOOKS.FAVBOOKS(), new DOUBAN.BOOKS.RECENTBOOKS()]).fetch_books();
  });
  setTimeout(setLayout, 1000);
});
