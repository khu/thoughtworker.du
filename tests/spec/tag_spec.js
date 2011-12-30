function check(id) {
    $("#" + id).attr("checked", "checked")
}

function uncheck(id) {
    $("#"+id).removeAttr("checked")
}

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
        var tags = selectedTag(["#tech"])
        expect(tags).toEqual(".computer,.agile");
    });
    
    it('should load multiple tags', function () {
        var tags = selectedTag(["#tech", " #mgt"])
        expect(tags).toEqual(".computer,.agile,.projectmanagement,.management,.personalmanagement");
    });
    
    it('should load multiple tags excepted the unchecked box', function () {
        var tags = selectedTag(["#tech", " #mgt", "#misc"])
        expect(tags).toEqual(".computer,.agile,.projectmanagement,.management,.personalmanagement");
    });
    
    it('should load the tag without class defined', function () {
        $("#misc").attr("checked", "checked")
        var tags = selectedTag(["#misc"])
        expect(tags).toEqual("");
    });
});

describe("display the books based on tech or management tag.", function() {
    beforeEach(function () {
        $("html").append("<div id='test-dom'></div>");
        var dom = '<input checked id="tech" type="checkbox" class="computer,agile"></input>'
                + '<input checked id="mgt" type="checkbox" class="projectmanagement, management, personalmanagement"></input>'
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
          renderBooks(selectedTag(["#tech", "#mgt"]), ["#fav-10102"]);
          expect($("#fav-10102").is(":visible")).toEqual(false);
      })
      
      it("should append the visible book when all matched tag is checked.", function(){
          $("#fav-10102").attr("class", "computer")
          check("tech")
          renderBooks(selectedTag(["#tech", "#mgt"]), ["#fav-10102"]);
          expect($("#fav-10102").is(":visible")).toEqual(true);
      })
    
    it("should append the visible book when any matched tag is checked.", function(){
        $("#fav-10102").attr("class", "computer agile-programming projectmanagement")
        uncheck("tech")
        check("mgt")
        renderBooks(selectedTag(["#tech", "#mgt"]), ["#fav-10102"]);
        expect($("#fav-10102").is(":visible")).toEqual(true);
    })
    it("should handle the mutiple element.", function(){
        $("#fav-10102").attr("class", "computer agile-programming projectmanagement")
        $("#fav-10103").attr("class", "computer")
        check("tech")
        uncheck("mgt")
        renderBooks(selectedTag(["#tech", "#mgt"]), $(".masonry-brick"));
        expect($("#fav-10102").is(":visible")).toEqual(true);
        expect($("#fav-10103").is(":visible")).toEqual(true);
    })
})

describe("display the books based on misc tag.", function() {
    beforeEach(function () {
        $("html").append("<div id='test-dom'></div>");
        var dom = '<input checked id="tech" type="checkbox" class="computer,agile"></input>'
                + '<input checked id="mgt" type="checkbox" class="projectmanagement, management, personalmanagement"></input>'
                + '<input id="misc" type="checkbox" class="projectmanagement, management, personalmanagement"></input>'
                + '<p id="fav-10102" class="masonry-brick"></p>'
                + '<p id="fav-10103" class="masonry-brick"></p>';
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
          renderBooks(selectedTag(["#tech", "#mgt", "#misc"]), ["#fav-10102"]);
          expect($("#fav-10102").is(":visible")).toEqual(false);
    })
    
    it("should append the invisible when the book is neither tech or mgt.", function(){
          $("#fav-10102").attr("class", "game")
          renderBooks(selectedTag(["#tech", "#mgt", "#misc"]), ["#fav-10102"]);
          expect($("#fav-10102").is(":visible")).toEqual(false);
    })
    
    it("should append the visible when the book is neither tech or mgt but misc is checked.", function(){
          $("#fav-10102").attr("class", "game")
          check("misc")
          renderBooks(selectedTag(["#tech", "#mgt", "#misc"]), ["#fav-10102"]);
          expect($("#fav-10102").is(":visible")).toEqual(true);
    })
    
    it("should append visible when any tag fit into misc", function(){
        $("#fav-10102").attr("class", "agile game")
        check("misc")
        uncheck("tech")
        renderBooks(selectedTag(["#tech", "#mgt", "#misc"]), ["#fav-10102"]);
        expect($("#fav-10102").is(":visible")).toEqual(true);
    })
    
    it("should be visible if there is no tag", function(){
          $("#fav-10102").attr("class", "")
          check("misc")
          renderBooks(selectedTag(["#tech", "#mgt", "#misc"]), ["#fav-10102"]);
          expect($("#fav-10102").is(":visible")).toEqual(true);
    })
})