var rule = {
    title:'荐片',
    host:'https://api.jpys.me',
    homeUrl:'/api/tag/hand?code=unknown601193cf375db73d',
    url:'/api/crumb/list?area=0&category_id=fyclass&page=fypage&type=0&limit=20',
    class_name:'电影&电视剧&动漫&综艺',
    class_url:'1&2&3&4',
    detailUrl:'/api/node/detail?id=fyid',
    searchUrl:'/api/video/search?key=**&page=fypage',
    searchable:2,
    quickSearch:0,
    filterable:0,
    headers:{
        'User-Agent':'Dart/3.0 (dart:io)',
        'Authorization':'APIKEY-jpys-1.0',
        'APIKEY':'jpys',
        'Version':'1.0',
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
    推荐:'json:data;title;thumbnail;introduction;id',
    一级:'json:data;title;thumbnail;introduction;id',
    二级:{
        title:'data.title',
        desc:'data.region;data.type;data.year;data.score',
        img:'data.thumbnail',
        content:'data.introduction',
        is_json:1,
        tabs:'js:TABS=[];if(html.data.new_ftp_list&&html.data.new_ftp_list.length>0){TABS.push("超清")}if(html.data.new_m3u8_list&&html.data.new_m3u8_list.length>0){TABS.push("普清")}',
        lists:'js:log(TABS);LISTS=[];TABS.forEach(function(tab){if(/超清/.test(tab)){let ftp=html.data.new_ftp_list;let d=ftp.map(function(it){return it.title+"$"+it.url});LISTS.push(d)}else if(/普清/.test(tab)){let m3u=html.data.new_m3u8_list;let d=m3u.map(function(it){return it.title+"$"+it.url});LISTS.push(d)}});',
    },
    搜索:'json:data;title;thumbnail;introduction;id',
}
