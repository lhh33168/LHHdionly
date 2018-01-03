//加载模块不实用后缀名:js
require(['config'],function(){
    require(['jquery'],function(){
             /*------------------------nav-----------------------*/ 
                var $navLeftmenu = $('.nav_leftmenu>li>ul');
                var $navLeftmenus = $('.nav_leftmenu>li');
                 $('.nav_left').hover(function(){
                    $navLeftmenu.show().prev('.glyphicon').removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-top');
                    },function(){
                        $navLeftmenu.hide().prev('.glyphicon').addClass('glyphicon-triangle-bottom').removeClass('glyphicon-triangle-top');
                        });
                 $navLeftmenus.on('mouseover','.navAll>li',function(){
                    this.style.backgroundColor = '#000';
                 });
                 $navLeftmenus.on('mouseout','.navAll>li',function(){
                    this.style.backgroundColor = '#333';
                 });
    });
});
