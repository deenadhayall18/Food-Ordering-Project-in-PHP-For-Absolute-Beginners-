

<?php
include 'config.php';

$product_id =$_REQUEST['id'];

$result = mysql_query("SELECT * FROM product WHERE id  = '$product_id'");

$test = mysql_fetch_array($result);

if (!$result) 
{
	die("Error: Data not found..");
}
$id=$test['id'] ;

$product_name=$test['product_name'] ;
$price=$test['price'] ;
$images=$test['images'] ;
?>
<html>
<body background="91.jpg">
	<form action="orderdatabase.php" method="post" name="f1">
		<center>

			<font size="5"><blink><b></u>ORDER FORM</b></u></blink></font></center>
			<center>

				<input type="hidden" name="t11"  id="textname" size="30" style="font-size: 15pt;" value="<?php echo $id; ?>" required><br><br>


				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="hidden" name="t12"  size="30" style="font-size: 15pt;" value="<?php echo $product_name; ?>" required>


				<input type="hidden" name="t13"  size="30" style="font-size: 15pt;" value="<?php echo $price; ?>" required>

				NAME:
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="t14"  size="30" style="font-size: 15pt;" value="" required><br><br>

				MOBILE NO:
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="t15"  size="30" style="font-size: 15pt;" value="" required><br><br>

				ADDRESS:
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="t16"  size="30" style="font-size: 15pt;" value="" required><br><br>


				<input type="hidden" name="t17"  size="30" style="font-size: 15pt;" value="<?php echo $images; ?>" required>

				QTY:
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="t18"  size="30" style="font-size: 15pt;" value="" required><br><br>

				<center><tr>
					<td><input type="submit" name="insert" value="ORDER NOW"  onclick="return validate()">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<input type="submit" name="delete" value="CANCEL"></td></tr>
					</button>
				</div>
				</html>
			</body>
		</form>
	</body>
	</html>





