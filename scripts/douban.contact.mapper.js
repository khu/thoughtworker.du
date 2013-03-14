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

var getRealname = function (name) {
    for (i in this.realname_mapper) {
        if (i == name) {
            return this.realname_mapper[i];
        }
    }
    return "";
};
