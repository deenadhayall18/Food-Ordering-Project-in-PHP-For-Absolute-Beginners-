<?php
include 'config.php';

if(!empty($_POST['submit']))
{
	$username=$_POST['username'];
	$password=$_POST['password'];
	$address=$_POST['address'];
	$email=$_POST['email'];
	$phno=$_POST['phno'];

	$fname=$_POST['firstname'];
	$lname=$_POST['lastname'];
	$dob=$_POST['dob'];
	
	// $conn=mysqli_connect("localhost","root","","bhavya");
	// if(!$conn)
	// {
	// 	die("connect failed:".mysqli_connect_error());
	// }

	$sql="INSERT INTO register (firstname,lastname,dob, username, password, address, email, Phno)
	VALUES('$fname','$lname','$dob','$username','$password','$address','$email', '$phno')";

	$res = mysqli_query($conn,$sql);
	
	// echo $res = $conn->query($sql);
	
	if($res)
	{
		$msgg = 'Registered Successfully ! Login to continue...';
	}
	else
	{
		$msgg =  "Error in inserting data".mysqli_error($conn);
	}
	mysqli_close($conn);
}
?>

<!DOCTYPE html>
<html>
<head>

	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script type="text/javascript" src="js/validate.js"></script>
	<script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui.min.js"></script>
	<script type="text/javascript" src="js/jquery.validate.min.js"></script>


	<style>
	body, html {
		height: 100%;
		font-family: Arial, Helvetica, sans-serif;
	}

	* {
		box-sizing: border-box;
	}

	label{float:left !important;
		padding-left: 24px}
		/* Add styles to the form container */
		.container {
			margin: 15px;
			max-width: 480px;
			padding: 16px;
			background-color: white;
		}

		/* Full-width input fields */
		input[type=text], input[type=password], input[type=date],input[type=email] {
			width: 92%;
			padding: 6px;
			margin: 5px 0 22px 0;
			border: none;
			background: #f1f1f1;
		}

		input[type=text]:focus, input[type=password]:focus {
			background-color: #ddd;
			outline: none;
		}

		/* Set a style for the submit button */
		input[type=submit] {
			background-color: #4CAF50;
			color: white;
			padding: 10px 20px;
			border: none;
			cursor: pointer;
			width: 43%;
			opacity: 0.9;
		}
		.error {color:red;font-weight:bold;font-size:12px;}
		.succmsg{color:green;font-weight:bold;font-size:20px;}
	</style>

</head>
<body style="background-size:10%;background:url('images/76.jpg')no-repeat fixed" >
	<center>
		<h2 style="color:#195411"><u><b>NEW REGISTERATION</b></u></h2>	
		
		<div class="succmsg"><?php echo (!empty($msgg)?$msgg:""); ?></div><BR>
		<span style="float:center;font-weight:bold"><a href="user.php">CLICK HERE TO LOGIN PAGE</a></span>
		<div class="bg-img">
			<form  method="post" name="frmreg" id="frmreg">
				<div class="container">
					<br>
					<label><b>FIRST NAME</b></label><br>
					<input type="text" placeholder="Enter firstname" name="firstname" id="firstname" class="keyAlphabetsOnly"><br>
					<label class="error"></label><br>

					<label><b>LAST NAME</b></label><br>
					<input type="text" placeholder="Enter lastname" name="lastname" id="lastname" class="keyAlphabetsOnly"><br>
					<label class="error"></label><br>

					<label><b>USERNAME</b></label><br>
					<input type="text" placeholder="Enter username" name="username" id="username" class="keyAlphabetsOnly"><br>
					<label class="error"></label><br>

					<label for="password"><b>PASSWORD</b></label><br>
					<input type="password" placeholder="Enter password" name="password" id="password" maxlength="8"><br>
					<label class="error"></label><br>

					<label><b>DATE OF BIRTH</b></label><br>
					<input type="date" placeholder="Enter Date of Birth" name="dob" id="dob" ><br>
					<label class="error"></label><br>


					<label for="address"><b>ADDRESS</b></label><br>
					<input type="text" placeholder="Enter address" name="address" id="address"><br>
					<label class="error"></label><br>


					<label for="email"><b>E-Mail</b></label><br>
					<input type="email" placeholder="Enter email" name="email" id="email"><br>
					<label class="error"></label><br>
					<label for="email"><b>Phone Number</b></label><br>
					<input type="text" class="keyNumbersOnly" placeholder="Enter Phone Number" name="phno" id="phno" maxlength="10"><br>
					<label class="error"></label><br><br>

					<input type="submit" name="submit" value="REGISTER">
					
				</div>
			</div>
		</form>
	</div>
</center>




<script type="text/javascript">
	$(function(){
		$('#frmreg').validate({
			rules:{
				firstname:{required:true,minlength:3,maxlength:10},
				lastname:{required:true,minlength:3,maxlength:10},
				username:{required:true,minlength:3,maxlength:10},
				password:{required:true,minlength:8,maxlength:8},
				address:{required:true},
				dob:{required:true},
				email:{required:true},
				phno:{required:true},
			},
			messages:{
				firstname:{required:'Enter First Name'},
				lastname:{required:'Enter Last Name'},
				username:{required:'Enter UserName'},
				password:{required:'Enter Password'},
				dob:{required:'Enter Date of Birth'},
				address:{required:'Enter Address'},
				email:{required:'Enter Email'},
				phno:{required:'Enter Phone Number'},
			}
		})
	});
</script>
</body>

</html>