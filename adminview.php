<?php 
session_start(); 
if (!isset($_SESSION['username'])) {
	session_destroy();
	header('location: admin.php');
}
?>
<html>
<head>
	<title>ONLINE FOOD ORDERING</title>
</head>
<body background="images/90.jpg">
	<h1> <center>ADMIN VIEW PAGE</center></h1>
	<link href="bootstrap.css" rel="stylesheet" id="bootstrap-css">
	<link href="style.css" rel="stylesheet">
	<BR>

	<table align="center"><td>
		<a href="adminupload.php" style="text-decoration: none;"><button type="button" class="btn btn-lg btn-block   " style="width: 300px;">UPLOAD PRODCUTS</button></a></td><td style="padding-left: 100px;">
			<a href="logout.php" style="text-decoration: none;"><button type="button" class="btn btn-lg btn-block   " style="width: 100px;">LOGOUT</button></a>
		</td></table>

		<div class="container-fluid p-5">
			<div class="row m-auto text-center w-75">

				<div class="col-3 princing-item red">
					<div class="pricing-divider ">
						<h5 class="text-light">USERS </h5>
					</div>
					<div class="card-body bg-white mt-0 shadow">
						<a href="user-details.php" style="text-decoration: none;"><button type="button" class="btn btn-lg btn-block ">View Details</button></a>
					</div>
				</div>
				<div class="col-3 princing-item green">
					<div class="pricing-divider ">
						<h5 class="text-light">CONTACTS</h5>
					</div>
					<div class="card-body bg-white mt-0 shadow">
						<a href="contactdetails.php" style="text-decoration: none;"><button type="button" class="btn btn-lg btn-block    ">View Details</button></a>
					</div>
				</div>


				<div class="col-3 princing-item blue">
					<div class="pricing-divider ">
						<h5 class="text-light">PRODUCTS</h5>
					</div>
					<div class="card-body bg-white mt-0 shadow">
						<a href="upload-details.php" style="text-decoration: none;"><button type="button" class="btn btn-lg btn-block    ">View Details</button></a>
					</div>
				</div>

				<div class="col-3 princing-item green">
					<div class="pricing-divider ">
						<h5 class="text-light">ORDERS</h5>
					</div>
					<div class="card-body bg-white mt-0 shadow">
						<a href="order-details.php" style="text-decoration: none;"><button type="button" class="btn btn-lg btn-block   ">View Details</button></a>
					</div>
				</div>
			</div>
		</div>

	</body>
	</html>
