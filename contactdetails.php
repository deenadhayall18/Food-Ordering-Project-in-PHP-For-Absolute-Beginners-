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
$result = mysqli_query($con,"SELECT * FROM contact");
echo "<center>";

echo "<table border='5' style='width:37%'  class='table table-hover' bgcolor='lightgreen'>


<tr style='background-color: #a2d5ff;'>
<font color='red'>

<td><b><h6><center><font color='RED'>SLNO</font></center></h6></b></td>
<td><b><h6><center><font color='RED'>NAME</font></center></h6></b></td>
<td><b><h6><center><font color='red'>PEOPLE COUNT</font></center></h6></b></td>
<td><b><h6><center><font color='RED'>MESSAGE</font></center></h6></b></td>


</tr></font>";
echo "<h1><font color='blue'>CONTACT DETAILS<h1></font>";

$i=0;
while($row = mysqli_fetch_array($result))
	{$i++;
		echo "<tr>";
		echo "<td><font color='black'>" . $i. "</td>";
		echo "<td><font color='black'>" . ucwords($row['Name']). "</td>";
		echo "<td><font color='black'>" . $row['People'] . "</td>";
		echo "<td><font color='black'>" . $row['Message'] . "</td>";
		echo "</tr>";
	}
	echo "</table>";
	echo "</center>";
	mysqli_close($con);
	?>
	<link href="bootstrap.css" rel="stylesheet" id="bootstrap-css">
	<link href="style.css" rel="stylesheet">