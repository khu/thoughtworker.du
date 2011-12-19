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

var fetchBooks = function() {
  var twers = [
    { id: "2627015", name: "name" },
    { id: "toafu", name: "张凯峰" },
    { id: "dakimo", name: "Wang Weiyang" },
    { id: "doovsaid", name: "张毅" },
    { id: "3561405", name: "胡凯" },
    { id: "1740006", name: "任晓君" },
    { id: "2499912", name: "马博文" },
    { id: "gigix", name: "熊节" },
    { id: "dearwolf", name: "李剑" },
    { id: "wj1s", name: "王健" },
  ];
  new DOUBAN.BOOKS.FETCHER(twers, [new DOUBAN.BOOKS.FAVBOOKS(), new DOUBAN.BOOKS.RECENTBOOKS()]).fetch_books()
};

$(function() {
  navigation();
  fetchBooks();
});
