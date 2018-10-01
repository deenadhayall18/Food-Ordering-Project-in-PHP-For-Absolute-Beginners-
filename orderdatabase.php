

<html>
<body background="images/90.jpg">
	<?php
	include 'config.php';

	// $server=mysqli_connect("localhost","root","","bhavya");
	// if(!$server)
	// {
	// 	die("connection failed".mysqli_connect_error);
	// }
	$a=$_POST["t11"];
	$b=$_POST["t12"];

	$c=$_POST["t13"];

	$d=$_POST["t14"];
	$e=$_POST["t15"];
	$f=$_POST["t16"];
	$g=$_POST["t17"];
	$h=$_POST["t18"];

	$i=($c*$_POST['t18']);
	if(isset($_POST["insert"]))
	{
		$sqli="INSERT INTO orderfile(pro_id, product_name, price, name, mobile, address, images, qty, total) VALUES ('$a','$b','$c','$d','$e','$f','$g','$h','$i')";
		if($sqli)
		{
			echo "<script>alert('Order is Successfully.,..');</script>";
		}
		if(mysqli_query($conn,$sqli))
		{ 
			echo "inserted successfully";
		}
		else
		{
			echo"not inserted";
		}
	}

	?>
</body>
</html>