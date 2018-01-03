//加载模块不实用后缀名:js
require(['config'],function(){
    require(['jquery','head','foot'],function(){
        /*-------------------header and footer-------------------------*/
            $('#pageHeader').load('../html/head.html');
            $('#pageFooter').load('../html/foot.html');
        /*------------------------productmain------------------------*/ 
            var $listnode = $('.listnode')
            var $nodehead = $('.nodehead');
            var $nodeitem = $('.nodeitem');
            $nodeitem.eq(0).show().siblings('.nodeitem').hide();
            $listnode.on('click','.nodehead',function(){
                $(this).children('span').removeClass('glyphicon-plus').addClass('glyphicon-minus').siblings().closest('.nodehead').siblings('.nodehead').find('span').addClass('glyphicon-plus').removeClass('glyphicon-minus');
                $(this).next('.nodeitem').show().siblings('.nodeitem').hide();
                $(this).children('a').addClass('red').siblings().closest('.nodehead').siblings('.nodehead').find('a').removeClass('red');
            });
    });
})