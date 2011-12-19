$(function() {
  var twers = [
    { id: "2627015", name: "name" },
    { id: "toafu", name: "Zhang Kaifeng" },
    { id: "dakimo", name: "name" },
    { id: "doovsaid", name: "name" },
    { id: "3561405", name: "Hu Kai" },
    { id: "1740006", name: "Ren Xiaojun" },
    { id: "2499912", name: "Ma Bowen" },
    { id: "gigix", name: "Xiong Jie" },
    { id: "dearwolf", name: "Li Jian" },
    { id: "wj1s", name: "name" },
  ];
  new DOUBAN.BOOKS.FETCHER(twers, [new DOUBAN.BOOKS.FAVBOOKS(), new DOUBAN.BOOKS.RECENTBOOKS()]).fetch_books()
});
