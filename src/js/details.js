//加载模块不实用后缀名:js
require(['config'],function(){
    require(['jquery','head','foot','gdszoom'],function(){
        /*-------------------header and footer-------------------------*/
            $('#pageHeader').load('../html/head.html',
            //放大镜
                function(){
                    $('.large').gdsZoom({
                                        width:420,
                                        height:420 
                                        });
                    
                });
                                
            $('#pageFooter').load('../html/foot.html');
        /*------------------------detailsmain------------------------*/ 
            //详情页参数信息获取
            var params = location.search;
            params = params.slice(1);
            params = params.split('=');
            params = params[1];
            $.ajax({
                url:'../api/goods.php',
                data:{
                    id:params
                },
                success:function(res){
                    res = JSON.parse(res);console.log(res.imgurl)
                    $('.large img').attr({'src':res.imgurl,'data-big':res.imgurl,'alt':res.name,'title':res.name});
                    var imgurls = res.imgurls.split(',');
                    var $smallboxul = $('<ul/>');
                    $smallboxul.html(imgurls.map(function(item){
                        return `<li class="smallList">
                                    <img src="${item}" alt="${res.name}" title="${res.name}"/>
                                </li>`
                    }));
                    $('.smallbox').html('');
                    $('.smallbox').append($smallboxul);
                    $('.smallList img').click(function(){
                        $('.large img').attr({
                            'src':this.src,
                            'data-big':$(this).attr('data-big') || this.src
                        });
                    });
                    $smallboxul.width($('.smallList').outerWidth(true)*imgurls.length);
                    //放大镜左右按钮
                    var $left = 400-$smallboxul.width();console.log($left)
                    $('.glyphicon-menu-left').click(function(){
                        $('.smallbox ul').animate({left:0})
                    });
                    $('.glyphicon-menu-right').click(function(){
                        if($left<=0){
                            $('.smallbox ul').animate({left:$left})
                        }
                    });
                }
            })
            
    });
})