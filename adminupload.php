<?php 
session_start(); 
if (!isset($_SESSION['username'])) {
	header('location: admin.php');
}
?>
<?php
$server=mysqli_connect("localhost","root","  ","bhavya");
if(!$server) {die("connection failed".mysqli_connect_error); }

if(isset($_POST["insert"])){
	$pic = $_POST["pname"];
	$price = $_POST['price'];
	$imagename = $_POST["pname"];
	$folder = "images/";
	$path = $folder.$pic;
	// die; 
	if(move_uploaded_file($_FILES["foodimage"]["tmp_name"],$path)) {
		$sqli ="INSERT INTO product(product_name, price, images)VALUES('$pic','$price','$imagename')";
		$res = mysqli_query($server,$sqli);
		if(!empty($res)){
			$msg = 'Product Details Added Successfully';
		}
	}
	else {
		$msg =  'Something went wrong Uploading file'; 
	}
}
?>


<html>
<head>
	<title>ONLINE FOOD ORDERING</title>


	<style>
	.dropdown {
		position: relative;
		display: inline-block;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: #44;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
		padding: 12px 16px;
		z-index: 1;
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}
</style>
<link href="bootstrap.css" rel="stylesheet" id="bootstrap-css">
<link href="style.css" rel="stylesheet">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
</head>
<body background="90.jpg">
	<h1> <center>ADMIN UPLOAD</center></h1>
	<center>
		<span style="color:green;font-weight:bold;font-size:18px"><?php  echo (!empty($msg)?$msg:"") ?></span>
	</center>
	<form  method="post" name="f1" enctype="multipart/form-data" action=""><br>
		<div class="container-fluid" style="padding-left: 300px;">
			<div class="row m-auto text-center w-75">
				<div class="col-8 princing-item green">

					<h3 class="text-light">ADD PRODUCT DETAILS</h3>

					<div class="card-body bg-white mt-0 shadow">
						<div class="form-group">
							<div class="input-group mb-2">
								<h4 style="width: 200px;">Enter Name</h4>
								<div class="input-group-prepend">
									<div class="input-group-text"><i class="fa fa-id-card text-info"></i></div>
								</div>
								<input type="text" class="form-control" id="paddress" name="pname" placeholder="Product Name" required>
							</div>
						</div>
					</div>
					<div class="card-body bg-white mt-0 shadow">
						<div class="form-group">
							<div class="input-group mb-2">
								<h4 style="width: 200px;">Enter Price</h4>
								<div class="input-group-prepend">
								</div>
								<input type="text" class="form-control" id="price" name="price" placeholder="Price" required>
							</div>
						</div>
					</div>
					<div class="card-body bg-white mt-0 shadow">
						<div class="form-group">
							<div class="input-group mb-2">
								<h4 style="width: 200px;">Product Photo</h4>
								<div class="input-group-prepend">
									<div class="input-group-text"><i class="fa fa-file-image text-info"></i></div>
								</div>
								<input type="file" class="form-control"  name="foodimage" id="foodimage" placeholder="foodimage" required>
							</div>
						</div>
					</div>
					<div class="card-body bg-white mt-0 shadow">
						<button type="submit" class="btn btn-lg btn-block  btn-custom" name="insert" value="insert">INSERT</button>
					</div>
				</div>
			</div>
		</div>
	</form>
	<center>
		<a href="adminview.php" style="text-decoration: none;"><button type="button" class="btn btn-lg btn-block  btn-custom" style="width: 100px;">BACK</button></a>
	</center>
</body>
</html>
