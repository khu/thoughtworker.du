var $fav_books_el;

var navigation = function() {
  $('.nav_tab').on('click', function() {
    var $this = $(this);

    var contentElement = $($this.attr('href'));
    $('.books').addClass('hide');
    contentElement.removeClass('hide');

    $('.nav_tab').removeClass('active');
    $this.addClass('active');

    return false;
  });
};

var getContacts = function(uid, callback) {
  DOUBAN.getUserContacts({
    uid :uid,
    maxresults: 50,
    callback :function(users) {
      callback(DOUBAN.parseUsers(users).entries);
    }
  });
}

var setLayout = function() {
  $fav_books_el.masonry({
    itemSelector: 'p',
    isFitWidth: true,
    columnWidth: 250,
    gutterWidth: 10
  });
}

$(function() {
  $fav_books_el = $('#read_content');

  DOUBAN.apikey = '060ca04f1db455951225e0ed591d00bf';
  navigation();
  var id = window.location.search == "" ? "thoughtworks" : window.location.search.replace("?id=", "");
  var tags = new DOUBAN.BOOKS.TAGS();
  getContacts(id, function(contacts) {
    var contactsObj = new DOUBAN.BOOKS.DOMAIN.CONTACTS(contacts);
    new DOUBAN.BOOKS.CONTINUNOUSFETCHER($fav_books_el, contactsObj, [new DOUBAN.BOOKS.FAVBOOKS($fav_books_el), tags]).fetch_books();
  });

  getContacts(id, function(contacts) {
    var contactsObj = new DOUBAN.BOOKS.DOMAIN.CONTACTS(contacts);
    new DOUBAN.BOOKS.ONETIMEFETCHER(null, contactsObj, [new DOUBAN.BOOKS.RECENTBOOKS('#recent')]).fetch_books();
  });

  initializeAbout(['3561405', 'zation'], '#about');
  
  setLayout();

  $("#tags input").on("click", function(){
      tags.render_books($("#read").find("p"));
  });
});
