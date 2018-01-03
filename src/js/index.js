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
        lhhCarousel:['jquery'],
        head:['jquery'],
        foot:['jquery']
    }


});
//加载模块不实用后缀名:js
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
