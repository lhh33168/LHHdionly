<?php
    include 'connect.php';

    // 在后端获取前端的数据
    $username = isset($_GET['username']) ? $_GET['username'] : null;

    // sql语句
    $sql = "select * from cart where username=$username";

    // 查询
    $result = $conn->query($sql);

    $row = $result->fetch_all(MYSQLI_ASSOC);

    //释放查询结果集
    $result->close();

    //关闭数据库连接
    $conn->close();

    echo json_encode($row,JSON_UNESCAPED_UNICODE);

?>