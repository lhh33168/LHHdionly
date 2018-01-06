<?php

	/*
		php操作数据库
			* 连接数据库： new mysqli()
			* 设置字符集：set_charset('utf8')
			* 获取查询结果集：query()
			* 使用查询结果集
				* fetch_all(MYSQLI_ASSOC)
				* fetch_assoc()
				* fetch_row()
			* 输出 echo
	 */
	// 创建连接
    $conn = new mysqli("localhost", "root", "", "second");

    // 检测连接
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } 

    //查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');

   /*
   		数据库操作
   			* 增删查改
   			* 
    */
   
   //获取查询结果集
   $result = $conn->query('select *  from goods where price>5000');

	//使用查询结果集
	//得到数组
	$row = $result->fetch_all(MYSQLI_ASSOC);
	// $row = $result->fetch_assoc();
	// $row = $result->fetch_row();

   // var_dump($row);

	echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>