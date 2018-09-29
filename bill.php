<?php 
session_start();
if(empty($_SESSION['food'])){
	header("location:foodorder.php");
}


if(!empty($_POST['submit'])){
	$food_order_details=  json_encode($_SESSION['food']);
	$user = $_POST['user'];
	$total = $_POST['total'];
	$date = $_POST['date'];
	$conn = mysqli_connect('localhost','root','  ','bhavya');
	$sql="INSERT INTO orders_details(user,food_order_details,total,date)VALUES('$user','$food_order_details','$total','$date')";
	$records=mysqli_query($conn,$sql);
	if(!empty($records)){
		$msg = 'Order Placed Successfully';
	}

}

?>


<!DOCTYPE html>
<html>
<head>
	<style>
	table {
		font-family: arial, sans-serif;
		border-collapse: collapse;
		width: 108%;
	}

	td, th {
		border: 1px solid #dddddd;
		text-align: left;
		padding: 8px;
	}
	.btn-lg,
	.btn-group-lg > .btn {padding: 6px 16px; font-size: 18px; line-height: 1.3333333; border-radius: 6px; }
	.btn-success {color: #fff; background-color: grey; border-color: grey; }

	.btn-lg1,
	.btn-group-lg > .btn {padding: 6px 16px; font-size: 18px; line-height: 1.3333333; border-radius: 6px; }
	.btn-success1 {color: #fff; background-color: green; border-color: pink; }

	.btn-lg2,
	.btn-group-lg > .btn {padding: 6px 16px; font-size: 18px; line-height: 1.3333333; border-radius: 6px; }
	.btn-success2 {color: #fff; background-color: orange; border-color: orange; }



</style>
<script type="text/javascript">
	function confirmation(){
		yes= confirm('are your sure?')
		if(yes){
			window.location ='foodorder.php';
		}
	}

	function myFunction() {
		window.print();
	}
</script>
</head>
<body>
	<center>
		<h1>Bill</h1>
	</center>
	<center>

		<span style="color:green">	<h3><?php echo (!empty($msg)?$msg:""); ?></h3></span>
		<?php if(!empty($msg)){ ?>
		<button onclick="myFunction()"> Click Here to Print Invoice</button>
		<?php } ?>

	</center>
	<br>
	<div style="text-align:center">
		<button onclick="confirmation()" >Back to Order </button>

	</div>
	<br>
	<table >
		<thead>
			<tr style="background-color:grey">
				<th>Sl No</th>
				<th>Food Items</th>
				<th>Quantity</th>
				<th>Price</th>
				<th>Total</th>
			</tr>
			<tbody>
				<?php $i=0;
				foreach ($_SESSION['food']['sess'] as $key => $value) {$i++;
					$t[]=$value['quantity']*$value['price'];

					?>
					<tr>
						<td width="10%"><?php echo $i; ?></td>
						<td width="30%"><?php echo ucwords($key); ?></td>
						<td width="20%"><?php echo $value['quantity']; ?></td>
						<td width="20%"><?php echo $value['price']; ?></td>
						<td width="20%"><?php echo ($value['quantity']*$value['price']); ?></td>
						<?php } ?>
					</tr>
				</tbody>
			</thead>
		</table>
		<br>
		<center>
			<button type="button" class="btn btn-lg btn-success">Amount : <?php echo '$   '.$total = array_sum($t); ?></button>
			<button type="button" class="btn btn-lg2 btn-success2">GST ( 5% ) : 
				<?php 
				echo '$   '.$gst = ($total/100)*5;
				?>
			</button>
			<button type="button" class="btn btn-lg1 btn-success1">Total Amount : 
				<?php 
				echo '$  '.($gst+$total);
				?>
			</button>
		</center>
		<br>
		<center>



		</center>
		<form method="post" name="frm" id="frm">
			<input type="hidden" name="user" id="user" value="<?php echo $_SESSION['username']; ?>">
			<?php  $amount = array_sum($t); 
			$gst = ($amount/100)*5;
			$total = ($gst+$amount);
			?>
			<input type="hidden" name="total" id="total" value="<?php echo $total; ?>">
			<input type="hidden" name="date" id="date" value="<?php echo date('d-m-Y',strtotime('today')); ?>">
			
		</center>
		<center>
			<input type="submit" name="submit" ></center>
		</form>
		<!-- <button><?php echo array_sum($t); ?></button> -->
	</body>
	</html>