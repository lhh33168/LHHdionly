// 设置别名
require.config({
    // 默认data-main文件所在的目录
    // baseUrl:'js',

    // 别名/虚拟路径
    paths:{
        'jquery':'../lib/jquery-3.2.1.min',
        
        'gdszoom':'../lib/jquery.gdsZoom/jquery.gdsZoom',

        'lhhCarousel':'../lib/jquery-lxCarousel/jquery.lxCarousel'
    },
    shim:{
        // 设置依赖
        gdszoom:['jquery'],
        lhhCarousel:['jquery']
    }


});
//加载模块不实用后缀名:js
require(['jquery'],function(){
    // 获取元素
    var $tab = $('#container_cityshopwrap');
    var $tabItem = $tab.find('.list .cityname');
    var $tabContent = $tab.find('.city .citycontent');
    var $tabContentImg = $tab.find('.shop img');

    console.log($tab,$tabItem,$tabContent)
    // 隐藏除第一个以外的图片
    $tabContent.slice(1).hide();
    // 默认第一个高亮
    $tabItem.first().addClass('active');


    $tab.on('mouseover','.line .cityname',function(){
        // 获取当前tab
        // 添加高亮，出去其他高亮
        $(this).addClass('active').siblings().removeClass('active');

        // 获取当前索引值
        var idx = $(this).index();console.log(idx)

        // 切换当前图片
        $tabContent.eq(idx).show().siblings().hide();
        var imgsrc = this.id.split('_')[1];
        $tabContentImg[0].src = '../img/foot/'+imgsrc+'.jpg'
    });
});