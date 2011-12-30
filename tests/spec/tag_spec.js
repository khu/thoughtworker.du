describe('be able to convert the multiple checkbox to sinle css class.', function () {
    beforeEach(function () {
        $("html").append("<div id='test-dom'></div>");
        var dom = '<input checked id="tech" type="checkbox" class="computer,agile"></input><input checked id="mgt" type="checkbox" class="projectmanagement, management, personalmanagement"></input><input id="misc" type="checkbox"></input>';
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