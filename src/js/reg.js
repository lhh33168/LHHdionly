//加载模块不实用后缀名:js
require(['config'],function(){
    require(['jquery','head','foot'],function(){
        /*-------------------header and footer-------------------------*/
            $('#pageHeader').load('../html/head.html');
            $('#pageFooter').load('../html/foot.html');
        /*------------------------mainright------------------------*/ 
            $('.mainright').on('focus','input',function(){
                $(this).attr('placeholder','');
            });
            //判断用户名是否存在，是否合法
            $('#loginname').on('blur',function(){
                $(this).attr('placeholder','11位数字');
                var reg = /^1[34578]\d{9}$/i;
                
                $('#loginnameerror').text('');
                if(!reg.test($('#loginname').val())){
                    $('#loginnameerror').text('手机号格式不正确');
                }
               
            }); 
            //在后台判断是否用户名密码合法
            $('.loginbutnitem').on('click',function(){
                    $.ajax({
                        url:'../api/login.php',
                        data:{
                            username:$('#loginname').val(),
                            password:$('#loginpass').val()
                        },
                        success:function(data){
                            var params = '?';console.log($(this))
                            var $username = $('#loginname').val();
                            var str = 'username';
                            params += str + '=' + $username;
                            console.log(data)
                            if(data==='ok'){
                                location.href = '../index.html';
                                sessionStorage.setItem('username', params);


                            }else{ 
                                $('.loginpasserror').text('用户名或密码错误');
                            }  
                        }
                    })
            })
            
    });
})