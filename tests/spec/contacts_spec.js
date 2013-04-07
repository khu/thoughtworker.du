function build_contact(nid, name) {
    var contact = {};
    contact.id = nid;
    contact.name = name;
    contact.page_url = "http://page_url";
    contact.person_page_url = "http://book.douban.com/people/" + nid;
    contact.image_icon = "icon";
    contact.link = {}
    contact.link.alternate = "alternative"
    return contact    
}

describe('be able to convert the multiple checkbox to sinle css class.', function () {
    it('should init the contacts with empty array', function () {
        var contacts = new DOUBAN.BOOKS.DOMAIN.CONTACTS()
        expect(contacts.size()).toEqual(0);
    });
    
    it('should init the contacts with mutitple contacts', function () {
        var contacts_array = [build_contact("10102", "iamhukai"), build_contact("10103", "gigix")]
        var contacts = new DOUBAN.BOOKS.DOMAIN.CONTACTS(contacts_array)
        expect(contacts.size()).toEqual(2);
    });
    
    it('should identify the first contact as current.', function () {
        var contacts_array = [build_contact("10102", "iamhukai"), build_contact("10103", "gigix")]
        var contacts = new DOUBAN.BOOKS.DOMAIN.CONTACTS(contacts_array)
        expect(contacts.current().name).toEqual("iamhukai");
    });
    
    it('should identify the next element is current when the books of the given contact is fully loaded', function () {
        var contacts_array = [build_contact("10102", "iamhukai"), build_contact("10103", "gigix")]
        var contacts = new DOUBAN.BOOKS.DOMAIN.CONTACTS(contacts_array)
        contacts.get(0).load(0)
        expect(contacts.current().name).toEqual("gigix");
    });
    it('should keep return null elment when contacts is empty', function () {
        var contacts = new DOUBAN.BOOKS.DOMAIN.CONTACTS()
        expect(contacts.current().name).toEqual("");
    });
    
    it('should keep return null object when last element is loaded', function () {
        var contacts_array = [build_contact("10102", "iamhukai"), build_contact("10103", "gigix")]
        var contacts = new DOUBAN.BOOKS.DOMAIN.CONTACTS(contacts_array)
        contacts.get(0).load(0)
        contacts.get(1).load(0)
        contacts._current_index = 1;
        expect(contacts.current().name).toEqual("");
    });
})