<?php
session_start();

if(!empty($_SESSION['food'])){
	unset($_SESSION['food']);
}


if(empty($_SESSION['auth'])){
	header('location:user.php');
}
$conn = mysqli_connect('localhost','root','  ','bhavya');
$sql="SELECT * FROM product";
$records=mysqli_query($conn,$sql);


if(!empty($_POST['submit'])){

	foreach ($_POST['product_name'] as $key => $value) {
		$food['sess'][$key]['quantity']=$_POST['quantity'][$key];
		$food['sess'][$key]['price']=$value;
	}
	$_SESSION['food'] = $food;

	header('location:bill.php');
}


?>





<html>
<head>
	<style type="text/css">
	table {
		font-family: arial, sans-serif;
		border-collapse: collapse;
		width: 98%;
	}

	td, th {
		border: 1px solid #dddddd;
		text-align: left;
		padding: 2px;
	}
	input[type="checkbox"]{
		width: 30px; /*Desired width*/
		height: 30px; /*Desired height*/
		
	}
	.btn-lg,
	.btn-group-lg > .btn {padding: 10px 16px; font-size: 18px; line-height: 1.3333333; border-radius: 6px; }
	.btn-success {color: #fff; background-color: #5cb85c; border-color: #4cae4c; }
</style>
<script type="text/javascript" src="js/validate.js"></script>
<script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="js/jquery-ui.min.js"></script>
<script type="text/javascript" src="js/jquery.validate.min.js"></script>
<script type="text/javascript" src="js/jqval-additional-methods.min.js"></script>
</head>
<body>

	<form method="post" name="frmorder" id="frmorder">
		<center><h1> FOOD ITEMS AND DETAILS</h1></center>
		<center><h4><a href="logout.php">LOG OUT </a></h4></center>

		<?php $i=0;
		while($row=mysqli_fetch_array($records)){ 		$i++
			// echo '<pre>';
			// print_r($row);
			// echo '</pre>';
			?>


			<table>
				<tr>
					<td width="1%" style="text-align:center;font-size:19px"><?php echo $i; ?></td>
					<td width="35%"><img src="<?php echo 'images/'.$row["images"]?>" width="450" height="200" ></td>
					<td width="20%" style="text-align:center;font-size:29px"><?php echo ucwords($row['product_name']); ?></td>
					<td width="10%" style="text-align:center;font-size:20px"><?php echo 'Price: '.$row['price'].' $'; ?></td>
					<td width="10%" style="text-align:center;font-size:19px">
						<span style="font-size:18px">Select Quantity  </span>
						<select name="quantity[<?php echo $row["product_name"]; ?>]" id="quantity[<?php echo $row["product_name"]; ?>]">
							<option value="">--Select--</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
					</td>
					<td width="5%">
						<span style="font-size:18px">Select</span>
						<input type="checkbox" name="product_name[<?php echo $row["product_name"]; ?>]" value="<?php echo $row["price"]; ?>" >
					</td>
					<!-- <td width="15%"><a href ="orderform.php?id=<?php echo $row['id']; ?>" target ='__blank'>ORDER NOW</a></td> -->
				</tr>
			</table>
			<?php } ?>

			<div style="margin-top: 120px"></div>
			<div style="text-align:center">
				<input type="submit" name="submit" class="btn-lg btn-success" value="SUBMIT" id="submit">
			</div>
		</form>
	</body>
<!-- 	<script type="text/javascript">
		$(function(){
			$('#frmorder').validate({
				rules:{
					quantity[]:{required:true},
				},
				messages:{
					quantity[]:{required:'Enter your  Name'},
					
				}
			})
		});
	</script> -->
	</html>