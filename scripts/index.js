var navigation = function() {
  $("#recent_tab").click(function(){
    $("#read").hide();
    $("#recent").show();
    $("#nav .nav_tab").removeClass("active");
    $(this).addClass("active");
    return false;
  });

  $("#read_tab").click(function(){
    $("#recent").hide();
    $("#read").show();
    $("#nav .nav_tab").removeClass("active");
    $(this).addClass("active");
    return false;
  });
};

var fetchBooks = function(contacts) {
  new DOUBAN.BOOKS.FETCHER(contacts, [new DOUBAN.BOOKS.FAVBOOKS(), new DOUBAN.BOOKS.RECENTBOOKS()]).fetch_books()
};

var getContacts = function(uid, callback) {
  DOUBAN.apikey = '060ca04f1db455951225e0ed591d00bf';
  DOUBAN.getUserContacts({
    uid :uid,
    callback :function(users){
      callback(DOUBAN.parseUsers(users).entries);
    }
  });
}

$(function() {
  navigation();
  getContacts("ThoughWorks", function(contacts) {
    new DOUBAN.BOOKS.FETCHER(contacts, [new DOUBAN.BOOKS.FAVBOOKS(), new DOUBAN.BOOKS.RECENTBOOKS()]).fetch_books()
  });
});
