//加载模块不实用后缀名:js
require(['config'],function(){
    require(['jquery','head','foot'],function($){
        /*-------------------header and footer-------------------------*/
            $('#pageHeader').load('../html/head.html');
            $('#pageFooter').load('../html/foot.html');
        /*------------------------productmain------------------------*/ 
        //商品分类
            var $listnode = $('.listnode')
            var $nodehead = $('.nodehead');
            var $nodeitem = $('.nodeitem');
            $nodeitem.eq(0).show().siblings('.nodeitem').hide();
            $listnode.on('click','.nodehead',function(){
                $(this).children('span').removeClass('glyphicon-plus').addClass('glyphicon-minus').siblings().closest('.nodehead').siblings('.nodehead').find('span').addClass('glyphicon-plus').removeClass('glyphicon-minus');
                $(this).next('.nodeitem').show().siblings('.nodeitem').hide();
                $(this).children('a').addClass('red').siblings().closest('.nodehead').siblings('.nodehead').find('a').removeClass('red');
            });
        //商品列表
            $.ajax({
                url:'../api/list.php',
                data:{
                    pageNo:1,
                    qty:21
                },
                success:function(res){
                    var $ul = $('.listwraper');
                    var $page = $('.listpager');
                    var $pageNo;
                    skip(res);
                    function skip(res){
                        res = JSON.parse(res);
                        $pageNo = res.pageNo;
                        $ul.html('');
                        $ul.html(res.data.map(function(item){
                            return `<li class="wraperitem" data-guid="${item.id}">
                                        <a class="itemimg"><img src="${item.imgurl}"/></a>
                                        <p class="itemname"><a>${item.name}</a></p>
                                        <div class="itemprice">
                                            <p class="pricemarket">
                                                市场价：
                                                <span style="text-decoration:line-through;">￥${item.mprice}</span>
                                            </p>
                                            <p class="pricemember">
                                                商城价：
                                                <span>￥${item.price}</span>
                                            </p>
                                        </div>
                                    </li>`
                            }).join(''));
                        $page.text('');
                        $page.html( 
                            `<span>共${res.total}款|${res.qty}/页|第${res.pageNo}页/共${Math.ceil(res.total/res.qty)}页</span>`);
                        var pageQty = Math.ceil(res.total/res.qty);
                        for(var i=1;i<=pageQty;i++){
                            var $pages = $('<a/>');
                            $pages.html(i);
                            if(i == res.pageNo){
                                $pages.addClass('active');
                            }
                            $page.append($pages);
                        }
                        $page.append($('<a>下页</a>'));
                    }
                     //点击分页切换
                    $page.on('click','a',function(){
                        if($(this).text() == '下页'){
                            pageNo = $pageNo*1+1;
                        }
                        else{
                            pageNo = $(this).text();
                        }
                        
                        $.ajax({
                            url:'../api/list.php',
                            data:{
                                pageNo:pageNo,
                                qty:21
                            },
                            success:function(res){
                                skip(res);
                            }
                        })
                    })
                }
            });
            var $ul = $('.listwraper');
            $ul.on('click','.wraperitem a',function(){
                console.log(6)
                var params = '?';console.log($(this))
                var $guid = $(this).parent('.wraperitem').attr('data-guid');
                var str = 'id';
                params += str + '=' + $guid;
                location.href = 'details.html' + params;
            });
        //     html.onclick = function(e){
        // e = e || window.event;
        // var target = e.target || e.srcElement;
        // var params = '?';
        // if(target.tagName.toLowerCase() ==='img'){
        //    var li = target.parentNode;
        //    var guid = li.getAttribute('data-guid');
        //     var str = 'id';
        //     params += str + '=' + guid;
        //    for(var i=0;i<goodlist.length;i++){
        //        if(goodlist[i].id ===guid){
        //            goodlist.splice(i,1);
        //            break;
        //        }
        //    }
        //    if(i===goodlist.length){
        //        var goods = {
        //            guid:guid,
        //            imgurl:li.children[0].src,
        //            name:li.children[1].innerText,
        //            price:li.children[2].children[1].innerText,
        //            newprice:li.children[2].children[1].innerText,
        //            sale:li.children[3].innerText,
        //            qty:1
        //         }
        //        goodlist.unshift(goods);
        //    }else{
        //        var goods = {
        //            guid:guid,
        //            imgurl:li.children[0].src,
        //            name:li.children[1].innerText,
        //            price:li.children[2].children[1].innerText,
        //            newprice:li.children[2].children[1].innerText,
        //            sale:li.children[3].innerText,
        //            qty:1
        //         }
        //        goodlist[i].qty++;
        //        goodlist.unshift(goods);
        //    }
        //    document.cookie = 'goodlist=' + JSON.stringify(goodlist);
        //    location.href = 'goods.html' + params;
        // }
        
    });
})