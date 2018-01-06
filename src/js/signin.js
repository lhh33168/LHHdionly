//加载模块不实用后缀名:js
require(['config'],function(){
    require(['jquery','head','foot'],function(){
        /*-------------------header and footer-------------------------*/
            $('#pageHeader').load('../html/head.html');
            $('#pageFooter').load('../html/foot.html');
        /*------------------------mainright------------------------*/ 
            // var _password = $('#signinpass').val();
            $('.mainright').on('focus','input',function(){
                $(this).attr('placeholder','');
            });
            $('#signinpass').on('blur',function(){
                var reg = /^\S{5,20}$/;
                $('#signinpasserror').text('');
                if(!reg.test($('#signinpass').val())){
                    $('#signinpasserror').text('密码不合法');
                     return false;
                }
            })
            $('#signinname').on('blur',function(){
                $(this).attr('placeholder','11位数字');
                var reg = /^1[34578]\d{9}$/i;
                
                $('#signinnameerror').text('');
                if(!reg.test($('#signinname').val())){
                    
                    
                    $.ajax({
                    url:'../api/reg.php',
                    data:{
                        username:10
                    },
                    success:function(data){
                            console.log(data)   
                            $('#signinnameerror').text('手机号格式不正确');
                            
                        }
                    })

                    // e.preventDefault();
                    // return;
                    return false;//阻止代码向下执行，阻止默认行为（表单提交）
                }
                $.ajax({
                    url:'../api/reg.php',
                    data:{
                        username:$('#signinname').val(),
                        password:$('#signinpass').val()
                    },
                    success:function(data){
                        console.log(data)
                        
                        if(data==='fail'){
                            $('#signinnameerror').text('该手机号已注册');
                        }console.log($('#signinpass').val())
                    }
                })
            }); 
            $('.signinbutnitem').on('click',function(){
                $.ajax({
                    url:'../api/reg.php',
                    data:{
                        username:$('#signinname').val(),
                        password:$('#signinpass').val()
                    },
                    success:function(data){
                        console.log(data)

                    }
                })
            })
    });
})