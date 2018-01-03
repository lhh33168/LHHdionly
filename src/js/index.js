//加载模块不实用后缀名:js
require(['config'],function(){
    require(['jquery','lhhCarousel','head','foot'],function(){
         /*-------------------header and footer-------------------------*/
            $('#pageHeader').load('./html/head.html');
            $('#pageFooter').load('./html/foot.html');
            $('#friendlink').load('./html/friendLink.html');
        /*-------------------banner-------------------------*/
            $('.slideshow').lxCarousel({
                        imgs:['./img/small20151028131103.jpg','./img/small20151028131104.jpg'],
                        width:'100%',
                        height:'420',
                        index:0,
                        type:'fade'
                    });
    });
});
