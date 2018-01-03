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
         /*------------------------nav-----------------------*/ 
            var $navLeftmenu = $('.nav_leftmenu>li>ul');
            var $navLeftmenus = $('.nav_leftmenu>li');
             $('.nav_left').hover(function(){
                $navLeftmenu.show().prev('.glyphicon').removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-top');
                },function(){
                    $navLeftmenu.hide().prev('.glyphicon').addClass('glyphicon-triangle-bottom').removeClass('glyphicon-triangle-top')
                    });
             $navLeftmenus.on('mouseover','.navAll>li',function(){
                this.style.backgroundColor = '#000';
             });
             $navLeftmenus.on('mouseout','.navAll>li',function(){
                this.style.backgroundColor = '#333';
             })
});
