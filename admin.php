<?php
session_start();
$username = "";
$errors = array(); 
$db = mysqli_connect('localhost', 'root', '  ', 'bhavya');

if (isset($_POST['login_user'])) {
	$username = mysqli_real_escape_string($db, $_POST['username']);
	$password = mysqli_real_escape_string($db, $_POST['password']);

	if (empty($username)) {
		array_push($errors, "Username is required");
	}
	if (empty($password)) {
		array_push($errors, "Password is required");
	}
	$query = "SELECT * FROM admin WHERE username='$username' AND password='$password'";
	$results = mysqli_query($db, $query);
	if (mysqli_num_rows($results) == 1) {
		$_SESSION['username'] = $username;
		$_SESSION['success'] = "You are now logged in";
		header('location: adminview.php');
	} else {
		array_push($errors, "Wrong username/password combination");
	}
}
?>
<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<style>
	body, html {
		background-image: url("images/food.jpg");
		height: 100%;
		width:100%;
		font-family: Arial, Helvetica, sans-serif;
		overflow: hidden;
	}
	.error {
		width: 92%; 
		margin: 0px auto; 
		padding: 10px; 
		border: 1px solid #a94442; 
		color: #a94442; 
		background: #f2dede; 
		border-radius: 5px; 
		text-align: left;
	}


	* {
		box-sizing: border-box;
	}

	.bg-img {
		/* The image used */
		background-image:"82.jpg";
		

		min-height: 380px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	/* Add styles to the form container */
	.container {
		position: absolute;
		center: 0;
		margin-left: 35%;
		margin-top: 100px;
		max-width: 500px;
		padding: 16px;
		background-color: white;
		border-radius: 20px;
		border-style: outset;
	}

	/* Full-width input fields */
	input[type=text], input[type=password] {
		width: 100%;
		padding: 15px;
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
		padding: 16px 20px;
		border: none;
		cursor: pointer;
		width: 48%;
		opacity: 0.9;
	}
</style>
</head>
<body>
	<div class="container">
		<form method="post" action="admin.php">
			<h3 align="center"><b>Admin Login Form</b></h3>

			<label for="username"><b>USERNAME</b></label>
			<input type="text" placeholder="Enter username" name="username">

			<label for="password"><b>PASSWORD</b></label>
			<input type="password" placeholder="Enter password" name="password">
			<?php  if (count($errors) > 0) : ?>
				<div class="error">
					<?php foreach ($errors as $error) : ?>
						<p><?php echo $error ?></p>
					<?php endforeach ?>
				</div>
			<?php  endif ?>
			<br>
			<div>
				<input type="submit" name="login_user" value="Login">
			</div>
		</form>

	</div>
</body>
</html>
