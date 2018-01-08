<?php
    include 'connect.php';
    
    $id = isset($_GET['id']) ? $_GET['id'] : '';

    //查看用户名是否已经存在
    // $sql = "select username from cart where username='$username'";
    // $result = $conn->query($sql);
    if($id !='' && $id !='clearcar'){
        $sql = "DELETE FROM cart where id=$id;";
    }else if($id !='' && $id ==='clearcar'){
        $sql = "DELETE FROM cart";
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