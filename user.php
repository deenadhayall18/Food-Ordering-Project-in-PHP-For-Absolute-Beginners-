<?php 
if(isset($_POST['submit'])){ 
	$conn = mysqli_connect("localhost","root","  ","bhavya");
	$query = "SELECT * FROM register WHERE username='".$_POST['username']."' AND password='".$_POST['password']."'";
	$sql = mysqli_query($conn,$query); 
	$res = mysqli_num_rows($sql);
	if(!empty($res)){ 
		session_start();
		$_SESSION['auth'] = md5(microtime());
		$_SESSION['username'] = $_POST['username'];
		header("Location:foodorder.php");
	} else {
		$alertmsg = 'Invalid Login Credentials';
	}
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
		.error1 {color:red;font-weight:bold;font-size:19px;}
		.succmsg{color:green;font-weight:bold;font-size:20px;}
	</style>

</head>
<body style="background-size:cover !important;background:url('83.jpg')fixed" >
	<center>
		<h2 style="color:#000"><u><b>USER LOGIN PAGE</b></u></h2>	
		
		<div class="succmsg"><?php echo (!empty($msgg)?$msgg:""); ?></div><BR>
		<span style="float:center;font-weight:bold"><a href="register.php">CLICK HERE TO REGISTER</a></span>
		<div class="bg-img">
			<form  method="post" name="frmlogin" id="frmlogin">
				<div class="container">
					<span class="error1">	<?php echo (!empty($alertmsg)?$alertmsg:""); ?></span><br>
					<br>
					<label><b>USERNAME</b></label><br>
					<input type="text" placeholder="Enter username" name="username" id="username" class="keyAlphabetsOnly"><br>
					<label class="error"></label><br>
					<label for="password"><b>PASSWORD</b></label><br>
					<input type="password" placeholder="Enter password" name="password" id="password" maxlength="8"><br>
					<label class="error"></label><br>
					<input type="submit" name="submit" value="REGISTER">
				</div>
			</div>
		</form>
	</div>
</center>




<script type="text/javascript">
	$(function(){
		$('#frmlogin').validate({
			rules:{
				username:{required:true,minlength:3,maxlength:10},
				password:{required:true,minlength:8,maxlength:8},
			},
			messages:{
				username:{required:'Enter UserName'},
				password:{required:'Enter Password'},
			}
		})
	});
</script>
</body>

</html>