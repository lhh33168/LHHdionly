//加载模块不实用后缀名:js
require(['config'],function(){
    require(['jquery','head','foot'],function($){
        /*-------------------header and footer-------------------------*/
            $('#pageHeader').load('../html/head.html',function(){
            //购物车页面数据获取
            var userName = window.sessionStorage.getItem('username');console.log(userName)
            if(userName){
                userName = userName.slice(1);
                userName = userName.split('=');
                userName = userName[1];
            }
            $.ajax({
                url:'../api/carts.php',
                data:{username:userName},
                success:function(res){
                    try{
                        cartgoods(res);
                        function cartgoods(res){
                        var res = JSON.parse(res);
                        console.log(res)
                        try{
                            $('#wrapmaincar')[0].removeChild($('.mainnone')[0]);
                        }catch(err){}
                        var $table = $('<table/>');
                        var $tbody = $('<tbody/>');
                        var $mainstat = $('<div class="mainstat"></div>');
                        var total = 0;
                        var totalprice = 0;
                        var totalorder = 0;
                        var totalsale = 0;
                        for(var i=0;i<res.length;i++){
                            totalprice += res[i].mprice*1*res[i].qty;
                            totalprice.toFixed(2);
                            totalorder += res[i].price*1*res[i].qty;
                            totalorder.toFixed(2);
                            totalsale = (totalprice - totalorder).toFixed(2);
                            total += res[i].qty*1;
                        }
                        $mainstat.html(`<div class="statleft">共<span id="totalcount" class="total">${total}</span>
                                        件商品<span id="clearcar" class="clear" style="cursor:pointer">×清空珠宝箱</span><a href="/" class="gobuy">继续购物</a>
                                        </div>
                                        <div class="statright">
                                        商品总金额 <span id="productmoney">￥${totalprice}</span> - 优惠金额 <span id="discountmoney">￥${totalsale}</span> = 订单总金额 <span id="totalmoney" class="total">￥${totalorder}</span>
                                        <span class="button"><img src="..//img/cart/jiesuan.jpg"  border="0" /></span>
                                        </div>`) 
                        $table.html(`<tbody>
                                        <tr class="headrow">
                                            <td class="img">商品</td>
                                            <td>型号</td>
                                            <td class="size">数量</td>
                                            <td class="word">刻字内容</td>
                                            <td class="price">市场价格</td>
                                            <td class="price">优惠</td>
                                            <td class="price">成交价</td>
                                            <td class="action">操作</td>
                                        </tr>
                                    </tbody>`);
                                                    console.log($('<table/>')[0])
                        $tbody.html(res.map(function(item){
                                    var sale = (item.mprice-item.price).toFixed(2);
                                    return `<tr class="product" data-guid="${item.goodsid}">
                                                <td class="img"><img width="120" height="120" src="${item.imgurl}" alt="" /></td>
                                                <td><a href="../html/details.html" target="_blank">${item.name}</a></td>
                                                <td class="size"><span id="cartminus">-</span><span>${item.qty}</span><span id="cartadd">+</span></td>
                                                <td class="word">&nbsp;</td>
                                                <td class="price" style="text-decoration:line-through;">￥${item.mprice}</td>
                                                <td class="price">￥${sale}</td>
                                                <td class="price">￥${item.price}</td>
                                                <td class="action" data-guid="${item.id}" style="cursor:pointer;">删除</td>
                                            </tr>`
                        }))
                        $table.append($tbody);
                        $('#wrapmaincar')[0].appendChild($table[0]);
                        $('#wrapmaincar').append($mainstat);
                        }
                        $('#wrapmaincar').on('click','.action',function(){
                            var $guid = $(this).attr('data-guid');
                            $.ajax({
                                url:'../api/cartdelete.php',
                                data:{
                                    id:$guid
                                },
                                success:function(data){
                                    console.log(data)
                                    $.ajax({
                                        url:'../api/carts.php',
                                        data:{username:userName},
                                        success:function(res){
                                            try{
                                                $('#wrapmaincar').html('');
                                                cartgoods(res);
                                                        }catch(err){}
                                            }
                                     })
                                }
                            })
                        })
                        $('#wrapmaincar').on('click','#clearcar',function(){
                            var $id = $(this).attr('id');
                            $.ajax({
                                url:'../api/cartdelete.php',
                                data:{
                                    id:$id
                                },
                                success:function(data){
                                    console.log(data)
                                    $.ajax({
                                        url:'../api/carts.php',
                                        data:{username:userName},
                                        success:function(res){
                                            try{
                                                $('#wrapmaincar').html('');
                                                cartgoods(res);
                                                        }catch(err){}
                                            }
                                     })
                                }
                            })
                        });
                        $('#wrapmaincar').on('click','#cartadd',function(){console.log(66)
                            var $goodsid = $(this).parent().parent().attr('data-guid');console.log($goodsid)
                            $.ajax({
                                url:'../api/cart.php',
                                data:{
                                    goodsid:$goodsid,
                                    username:userName,
                                    qty:1
                                },
                                success:function(data){
                                    console.log(data)
                                    $.ajax({
                                        url:'../api/carts.php',
                                        data:{username:userName},
                                        success:function(res){
                                            try{
                                                $('#wrapmaincar').html('');
                                                cartgoods(res);
                                                        }catch(err){}
                                            }
                                     })
                                }
                            })
                        })
                        $('#wrapmaincar').on('click','#cartminus',function(){
                            var $goodsid = $(this).parent().parent().attr('data-guid');console.log($goodsid)
                            $.ajax({
                                url:'../api/cart.php',
                                data:{
                                    goodsid:$goodsid,
                                    username:userName,
                                    qty:-1
                                },
                                success:function(data){
                                    console.log(data)
                                    $.ajax({
                                        url:'../api/carts.php',
                                        data:{username:userName},
                                        success:function(res){
                                            try{
                                                $('#wrapmaincar').html('');
                                                cartgoods(res);
                                                        }catch(err){}
                                            }
                                     })
                                }
                            })
                        })
                     }catch(err){}
                }
            })
           
        });
    })
                
            });
            $('#pageFooter').load('../html/foot.html');
    
        /*------------------------mainright------------------------*/ 