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
                
            /*-----------------用户登录注销操作------------------*/ 
                var $userparams = window.sessionStorage.getItem('username');console.log($userparams)
                var $_username = $('.topbar .left>span');console.log($_username)
                if($userparams){
                    $userparams = $userparams.slice(1);
                    $userparams = $userparams.split('=');
                    $userparams = $userparams[1];
                    $_username.text('');
                    $_username.text(`尊敬的 ${$userparams} 用户 ! `);
                    $.ajax({
                        url:'../api/carts.php',
                        data:{
                            username:$userparams
                        },
                        success:function(data){
                            data = JSON.parse(data);
                            var total = 0;
                            for(var i=0;i<data.length;i++){
                                total += data[i].qty*1;
                            }
                            $('.topbar .right span').text('');
                            $('.topbar .right span').text(total);
                        }
                    })
                }
                $('.left').on('click','.qiehuan',function(){
                    window.sessionStorage.removeItem('username');
                })

    });
});
