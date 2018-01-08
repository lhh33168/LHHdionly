<?php
    include 'connect.php';
    
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $goodsid = isset($_GET['goodsid']) ? $_GET['goodsid'] :'';
    $imgurl = isset($_GET['imgurl']) ? $_GET['imgurl'] :'';
    $name = isset($_GET['name']) ? $_GET['name'] :'';
    $price = isset($_GET['price']) ? $_GET['price'] :'';
    $mprice = isset($_GET['mprice']) ? $_GET['mprice'] :'';
    $qty = isset($_GET['qty']) ? $_GET['qty'] :'';
    //查看商品id是否已经存在
    $sql = "select goodsid from cart where goodsid='$goodsid'";
    $result = $conn->query($sql);
    if($username !='' && $result->num_rows>0){
        $sql1 = "select qty from cart where goodsid='$goodsid'";
        $result = $conn->query($sql1);
        // 使用查询结果集
        $row = $result->fetch_all(MYSQLI_ASSOC);
        // $row = json_decode($row,JSON_UNESCAPED_UNICODE)
        $qty1 = $row[0];
        foreach($qty1 as $x=>$x_value){
            $qty = $x_value+$qty;
        }
        // echo $qty;
        // $mprice = $qty*$mprice
        if($qty>=0){
            $sql = "update cart set qty='$qty' where goodsid=$goodsid";
            }
    }else if($username !='' && $result->num_rows===0){

        $sql = "insert into cart (name,username,goodsid,imgurl,price,mprice,qty) values('$name','$username','$goodsid','$imgurl','$price','$mprice','$qty')";
    }

        // 获取查询结果
        $result = $conn->query($sql);

        if ($result) {
            echo "ok";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    

    
    

    // 释放查询内存(销毁)
    //$result->free();

    //关闭连接
    $conn->close();
?>