//加载模块不实用后缀名:js
require(['config'],function(){
    require(['jquery','head','foot'],function(){
        /*-------------------header and footer-------------------------*/
            $('#pageHeader').load('../html/head.html');
            $('#pageFooter').load('../html/foot.html');
        /*------------------------mainright------------------------*/ 
            $('.mainright').on('focus','input',function(){
                $(this).attr('value','');
            })
            $('#loginname').on('blur',function(){
                $(this).attr('value','11位数字');
            })
            
    });
})