var rule = {
    title:'荐片',
    host:'https://api.jpys.me',
    homeUrl:'/api/tag/hand?code=unknown601193cf375db73d',
    url:'/api/crumb/list?type=0&category_id=fyclass&page=fypage&limit=24',
    class_name:'电影&电视剧&动漫&综艺',
    class_url:'1&2&3&4',
    detailUrl:'/api/node/detail?id=fyid',
    searchUrl:'/api/video/search?key=**&page=fypage',
    searchable:1,
    quickSearch:1,
    filterable:0,
    headers:{
        'User-Agent': 'Dart/3.0 (dart:io)',
        'Authorization': 'APIKEY-jpys-1.0',
        'APIKEY': 'jpys',
        'Version': '1.0',
        'Connection': 'Keep-Alive',
        'Accept-Encoding': 'gzip'
    },
    timeout:5000,
    limit:8,
    play_parse:true,
    play_json:[{
        re:'*',
        json:{
            parse:0,
            jx:0
        }
    }],
    lazy:'',
    图片来源:'@Referer=https://www.jpys.me/',
    推荐:'json:data;title;cover;area;id',
    一级:'json:data;title;cover;area;id',
    二级:{
        title:'data.title',
        desc:'data.area;data.year;data.type;data.total',
        img:'data.cover',
        content:'data.desc',
        is_json:1,
        tabs:'js:TABS=[];if(html.data.m3u8_list&&html.data.m3u8_list.length>0){TABS.push("在线")}',
        lists:'js:log(TABS);LISTS=[];TABS.forEach(function(tab){if(/在线/.test(tab)){let m3u=html.data.m3u8_list;let d=m3u.map(function(it){return it.name+"$"+it.url});LISTS.push(d)}});',
    },
    搜索:'json:data;title;cover;area;id'
} 
