var office_mapper = {
    "all" : "all",
    "beijing" : "北京",
    "xian" : "陕西西安",
    "chengdu" : "四川成都"
}

var realname_mapper = {
    "郭晓":"郭晓",
    "Nicholas":"任晓军",
    "xiaona":"朱晓娜",
    "droxer":"何飞",
    "dreamhead":"郑晔",
    "米良":"文迪",
    "nana":"贾永娜",
    "亦焕":"金明",
    "aqingsao":"张晓庆",
    "肖鹏":"肖鹏",
    "wj1s":"王健",
    "ivysummer":"马博文",
    "土贼一只":"熊子川",
    "little_zxy":"张晓蕴",
    "凉粉小刀":"李剑",
    "Michael Chen":"陈金洲",
    "vincentx":"徐昊",
    "张凯峰":"张凯峰",
    "江水太妖娆":"孙龙",
    "透明":"熊节",
    "以梦为马":"胡凯"
};
var initial_mapper = {
    "郭晓":"G",
    "任晓军":"",
    "朱晓娜":"Z",
    "何飞":"H",
    "郑晔":"Z",
    "文迪":"W",
    "贾永娜":"J",
    "金明":"J",
    "张晓庆":"Z",
    "肖鹏":"X",
    "王健":"W",
    "马博文":"M",
    "熊子川":"X",
    "张晓蕴":"Z",
    "李剑":"L",
    "陈金洲":"C",
    "徐昊":"X",
    "张凯峰":"Z",
    "孙龙":"S",
    "熊节":"X",
    "胡凯":"H"
};

var getRealname = function (name) {
    for (i in this.realname_mapper) {
        if (i == name) {
            return this.realname_mapper[i];
        }
    }
    return "";
};

var getInitial= function (realname) {
    for (i in this.initial_mapper) {
        if (i == realname) {
            return this.initial_mapper[i];
        }
    }
    return "";
};

var getOffice= function (office) {
    for (i in this.office_mapper) {
        if (i == office) {
            return this.office_mapper[i];
        }
    }
    return "";
};

var contact_json = { "author" : { "link" : [ { "@href" : "http://api.douban.com/people/54297336",
            "@rel" : "self"
          },
          { "@href" : "http://www.douban.com/people/thoughtworks/",
            "@rel" : "alternate"
          },
          { "@href" : "http://img3.douban.com/icon/u54297336-3.jpg",
            "@rel" : "icon"
          }
        ],
      "name" : { "$t" : "ThoughtWorks" },
      "uri" : { "$t" : "http://api.douban.com/people/54297336" }
    },
  "entry" : [ { "content" : { "$t" : "" },
        "db:attribute" : [  ],
        "db:location" : { "$t" : "北京",
            "@id" : "beijing"
          },
        "db:signature" : { "$t" : "" },
        "db:uid" : { "$t" : "57926864" },
        "id" : { "$t" : "http://api.douban.com/people/57926864" },
        "link" : [ { "@href" : "http://api.douban.com/people/57926864",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/57926864/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/user_normal.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "郭晓" },
        "uri" : { "$t" : "http://api.douban.com/people/57926864" }
      },
      { "content" : { "$t" : "\n答案在风中飘扬~\n\n\n\n" },
        "db:attribute" : [  ],
        "db:location" : { "$t" : "北京",
            "@id" : "beijing"
          },
        "db:signature" : { "$t" : "继续战" },
        "db:uid" : { "$t" : "ming33" },
        "id" : { "$t" : "http://api.douban.com/people/1228723" },
        "link" : [ { "@href" : "http://api.douban.com/people/1228723",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/ming33/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u1228723-139.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "跳舞小人" },
        "uri" : { "$t" : "http://api.douban.com/people/1228723" }
      },
      { "content" : { "$t" : "" },
        "db:attribute" : [  ],
        "db:location" : { "$t" : "北京",
            "@id" : "beijing"
          },
        "db:signature" : { "$t" : "" },
        "db:uid" : { "$t" : "3676528" },
        "id" : { "$t" : "http://api.douban.com/people/3676528" },
        "link" : [ { "@href" : "http://api.douban.com/people/3676528",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/3676528/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u3676528-2.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "xiaona" },
        "uri" : { "$t" : "http://api.douban.com/people/3676528" }
      },
      { "content" : { "$t" : "http://bach.blogcn.com\n\n普政\n\n天地悠悠    过客匆匆\n \n唯嫌拣择    但莫憎爱" },
        "db:attribute" : [  ],
        "db:location" : { "$t" : "Melbourne, Australia",
            "@id" : "melbourne"
          },
        "db:signature" : { "$t" : "忘了渡履♫" },
        "db:uid" : { "$t" : "spritesun" },
        "id" : { "$t" : "http://api.douban.com/people/1121626" },
        "link" : [ { "@href" : "http://api.douban.com/people/1121626",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/spritesun/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u1121626-19.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "江水太妖娆" },
        "uri" : { "$t" : "http://api.douban.com/people/1121626" }
      },
      { "content" : { "$t" : "喜欢音乐，喜欢旅行，喜欢写代码\n    " },
        "db:attribute" : [  ],
        "db:location" : { "$t" : "陕西西安",
            "@id" : "xian"
          },
        "db:signature" : { "$t" : "I am a programmer." },
        "db:uid" : { "$t" : "flicker1985" },
        "id" : { "$t" : "http://api.douban.com/people/42874393" },
        "link" : [ { "@href" : "http://api.douban.com/people/42874393",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/flicker1985/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u42874393-6.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "droxer" },
        "uri" : { "$t" : "http://api.douban.com/people/42874393" }
      },
      { "content" : { "$t" : "http://wenjingluo.blogbus.com/" },
        "db:attribute" : [  ],
        "db:location" : { "$t" : "陕西西安",
            "@id" : "xian"
          },
        "db:signature" : { "$t" : "" },
        "db:uid" : { "$t" : "47631681" },
        "id" : { "$t" : "http://api.douban.com/people/47631681" },
        "link" : [ { "@href" : "http://api.douban.com/people/47631681",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/47631681/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u47631681-2.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "文静" },
        "uri" : { "$t" : "http://api.douban.com/people/47631681" }
      },
      { "content" : { "$t" : "" },
        "db:attribute" : [  ],
        "db:location" : { "$t" : "陕西西安",
            "@id" : "xian"
          },
        "db:signature" : { "$t" : "" },
        "db:uid" : { "$t" : "2704584" },
        "id" : { "$t" : "http://api.douban.com/people/2704584" },
        "link" : [ { "@href" : "http://api.douban.com/people/2704584",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/2704584/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u2704584-4.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "michelle" },
        "uri" : { "$t" : "http://api.douban.com/people/2704584" }
      },
      { "content" : { "$t" : "blog地址：dreamhead.blogbus.com\n" },
        "db:attribute" : [  ],
        "db:location" : { "$t" : "四川成都",
            "@id" : "chengdu"
          },
        "db:signature" : { "$t" : "原来一切就是这么简单！" },
        "db:uid" : { "$t" : "dreamhead" },
        "id" : { "$t" : "http://api.douban.com/people/1042340" },
        "link" : [ { "@href" : "http://api.douban.com/people/1042340",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/dreamhead/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/user_normal.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "dreamhead" },
        "uri" : { "$t" : "http://api.douban.com/people/1042340" }
      },
      { "content" : { "$t" : "blog地址：harryyhzhang.blogspot.com\nThoughtworks DBA\r\n\r\nAgile DB development practice.\r\nfocusing on the lean DB development, strong interests on DB design ,tunning and new methodology on efficient system design.\r\n\r\n" },
        "db:attribute" : [  ],
        "db:signature" : { "$t" : "" },
        "db:uid" : { "$t" : "3974536" },
        "id" : { "$t" : "http://api.douban.com/people/3974536" },
        "link" : [ { "@href" : "http://api.douban.com/people/3974536",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/3974536/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u3974536-2.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "Yuheng" },
        "uri" : { "$t" : "http://api.douban.com/people/3974536" }
      },
      { "content" : { "$t" : "\n    \n    " },
        "db:attribute" : [  ],
        "db:location" : { "$t" : "北京",
            "@id" : "beijing"
          },
        "db:signature" : { "$t" : "" },
        "db:uid" : { "$t" : "2627015" },
        "id" : { "$t" : "http://api.douban.com/people/2627015" },
        "link" : [ { "@href" : "http://api.douban.com/people/2627015",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/2627015/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u2627015-2.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "米良" },
        "uri" : { "$t" : "http://api.douban.com/people/2627015" }
      },
      { "content" : { "$t" : "blog地址：blog.csdn.net/zhmnsw\n早起的鸟儿有虫吃\r\n早起的虫儿被鸟吃" },
        "db:attribute" : [  ],
        "db:location" : { "$t" : "北京",
            "@id" : "beijing"
          },
        "db:signature" : { "$t" : "" },
        "db:uid" : { "$t" : "zhmocean" },
        "id" : { "$t" : "http://api.douban.com/people/2443614" },
        "link" : [ { "@href" : "http://api.douban.com/people/2443614",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/zhmocean/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u2443614-1.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "糖醋鼻子" },
        "uri" : { "$t" : "http://api.douban.com/people/2443614" }
      },
      { "content" : { "$t" : "吾生也有涯，而知也无涯，以有涯随无涯，殆已。\r\n\r\n我的生命是有限的，但我面对的知识是无限的，要我以本来有限的生命，去追求那种永远看不到边的尽头，你当我是SB吗？这样会搞死自己的捏~~\r\n         ----庄子" },
        "db:attribute" : [  ],
        "db:location" : { "$t" : "北京",
            "@id" : "beijing"
          },
        "db:signature" : { "$t" : "" },
        "db:uid" : { "$t" : "j.tong" },
        "id" : { "$t" : "http://api.douban.com/people/1377375" },
        "link" : [ { "@href" : "http://api.douban.com/people/1377375",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/j.tong/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u1377375-7.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "咖啡屋的鼠标" },
        "uri" : { "$t" : "http://api.douban.com/people/1377375" }
      },
      { "content" : { "$t" : "一条书虫" },
        "db:attribute" : [  ],
        "db:location" : { "$t" : "四川成都",
            "@id" : "chengdu"
          },
        "db:signature" : { "$t" : "" },
        "db:uid" : { "$t" : "doovsaid" },
        "id" : { "$t" : "http://api.douban.com/people/54551211" },
        "link" : [ { "@href" : "http://api.douban.com/people/54551211",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/doovsaid/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u54551211-2.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "蠹鱼曰" },
        "uri" : { "$t" : "http://api.douban.com/people/54551211" }
      },
      { "content" : { "$t" : "blog地址：skyairmj.spaces.live.com\n追求内心和外界的一致" },
        "db:attribute" : [  ],
        "db:location" : { "$t" : "上海",
            "@id" : "shanghai"
          },
        "db:signature" : { "$t" : "坚强" },
        "db:uid" : { "$t" : "skyairmj" },
        "id" : { "$t" : "http://api.douban.com/people/1000533" },
        "link" : [ { "@href" : "http://api.douban.com/people/1000533",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/skyairmj/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u1000533-6.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "亦焕" },
        "uri" : { "$t" : "http://api.douban.com/people/1000533" }
      },
      { "content" : { "$t" : "" },
        "db:attribute" : [  ],
        "db:location" : { "$t" : "北京",
            "@id" : "beijing"
          },
        "db:signature" : { "$t" : "" },
        "db:uid" : { "$t" : "49833151" },
        "id" : { "$t" : "http://api.douban.com/people/49833151" },
        "link" : [ { "@href" : "http://api.douban.com/people/49833151",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/49833151/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u49833151-3.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "nana" },
        "uri" : { "$t" : "http://api.douban.com/people/49833151" }
      },
      { "content" : { "$t" : "blog地址：xiaoqing.me\n张晓庆(Zaqingsao)，ThoughtWorker, 敏捷粉，技术控, http://how2read.me的作者。博客http://xiaoqing.me" },
        "db:attribute" : [  ],
        "db:location" : { "$t" : "北京",
            "@id" : "beijing"
          },
        "db:signature" : { "$t" : "" },
        "db:uid" : { "$t" : "aqingsao" },
        "id" : { "$t" : "http://api.douban.com/people/3420987" },
        "link" : [ { "@href" : "http://api.douban.com/people/3420987",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/aqingsao/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u3420987-6.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "aqingsao" },
        "uri" : { "$t" : "http://api.douban.com/people/3420987" }
      },
      { "content" : { "$t" : "blog地址：designpatterns.cnblogs.com\n肖鹏，ThoughtWorks资深咨询师，目前关注于架构模式、敏捷软件开发等领域，并致力于软件开发最佳实践的推广和应用。\r\n多次为国内大型企业敏捷组织转型提供咨询和培训服务，在大型团队持续集成方面具有丰富的经验。" },
        "db:attribute" : [  ],
        "db:location" : { "$t" : "北京",
            "@id" : "beijing"
          },
        "db:signature" : { "$t" : "肖鹏你好" },
        "db:uid" : { "$t" : "MrCoder" },
        "id" : { "$t" : "http://api.douban.com/people/1198495" },
        "link" : [ { "@href" : "http://api.douban.com/people/1198495",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/MrCoder/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u1198495-1.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "肖鹏" },
        "uri" : { "$t" : "http://api.douban.com/people/1198495" }
      },
      { "content" : { "$t" : "Hi, 我是任晓君，这是我的博客nicholasren.github.com" },
        "db:attribute" : [  ],
        "db:location" : { "$t" : "陕西西安",
            "@id" : "xian"
          },
        "db:signature" : { "$t" : "" },
        "db:uid" : { "$t" : "nicholasren" },
        "id" : { "$t" : "http://api.douban.com/people/1740006" },
        "link" : [ { "@href" : "http://api.douban.com/people/1740006",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/nicholasren/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u1740006-4.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "Nicholas" },
        "uri" : { "$t" : "http://api.douban.com/people/1740006" }
      },
      { "content" : { "$t" : "Just another lame programmer." },
        "db:attribute" : [  ],
        "db:signature" : { "$t" : "读万卷书，骑万里路" },
        "db:uid" : { "$t" : "2499912" },
        "id" : { "$t" : "http://api.douban.com/people/2499912" },
        "link" : [ { "@href" : "http://api.douban.com/people/2499912",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/2499912/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u2499912-2.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "ivysummer" },
        "uri" : { "$t" : "http://api.douban.com/people/2499912" }
      },
      { "content" : { "$t" : "程序员，新浪“@王健_T”" },
        "db:attribute" : [  ],
        "db:signature" : { "$t" : "" },
        "db:uid" : { "$t" : "wj1s" },
        "id" : { "$t" : "http://api.douban.com/people/40809759" },
        "link" : [ { "@href" : "http://api.douban.com/people/40809759",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/wj1s/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u40809759-2.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "wj1s" },
        "uri" : { "$t" : "http://api.douban.com/people/40809759" }
      },
      { "content" : { "$t" : "blog地址:yizhituzei.blogbus.com\n    哈罗\r\n    " },
        "db:attribute" : [  ],
        "db:location" : { "$t" : "广东广州",
            "@id" : "guangzhou"
          },
        "db:signature" : { "$t" : "" },
        "db:uid" : { "$t" : "41904640" },
        "id" : { "$t" : "http://api.douban.com/people/41904640" },
        "link" : [ { "@href" : "http://api.douban.com/people/41904640",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/41904640/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u41904640-2.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "土贼一只" },
        "uri" : { "$t" : "http://api.douban.com/people/41904640" }
      },
      { "content" : { "$t" : "www.Gigix.me" },
        "db:attribute" : [  ],
        "db:location" : { "$t" : "四川成都",
            "@id" : "chengdu"
          },
        "db:signature" : { "$t" : "达摩流浪者" },
        "db:uid" : { "$t" : "gigix" },
        "id" : { "$t" : "http://api.douban.com/people/2298277" },
        "link" : [ { "@href" : "http://api.douban.com/people/2298277",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/gigix/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u2298277-53.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "透明" },
        "uri" : { "$t" : "http://api.douban.com/people/2298277" }
      },
      { "content" : { "$t" : "喜欢美好的东西\n近期爱好:Reading" },
        "db:attribute" : [  ],
        "db:location" : { "$t" : "北京",
            "@id" : "beijing"
          },
        "db:signature" : { "$t" : "" },
        "db:uid" : { "$t" : "littleapril" },
        "id" : { "$t" : "http://api.douban.com/people/1264211" },
        "link" : [ { "@href" : "http://api.douban.com/people/1264211",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/littleapril/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u1264211-3.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "little_zxy" },
        "uri" : { "$t" : "http://api.douban.com/people/1264211" }
      },
      { "content" : { "$t" : "blog地址：www.iamxiaodao.com\n渺小的我，只要歌唱，就能看到光芒\n风雨中玫瑰只要扎根在土壤，就能够绽放\n我受过的伤，一路上陪我成长\n谢谢你一直陪在我的身旁\n决定了飞翔，就不再收回翅膀\n我相信最后总会看到梦想" },
        "db:attribute" : [  ],
        "db:signature" : { "$t" : "" },
        "db:uid" : { "$t" : "dearwolf" },
        "id" : { "$t" : "http://api.douban.com/people/1259630" },
        "link" : [ { "@href" : "http://api.douban.com/people/1259630",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/dearwolf/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u1259630-4.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "凉粉小刀" },
        "uri" : { "$t" : "http://api.douban.com/people/1259630" }
      },
      { "content" : { "$t" : "blog地址：michael.nona.name\n" },
        "db:attribute" : [  ],
        "db:location" : { "$t" : "陕西西安",
            "@id" : "xian"
          },
        "db:signature" : { "$t" : "" },
        "db:uid" : { "$t" : "mechiland" },
        "id" : { "$t" : "http://api.douban.com/people/1032321" },
        "link" : [ { "@href" : "http://api.douban.com/people/1032321",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/mechiland/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u1032321-1.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "Michael Chen" },
        "uri" : { "$t" : "http://api.douban.com/people/1032321" }
      },
      { "content" : { "$t" : "" },
        "db:attribute" : [  ],
        "db:signature" : { "$t" : "" },
        "db:uid" : { "$t" : "vincent_hao_xu" },
        "id" : { "$t" : "http://api.douban.com/people/3911047" },
        "link" : [ { "@href" : "http://api.douban.com/people/3911047",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/vincent_hao_xu/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/user_normal.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "vincentx" },
        "uri" : { "$t" : "http://api.douban.com/people/3911047" }
      },
      { "content" : { "$t" : "莫非这就是传说中的自我介绍！！！" },
        "db:attribute" : [  ],
        "db:signature" : { "$t" : "" },
        "db:uid" : { "$t" : "dakimo" },
        "id" : { "$t" : "http://api.douban.com/people/1496700" },
        "link" : [ { "@href" : "http://api.douban.com/people/1496700",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/dakimo/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u1496700-5.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "2人愉悦的忧伤" },
        "uri" : { "$t" : "http://api.douban.com/people/1496700" }
      },
      { "content" : { "$t" : "blog地址：www.zhangkf.com\n程序员，InfoQ中文站编辑" },
        "db:attribute" : [  ],
        "db:location" : { "$t" : "北京",
            "@id" : "beijing"
          },
        "db:signature" : { "$t" : "" },
        "db:uid" : { "$t" : "toafu" },
        "id" : { "$t" : "http://api.douban.com/people/1061670" },
        "link" : [ { "@href" : "http://api.douban.com/people/1061670",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/toafu/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u1061670-19.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "张凯峰" },
        "uri" : { "$t" : "http://api.douban.com/people/1061670" }
      },
      { "content" : { "$t" : "blog地址：http://iamhukai.com\nthoughtworker读: http://twerdu.de\n\n 从一个城市到另一个城市，一个国家到另一个国家，我的生活就是在云端。 \n\n" },
        "db:attribute" : [  ],
        "db:location" : { "$t" : "陕西西安",
            "@id" : "xian"
          },
        "db:signature" : { "$t" : "我不确定是否爱这个城市" },
        "db:uid" : { "$t" : "iamhukai" },
        "id" : { "$t" : "http://api.douban.com/people/3561405" },
        "link" : [ { "@href" : "http://api.douban.com/people/3561405",
              "@rel" : "self"
            },
            { "@href" : "http://www.douban.com/people/iamhukai/",
              "@rel" : "alternate"
            },
            { "@href" : "http://img3.douban.com/icon/u3561405-6.jpg",
              "@rel" : "icon"
            }
          ],
        "title" : { "$t" : "以梦为马" },
        "uri" : { "$t" : "http://api.douban.com/people/3561405" }
      }
    ],
  "openSearch:itemsPerPage" : { "$t" : "50" },
  "openSearch:startIndex" : { "$t" : "1" },
  "openSearch:totalResults" : { "$t" : "29" },
  "title" : { "$t" : "ThoughtWorks 关注的人" }
}
