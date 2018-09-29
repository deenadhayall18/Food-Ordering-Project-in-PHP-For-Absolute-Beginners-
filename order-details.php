<center>
	<a href="adminview.php" style="text-decoration: none;"><button type="button" class="btn btn-md btn-block  btn-info" style="width: 100px;">BACK</button></a>
</center>
<?php 
session_start(); 

if (!isset($_SESSION['username'])) {
	$_SESSION['msg'] = "You must log in first";
	header('location: admin.php');
}
if (isset($_GET['logout'])) {
	session_destroy();
	unset($_SESSION['username']);
	header("location: admin.php");
}
$con=mysqli_connect("localhost","root","  ","bhavya");
if (mysqli_connect_errno())
{
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
$result = mysqli_query($con,"SELECT * FROM orders_details");
echo "<center>";
echo "<table bgcolor='lightblue' class='table table-hover' border='5' >
<tr style='background-color: #a2d5ff;'>
<font color='red'>

<td><b><h6><center><font color='RED'>SLNO</font></center></h6></b></td>
<td><b><h6><center><font color='red'>USER </font></center></h6></b></td>
<td><b><h6><center><font color='red'>DATE</font></center></h6></b></td>
<td><b><h6><center><font color='red'>ORDER DETAILS</font></center></h6></b></td>
<td><b><h6><center><font color='red'>TOTAL (GST+ 5%)</font></center></h6></b></td>
</tr></font>";
echo "<h1><font color='blue'>ORDER DETAILS<h1></font>";

$i=0;
while($row = mysqli_fetch_array($result))
	{ $i++;
		$tt = $row['total'];
		$t = json_decode($row['2'], TRUE);
		$product="<table><tr><th>FOOD</th><th>Qty</th><th>PRICE</th><th>AMOUNT</th></tr>";
		foreach ($t['sess'] as $key => $value) {
			$product.="<tr>";
			$product.="<td>".strtoupper($key)."</td>";
			$product.="<td>".($value['quantity'])."</td>";
			$product.="<td>".($value['price'])."</td>";
			$product.="<td>".($value['price']*$value['quantity'])."</td>";
			$product.="</tr>";
		}
		$product.="</table>";
		echo "<tr>";
		echo "<td><FONT COLOR='black'>" . $i . "</td>";
		echo "<td><FONT COLOR='black'>" . ucwords($row['user']). "</td>";
		echo "<td><FONT COLOR='black'>" . $row['date'] . "</td>";
		echo "<td align='center'><FONT COLOR='black'>" . $product . "</td>";
		echo "<td><FONT COLOR='black'>" . $tt. "</td>";
		echo "</tr>";
	}
	echo "</table>";
	echo "</center>";
	mysqli_close($con);

	?>
	<link href="bootstrap.css" rel="stylesheet" id="bootstrap-css">