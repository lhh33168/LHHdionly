//加载模块不实用后缀名:js
require(['config'],function(){
    require(['jquery','common','head','foot'],function($){
        /*-------------------header and footer-------------------------*/
            $('#pageHeader').load('../html/head.html');
            $('#pageFooter').load('../html/foot.html');
        /*------------------------mainright------------------------*/ 
            $('.mainright').on('focus','input',function(){
                $(this).attr('placeholder','');
            });
            //随机验证码
            var $vCode = $('#signinimgcode');
            var $code = $('.inputreset')
            var $btn = $('.resetimgbtn'); 
            // 封装随机验证码函数
            function createCode(){
                var res = '';
                for(var i=0;i<4;i++){
                    var num = randomNumber(0,9);
                    res = res + num;
                }
                
                // 把res返回到函数执行的位置
                return res;
             }
             var currentCode = createCode();

             // 把验证码写入#code
             $code.html(currentCode);
             
             // 输入验证码并提交
             $vCode.on('blur',function(){
                // 获取输入的值
                var _vcode = $vCode.val();console.log(_vcode)
                $('#signinimgcodeerror').text('');
                // 与随机验证码进行对比
                if(_vcode != currentCode){
                    $('#signinimgcodeerror').text('验证码输入不正确');
                }
             })
            //判断密码是否合法
            $('#signinpass').on('blur',function(){
                var reg = /^\S{5,20}$/;
                $('#signinpasserror').text('');
                if(!reg.test($('#signinpass').val())){
                    $('#signinpasserror').text('密码不合法');
                     return false;
                }
            });
            //点击切换验证码
            $btn.on('click',function(){
                $code.html(createCode());
            })
            //判断两次密码输入是否一致
            $('#signinword').on('blur',function(){
                $('#signinworderror').text('');
                if($('#signinpass').val() != $('#signinword').val()){
                    $('#signinworderror').text('两次密码输入不一致');
                    return false;
                }
            })
            //判断用户名是否合法，是否已被注册
            $('#signinname').on('blur',function(){
                $(this).attr('placeholder','11位数字');
                var reg = /^1[34578]\d{9}$/i;
                
                $('#signinnameerror').text('');
                if(!reg.test($('#signinname').val())){
                    $('#signinnameerror').text('手机号格式不正确');
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
            //在后台判断是否用户名密码合法
            $('.signinbutnitem').on('click',function(){
                var reg1 = /^\S{5,20}$/;
                var reg2 = /^1[34578]\d{9}$/i;
                if(reg2.test($('#signinname').val()) && reg1.test($('#signinpass').val()) && $('#signinpass').val() == $('#signinword').val() && $('#signinread')[0].checked && currentCode === $vCode.val()){
                    $.ajax({
                        url:'../api/reg.php',
                        data:{
                            username:$('#signinname').val(),
                            password:$('#signinpass').val(),
                            zhuce:true
                        },
                        success:function(data){
                            if(data==='ok'){
                                location.href = 'reg.html'
                            }
                        }
                    })
                  }
            })
    });
})