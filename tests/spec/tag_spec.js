function check(id) {
    $("#" + id).attr("checked", "checked")
}

function uncheck(id) {
    $("#"+id).removeAttr("checked")
}
var tagsObj = new DOUBAN.BOOKS.TAGS()

describe('be able to convert the multiple checkbox to sinle css class.', function () {
    beforeEach(function () {
        $("html").append("<div id='test-dom'></div>");
        var dom = '<input checked id="tech" type="checkbox" class="computer,agile">'
                + '</input><input checked id="mgt" type="checkbox" class="projectmanagement, management, personalmanagement"></input>';
		$('#test-dom').append(dom);
    });
    afterEach(function () {
		$('#test-dom').remove()
    });
    it('should load the particular tag', function () {
        var tags = tagsObj.transform_to_selector(tagsObj.selected_filter(["#tech"]))
        expect(tags).toEqual(".computer,.agile");
    });
    
    it('should load multiple tags', function () {
        var tags = tagsObj.transform_to_selector(tagsObj.selected_filter(["#tech", "#mgt"]))
        expect(tags).toEqual(".computer,.agile,.projectmanagement,.management,.personalmanagement");
    });
    
    it('should load multiple tags excepted the unchecked box', function () {
        var tags = tagsObj.transform_to_selector(tagsObj.selected_filter(["#tech", "#mgt", "#misc"]))
        expect(tags).toEqual(".computer,.agile,.projectmanagement,.management,.personalmanagement");
    });
    
    it('should load the tag without class defined', function () {
        $("#misc").attr("checked", "checked")
        var tags = tagsObj.transform_to_selector(tagsObj.selected_filter(["#misc"]))
        expect(tags).toEqual("");
    });
});

describe("display the books based on tech or management tag.", function() {
    beforeEach(function () {
        $("html").append("<div id='test-dom'></div>");
        var dom = '<input checked id="tech" type="checkbox" class="computer,agile"></input>'
                + '<input checked id="mgt" type="checkbox" class="projectmanagement, management, personalmanagement"></input>'
                + '<input id="misc" type="checkbox" class=""></input>'
                + '<p id="fav-10102" class="masonry-brick"></p>'
                + '<p id="fav-10103" class="masonry-brick"></p>';
		$('#test-dom').append(dom);
    });
    afterEach(function () {
		$('#test-dom').remove()
    });
    
    it("should append the invisible book when all matched tag is unchecked.", function(){
          $("#fav-10102").attr("class", "computer")
          uncheck("tech")
          uncheck("misc")
          check("mgt")
          tagsObj.render_books(["#fav-10102"]);
          expect($("#fav-10102").css("visibility")).toEqual("hidden");
      })
      
      it("should append the visible book when all matched tag is checked.", function(){
          $("#fav-10102").attr("class", "computer")
          check("tech")
          tagsObj.render_books(["#fav-10102"]);
          expect($("#fav-10102").css("visibility")).toEqual("visible");
      })
    
    it("should append the visible book when any matched tag is checked.", function(){
        $("#fav-10102").attr("class", "computer agile-programming projectmanagement")
        uncheck("tech")
        check("mgt")
        tagsObj.render_books(["#fav-10102"]);
        expect($("#fav-10102").css("visibility")).toEqual("visible");
    })
    it("should handle the mutiple element.", function(){
        $("#fav-10102").attr("class", "computer agile-programming projectmanagement")
        $("#fav-10103").attr("class", "computer")
        check("tech")
        uncheck("mgt")
        tagsObj.render_books($(".masonry-brick"));
        expect($("#fav-10102").css("visibility")).toEqual("visible");
        expect($("#fav-10103").css("visibility")).toEqual("visible");
    })
})

describe("display the books based on misc tag.", function() {
    beforeEach(function () {
        $("html").append("<div id='test-dom'></div>");
        var dom = '<input checked id="tech" type="checkbox" class="computer,agile"></input>'
                + '<input checked id="mgt" type="checkbox" class="projectmanagement, management, personalmanagement"></input>'
                + '<input id="misc" type="checkbox" class=""></input>'
                + '<p id="fav-10102" class="masonry-brick"></p>'
                + '<p id="fav-10103" class="masonry-brick"></p>'
                + '<p id="fav-10104" class="masonry-brick"></p>';
		$('#test-dom').append(dom);
    });
    afterEach(function () {
		$('#test-dom').remove()
    });

    it("should be invisible when all three tags are unchecked.", function(){
             $("#fav-10102").attr("class", "agile")
             uncheck("misc")
             uncheck("tech")
             uncheck("mgt")
             tagsObj.render_books(["#fav-10102"]);
             expect($("#fav-10102").css("visibility")).toEqual("hidden");
       })
       
       it("should append the invisible when the book is neither tech or mgt.", function(){
             $("#fav-10102").attr("class", "game")
             tagsObj.render_books(["#fav-10102"]);
             expect($("#fav-10102").css("visibility")).toEqual("hidden");
       })
       
       it("should append the visible when the book is neither tech or mgt but misc is checked.", function(){
             $("#fav-10102").attr("class", "game")
             check("misc")
             tagsObj.render_books(["#fav-10102"]);
             expect($("#fav-10103").css("visibility")).toEqual("visible");
       })
       
       it("should append visible when any tag fit into misc", function(){
           $("#fav-10102").attr("class", "agile game")
           check("misc")
           uncheck("tech")
           tagsObj.render_books(["#fav-10102"]);
           expect($("#fav-10103").css("visibility")).toEqual("visible");
       })
       
       it("should be visible if there is no tag except misc", function(){
             $("#fav-10102").attr("class", "")
             check("misc")
             tagsObj.render_books(["#fav-10102"]);
             expect($("#fav-10103").css("visibility")).toEqual("visible");
       })
    
    it("should hide mgt and tech books when only misc check", function(){
          $("#fav-10102").attr("class", "agile")
          $("#fav-10103").attr("class", "management")
          $("#fav-10104").attr("class", "game")
          check("misc")
          uncheck("tech")
          uncheck("mgt")
          tagsObj.render_books(["#fav-10102", "#fav-10103", "#fav-10104"]);
          expect($("#fav-10102").css("visibility")).toEqual("hidden");
          expect($("#fav-10103").css("visibility")).toEqual("hidden");
          expect($("#fav-10104").css("visibility")).toEqual("visible");
    })  
})

describe("functional tests.", function() {
    beforeEach(function () {
        $("html").append("<div id='test-dom'></div>");
        var dom = '<input checked id="tech" type="checkbox" class="计算机,软件开发,软件工程,编程,敏捷开发,IT,Programming,design,精益,敏捷,互联网,软件,计算机科学,设计模式,agile"></input>'
                + '<input checked id="mgt" type="checkbox" class="管理,项目管理,管理学,个人管理"></input>'
                + '<input id="misc" type="checkbox" class=""></input>'
                + '<p id="fav-10102" class="masonry-brick"></p>'
		$('#test-dom').append(dom);
    });
    afterEach(function () {
		$('#test-dom').remove()
    });
    it("should not show this management book from druker", function() {
        $("#fav-10102").attr("class", "管理 德鲁克 卓有成效的管理者 管理学 彼得·德鲁克 管理经典 经典 商业 management 管理者 masonry-brick")
        check("misc")
        uncheck("tech")
        uncheck("mgt")
        tagsObj.render_books(["#fav-10102"]);
        expect($("#fav-10102").css("visibility")).toEqual("hidden");       
    })
    
    it("should show this management book from druker", function() {
        $("#fav-10102").attr("class", "管理 德鲁克 卓有成效的管理者 管理学 彼得·德鲁克 管理经典 经典 商业 management 管理者 masonry-brick")
        uncheck("misc")
        uncheck("tech")
        check("mgt")
        tagsObj.render_books(["#fav-10102"]);
        expect($("#fav-10102").css("visibility")).toEqual("visible");       
    })
})


