<?php 
session_start(); 
if (!isset($_SESSION['username'])) {
	session_destroy();
	header('location: admin.php');
}
?>
<center>
	<a href="adminview.php" style="text-decoration: none;"><button type="button" class="btn btn-lg btn-block  btn-custom" style="width: 100px;">BACK</button></a>
</center>
<?php
$con=mysqli_connect("localhost","root","  ","bhavya");
if (mysqli_connect_errno())
{
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
$result = mysqli_query($con,"SELECT * FROM product");
echo "<center>";
echo "<table border='5' class='table table-hover' bgcolor='pink'>
<tr style='background-color: #a2d5ff;'>
<font color='red'>
<td><b><h4><center><font color='RED'>ID</font></center></h3></b></td>
<td><b><h4><center><font color='RED'>PRODUCTS NAME</font></center></h3></b></td>
<td><b><h4><center><font color='red'>PRICE</font></center></h3></b></td>
<td><b><h4><center><font color='red'>IMAGES</font></center></h3></b></td>
</tr></font>";
echo "<h1><font color='blue'>PRODUCTS DETAILS<h1></font>";


while($row = mysqli_fetch_array($result))
{
	echo "<tr>";
	echo "<td><FONT COLOR='black'>" . $row['id'] . "</td>";
	echo "<td><b><FONT COLOR='black'>" . ucwords($row['product_name']) . "</td></b>";
	echo "<td><FONT COLOR='black'>" . $row['price'] . "</td>";
	echo '<td>	<img alt="pro" src="images/'.$row['product_name'].'"  height="150" width="150"/></td>';
	echo "</tr>";
}
echo "</table>";
echo "</center>";
mysqli_close($con);
?>
<link href="bootstrap.css" rel="stylesheet" id="bootstrap-css">
<link href="style.css" rel="stylesheet">