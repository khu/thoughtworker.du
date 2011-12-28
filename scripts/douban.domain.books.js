if (!window["DOUBAN"]["BOOKS"]) window["DOUBAN"]["BOOKS"] = {}
window["DOUBAN"]["BOOKS"]["DOMAIN"] = {}

window["DOUBAN"]["BOOKS"]["DOMAIN"]["BOOK"] = function(contact, book) {
  this.id = book.nid
  this.image_url = book.link.image.replace("spic", "lpic");
  this.book_url  = book.link.alternate;
  this.cover_image_url = book.link.image;
  this.title = book.title;

  this.contact = {};
  this.contact.id = contact.nid;
  this.contact.name = contact.name;
  this.contact.page_url = contact.link.alternate;
  this.contact.book_page_url = "http://book.douban.com/perple/" + contact.nid;
  this.contact.image_icon = contact.link.icon;
}

window["DOUBAN"]["BOOKS"]["DOMAIN"]["BOOKS"] = function(books) {
  if(!books) {
    this.books = []
  } else {
    this.books = books
  };

  this.add = function(book) {
    this.books.push(book)
  }

  this.size = function() {
    return this.books.length
  }

  this.get = function(index) {
    return this.books[index]
  }
  this.slice = function(size) {
    return this.books.slice(0, size);
  }
  this.foreach = function(callback) {
      for(var i = 0; i < this.books.length;i++) {
          callback(this.books[i])
      }
  }
}


window["DOUBAN"]["BOOKS"]["DOMAIN"]["TAG"] = function(link, text, vote) {
    this.link = link;
    this.text = function(){
        return text.replace(/[;@&.'/~!#]/g, '-').replace(/[()+$ ]/g, '')        
    }()
    this.vote = vote;
    
    this.increaseVote = function() {
        this.vote++
    }
    
    this.renderTo = function(element, all_tags) {
        var thistag = this;
        var tagSize = function(accurate_size) {
            if (accurate_size <= 10) {
                return 10;
            }
            if (accurate_size <= 20) {
                return 20
            }
            if (accurate_size <= 30) {
                return 30
            }
            if (accurate_size <= 50) {
                return 50
            }
            if (accurate_size <= 80) {
                return 80
            }
            if (accurate_size <= 130) {
                return 130
            } else {return 210}
        }
        all_tags.find(thistag.text, function(tag){
            var tagNode = $("." + thistag.text);
            tagNode.remove();
            vote = tag.vote + 1;
            $("#"+ tagSize(vote) + "-section").append("<li class='" + thistag.text + "'>" + thistag.text +"(" + vote + ")</li>")
        }, function(tag) {
            $("#10-section").append("<li class='" + thistag.text + "," +  tagSize(thistag.vote) +"'>" + thistag.text +"(" + thistag.vote + ")</li>")            
        })
    }
}

window["DOUBAN"]["BOOKS"]["DOMAIN"]["TAGS"] = function(tags) {
    this.tags = {}

    this.add = function(tag) {
        if (this.tags[tag.text]) {
            this.tags[tag.text].increaseVote();
        } else {
            this.tags[tag.text] = tag;
        }
    }
    
    this.find = function(text, action, exception_action) {
        if (this.tags[text]) {
            action(this.tags[text])
        } else {
            exception_action(this.tags[text])
        }
    }
    
    this.is_empty = function() {
        for(var property in this.tags) {
            return false;
        }
        return true;
    }
    
    if (tags) {
        for (var i  = 0; i < tags.entries.length;i++) {
            var entry = tags.entries[i]
            this.add(new DOUBAN.BOOKS.DOMAIN.TAG(entry.id, entry.title, 1))
        }
    };
    
    this.foreach = function(callback) {
        for(var tag in this.tags) {
            callback(this.tags[tag])
        }
    }
    
    this.merge = function(tagsObj) {
        var doubanTag = this;
        var isEmpty = this.is_empty();
        if (isEmpty) {
            doubanTag.tags = tagsObj.tags
            return doubanTag;
        } else {
            tagsObj.foreach(function(tag){
                doubanTag.add(tag)
            })
            return doubanTag            
        }
    }
    
    this.renderTo = function(id, all_tags) {
        this.foreach(function(tag) {
            tag.renderTo($(id), all_tags)
        })
    }
}
