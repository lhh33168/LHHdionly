<?php
	include 'connect.php';

	// 在后端获取前端的数据
	$id = isset($_GET['id']) ? $_GET['id'] : null;

	// sql语句
	$sql = "select * from goods where id=$id";

	// 查询
	$result = $conn->query($sql);

	$row = $result->fetch_assoc();

	//释放查询结果集
    $result->close();

    //关闭数据库连接
	$conn->close();

	echo json_encode($row,JSON_UNESCAPED_UNICODE);

?>