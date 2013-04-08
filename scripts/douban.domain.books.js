if (!window["DOUBAN"]["BOOKS"]) window["DOUBAN"]["BOOKS"] = {};
window["DOUBAN"]["BOOKS"]["DOMAIN"] = {};

window["DOUBAN"]["BOOKS"]["DOMAIN"]["CONTACT"] = function(contact) {
    this.id = contact.nid;
    this.name = contact.name;
    var real_name = getRealname(contact.name);
    this.realname = real_name;
    if (real_name == "") {
        this.realname = this.name;
    }
    this.initial = getInitial(this.realname);
    this.description = contact.content;
    this.image_icon = contact.link.icon;
    this.page_url = contact.link.alternate;
    this.person_page_url = "homepage.html?personid=" + this.id + "&contact=" + contact;
    this._loaded_books = 1;
    this._all_books_loaded = false;
    this.load = function(amount) {
        if (amount == 0) {
            this._all_books_loaded = true;
        } else {
            this._all_books_loaded = false;
            this._loaded_books += amount 
        }
    };
    this.loaded_books = function() {
        return this._loaded_books;
    };
    this.are_all_books_loaded = function() {
        return this._all_books_loaded;
    }
};

window["DOUBAN"]["BOOKS"]["DOMAIN"]["CONTACTS"] = function(contacts) {
    this.contacts = [];
    this._current_index = 0;
    
    this.add = function(contact) {
        this.contacts.push(contact)
    };

    if(contacts) {
      for (var i =0; i < contacts.length; i++) {
          this.add(new DOUBAN.BOOKS.DOMAIN.CONTACT(contacts[i]));
      }
    }

    this.size = function() {
        return this.contacts.length
    };

    this.get = function(index) {
        return this.contacts[index]
    };
    
    this.foreach = function(callback) {
         for(var i = 0; i < this.contacts.length;i++) {
             callback(this.contacts[i])
         }
    };
    
    this.current = function() {
        var nullObj = new DOUBAN.BOOKS.DOMAIN.CONTACT({
            nid : 0,
            name : "",
            link : {alternate: "", icon:""}
        });
        nullObj.load(0);
        
        if (this.contacts.length == 0) {
            return nullObj;
        }
        this._current_index = this.contacts[this._current_index].are_all_books_loaded() ? this._current_index + 1 : this._current_index;
        return (this._current_index >= this.contacts.length ?  nullObj : this.contacts[this._current_index]);
    }
};

window["DOUBAN"]["BOOKS"]["DOMAIN"]["BOOK"] = function(contact, book) {
  this.id = book.id;
  this.image_url = book.images.large;
  this.book_url  = book.alt;
  this.cover_image_url = book.images.small;
  this.title = book.title;
  this.contact = contact;
  this.author = book.author[0];
  this.summary = book.summary;
  this.price = book.price;
  this.rating_average = book.rating.average;
  this.num_of_raters = book.rating.numRaters;
  this.my_book_url = "book.html?personid=" + (contact == null ? "":contact.id) + "&bookid=" + this.id;
};

window["DOUBAN"]["BOOKS"]["DOMAIN"]["BOOKS"] = function(books) {
  if(!books) {
    this.books = []
  } else {
    this.books = books
  }

  this.add = function(book) {
    this.books.push(book)
  };

  this.size = function() {
    return this.books.length
  };

  this.get = function(index) {
    return this.books[index]
  };

  this.slice = function(size) {
    return this.books.slice(0, size);
  };

  this.foreach = function(callback) {
      for(var i = 0; i < this.books.length;i++) {
          callback(this.books[i])
      }
  };

  this.unique_books = function() {
    var books = [];
    this.foreach(function(book) {
        if($("#fav-" + book.id).length == 0){
            books.push(book)
        }
    });
    return books;
  }
};


window["DOUBAN"]["BOOKS"]["DOMAIN"]["TAG"] = function(link, text, vote) {
    this.link = link;
    this.text = function(){
        return text.replace(/[;@&.'/~!#]/g, '-').replace(/[()+$ ]/g, '')        
    }();
    this.vote = vote;
    
    this.increaseVote = function() {
        this.vote++
    };
    
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
        };
        all_tags.find(thistag.text, function(tag){
            var tagNode = $("#tags ." + thistag.text);
            tagNode.remove();
            vote = tag.vote + 1;
            $("#"+ tagSize(vote) + "-section").append("<li class='" + thistag.text + "'>" + thistag.text +"(" + vote + ")</li>")
        }, function(tag) {
            $("#10-section").append("<li class='" + thistag.text + "," +  tagSize(thistag.vote) +"'>" + thistag.text +"(" + thistag.vote + ")</li>");
        })
    }
};

window["DOUBAN"]["BOOKS"]["DOMAIN"]["TAGS"] = function(tags) {
    this.tags = {};

    this.add = function(tag) {
        if (this.tags[tag.text]) {
            this.tags[tag.text].increaseVote();
        } else {
            this.tags[tag.text] = tag;
        }
    };
    
    this.find = function(text, action, exception_action) {
        if (this.tags[text]) {
            action(this.tags[text])
        } else {
            exception_action(this.tags[text])
        }
    };
    
    this.is_empty = function() {
        for(var property in this.tags) {
            return false;
        }
        return true;
    };
    
    if (tags) {
        for (var i  = 0; i < tags.entries.length;i++) {
            var entry = tags.entries[i];
            this.add(new DOUBAN.BOOKS.DOMAIN.TAG(entry.id, entry.title, 1))
        }
    }
    
    this.foreach = function(callback) {
        for(var tag in this.tags) {
            callback(this.tags[tag]);
        }
    };
    
    this.merge = function(tagsObj) {
        var doubanTag = this;
        var isEmpty = this.is_empty();
        if (isEmpty) {
            doubanTag.tags = tagsObj.tags;
            return doubanTag;
        } else {
            tagsObj.foreach(function(tag){
                doubanTag.add(tag)
            });
            return doubanTag            
        }
    };
    
    this.renderTo = function(id, all_tags) {
        this.foreach(function(tag) {
            tag.renderTo($(id), all_tags)
        })
    };
    
    this.attach_to = function(id) {
        this.foreach(function(tag){
            console.log("trying to attach the tag [" + tag.text + "] to [" + id + "]")
            $(id).addClass(tag.text)
        })
    }
};

window["DOUBAN"]["BOOKS"]["DOMAIN"]["USER_BASIC"] = function(avatar, name) {
    this.user_avatar = avatar;

    var real_name = getRealname(name);
    if (real_name == "") {
        this.user_name = name;
    }else{
        this.user_name = real_name;
    }
};
