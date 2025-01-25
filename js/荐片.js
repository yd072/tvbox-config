var rule = {
    title:'荐片',
    host:'http://api2.rinhome.com',
    homeUrl:'/api/tag/hand?code=unknown601193cf375db73d&channel=wandoujia',//网站的首页链接,用于分类获取和推荐获取
    // url:'/api/crumb/list?area=0&category_id=fyclass&page=fypage&type=0&limit=24&fyfilter',
    url:'/api/crumb/list?area=0&category_id=fyclass&page=fypage&type=0&limit=24',
    class_name:'电影&电视剧&动漫&综艺',
    class_url:'1&2&3&4',
    detailUrl:'/api/node/detail?id=fyid',
    searchUrl:'/api/video/search?key=**&page=fypage',
    searchable:2,
    quickSearch:0,
    filterable:0,
    headers:{
        'User-Agent':'jianpian-android/350',
        'JPAUTH':'y261ow7kF2dtzlxh1GS9EB8nbTxNmaK/QQIAjctlKiEv'
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
    图片来源:'@Referer=www.jianpianapp.com@User-Agent=jianpian-version353',
    推荐:'json:data;title;path;playlist.title;id',
    一级:'json:data;title;path;playlist.title;id',
    二级:{
        title:'data.title',
        desc:'data.description;data.id',
        img:'data.thumbnail',
        content:'data.thumbnail',
        is_json:1,
        tabs:'js:TABS=[];if(html.data.have_ftp_ur == 1){TABS.push("超清")}if(html.data.have_m3u8_ur == 1){TABS.push("普清")}',
        lists:'js:log(TABS);LISTS=[];TABS.forEach(function(tab){if(/超清/.test(tab)){let ftp=html.data.new_ftp_list;let d=ftp.map(function(it){return it.title+"$"+it.url});LISTS.push(d)}else if(/普清/.test(tab)){let m3u=html.data.new_m3u8_list;let d=m3u.map(function(it){return it.title+"$"+it.url});LISTS.push(d)}});',
    },
    搜索:'json:data;*;thumbnail;mask;*'
} 
