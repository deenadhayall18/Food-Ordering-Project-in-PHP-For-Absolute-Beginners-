<?php 
include ('config.php');


if(!empty($_POST['submit'])){
	
	(!empty($_POST['Name'])?$name = ($_POST['Name']):" ");
	(!empty($_POST['People'])?$people_count = ($_POST['People']):" ");
	(!empty($_POST['date'])?$datetime = ($_POST['date']):" ");
	(!empty($_POST['Message'])?$msg = ($_POST['Message']):" ");

	$query = "INSERT INTO contact (Name,People,date,Message) VALUES('".$name."','".$people_count."','".$datetime."','".$msg."')";

	$succ = $conn->query($query);
	if(!empty($succ)){
		$succmsg = 'Sent Successfully';
	}else{
		$succmsg = "Not Sent ! Due to some Technical issues";
	}


}


?>

<!DOCTYPE html>
<html>
<title>online food ordering</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic+SC">

<script type="text/javascript" src="js/validate.js"></script>
<script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="js/jquery-ui.min.js"></script>
<script type="text/javascript" src="js/jquery.validate.min.js"></script>
<script type="text/javascript" src="js/jqval-additional-methods.min.js"></script>

<style>
.error{color:red;font-weight:bold}
.succ{color:yellow;font-size:23px;font-weight: bold;text-align:center;}

body, html {height: 100%}
body,h1,h2,h3,h4,h5,h6 {font-family: "Amatic SC", sans-serif}
.menu {display: none}
.bgimg {
	background-repeat: no-repeat;
	background-size: cover;
	background-image: url("images/80.jpg");
	min-height: 90%;
}

</style>
<body>

	<!-- Navbar (sit on top) -->
	<div class="w3-top w3-hide-small">
		<div class="w3-bar w3-xlarge w3-black w3-opacity w3-hover-opacity-off" id="myNavbar">
			<a href="#" class="w3-bar-item w3-button">HOME</a>
			<a href="#menu" class="w3-bar-item w3-button">MENU</a>
			<a href="#about" class="w3-bar-item w3-button">ABOUT</a>
			<a href="#googleMap" class="w3-bar-item w3-button">CONTACT</a>
			<a href="gallery.php" class="w3-bar-item w3-button">gallery</a>
			<div class="w3-dropdown-click">
				<button onclick="myFunction()" class="w3-button w3-black">login!</button>
				<div id="Demo" class="w3-dropdown-content w3-bar-block w3-border">
					<a href="register.php" class="w3-bar-item w3-button">register</a>
					<a href="user.php" class="w3-bar-item w3-button">user</a>
					<a href="admin.php" class="w3-bar-item w3-button">admin</a>
				</div>
			</div>
		</div>

	</div>


	<!-- Header with image -->
	<header class="bgimg w3-display-container w3-grayscale-min" id="home">
		<div class="w3-display-bottomleft w3-padding">
			<span class="w3-tag w3-xlarge">Open from 10am to 12pm</span>
		</div>
		<div class="w3-display-middle w3-center">
			<span class="w3-text-white w3-hide-small" style="font-size:100px"><br>food ordering</span>
			<span class="w3-text-white w3-hide-large w3-hide-medium" style="font-size:60px"><b>thin<br>CRUST PIZZA</b></span>
			<p><a href="#menu" class="w3-button w3-xxlarge w3-black">Let me see the menu</a></p>
		</div>
	</header>

	<!-- Menu Container -->
	<div class="w3-container w3-black w3-padding-64 w3-xxlarge" id="menu">
		<div class="w3-content">

			<h1 class="w3-center w3-jumbo" style="margin-bottom:64px">THE MENU</h1>
			<div class="w3-row w3-center w3-border w3-border-dark-grey">
				<a href="javascript:void(0)" onclick="openMenu(event, 'tiffen');" id="myLink">
					<div class="w3-col s4 tablink w3-padding-large w3-hover-red">tiffen</div>
				</a>
				<a href="javascript:void(0)" onclick="openMenu(event, 'Pasta');">
					<div class="w3-col s4 tablink w3-padding-large w3-hover-red">lunch</div>
				</a>
				<a href="javascript:void(0)" onclick="openMenu(event, 'Starter');">
					<div class="w3-col s4 tablink w3-padding-large w3-hover-red">dinner</div>
				</a>
			</div>

			<div id="tiffen" class="w3-container menu w3-padding-32 w3-white">
				<h1><b>idly</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$12.00</span></h1>
				<p class="w3-text-grey">Fresh idly</p>

				<hr>

				<h1><b>dhosa</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$20.00</span></h1>
				<p class="w3-text-grey">ghee rost</p>
				<hr>

				<h1><b>pongal</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$17.00</span></h1>
				<p class="w3-text-grey">sleep well</p>
				<hr>

				<h1><b>puri</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$25.00</span></h1>
				<p class="w3-text-grey">favorite dish for kids</p>
				<hr>

				<h1><b>upuma</b> <span class="w3-tag w3-red w3-round"></span><span class="w3-right w3-tag w3-dark-grey w3-round">$20.00</span></h1>
				<p class="w3-text-grey">good for sugar patients</p>
				<hr>


			</div>

			<div id="Pasta" class="w3-container menu w3-padding-32 w3-white">
				<h1><b>meals</b> <span class="w3-tag w3-grey w3-round"></span> <span class="w3-right w3-tag w3-dark-grey w3-round">$40.00</span></h1>
				<p class="w3-text-grey">bulk of foods</p>
				<hr>

				<h1><b>biriyani</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$100.50</span></h1>
				<p class="w3-text-grey">yummy</p>
				<hr>

				<h1><b>chicken rice</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$60.00</span></h1>
				<p class="w3-text-grey">tasty</p>
				<hr>

				<h1><b>veg rice</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$40.00</span></h1>
				<p class="w3-text-grey">full of vegetables</p>
			</div>


			<div id="Starter" class="w3-container menu w3-padding-32 w3-white">
				<h1><b>chapathi</b> <span class="w3-tag w3-grey w3-round"></span><span class="w3-right w3-tag w3-dark-grey w3-round">$25.50</span></h1>
				<p class="w3-text-grey">keeps body fit</p>
				<hr>

				<h1><b>rava dhosa</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$30.50</span></h1>
				<p class="w3-text-grey">healthy food </p>
				<hr>

				<h1><b>fried rice</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$70.50</span></h1>
				<p class="w3-text-grey">favorite dish</p>
				<hr>

				<h1><b>maggi</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$45.50</span></h1>
				<p class="w3-text-grey">favorite and tasty dish</p>
			</div><br>

		</div>
	</div>

	<!-- About Container -->
	<div class="w3-container w3-padding-64 w3-red w3-grayscale w3-xlarge" id="about">
		<div class="w3-content">
			<h1 class="w3-center w3-jumbo" style="margin-bottom:64px">About</h1>
			<p>online food ordering is a process of food delivery or taken out from a local restaurant or food cooperative through a web page or app.much like ordering consumer goods online,many of these allow customers to keep accounts with them in order to make frequent ordering convenient.</p>
			<p><strong>The Chef?</strong> Mr. kumar<img src="images/chef.jpg" style="width:150px" class="w3-circle w3-right" alt="Chef"></p>
			<p>We are proud of our interiors.</p>
			<img src="images/res.jpg" style="width:100%" class="w3-margin-top w3-margin-bottom" alt="Restaurant">
			<h1><b>Opening Hours</b></h1>

			<div class="w3-row">
				<div class="w3-col s6">
					<p>Monday CLOSED
					</p>
					<p>Tuesday 7.00AM - 10.00PM</p>
					<p>Wednesday 8.00AM - 11.00PM</p>
					<p>Thursday 7:00AM - 12:00AM</p>
				</div>
				<div class="w3-col s6">
					<p>Friday 7:00AM - 10:00PM</p>
					<p>Saturday 9:00AM - 12:00AM</p>
					<p>Sunday Closed</p>
				</div>
			</div>

		</div>
	</div>

	<!-- Contact (with google maps) -->
	<div id="googleMap" class="w3-grayscale-max" style="width:100%;height:400px;"></div>

	<div class="w3-container w3-padding-64 w3-blue-grey w3-grayscale-min w3-xlarge">
		<div class="succ" style="text-align:center"><?php echo (!empty($succmsg)?$succmsg:" "); ?></div>

		<div class="w3-content">
			<h1 class="w3-center w3-jumbo" style="margin-bottom:64px">Contact</h1>
			<p>Find us at some address at some place or call us at 05050515-122330</p>
			<p><span class="w3-tag">FYI!</span> We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.</p>
			<p class="w3-xxlarge"><strong>Reserve</strong> a table, ask for today's special or just send us a message:</p>


			<form method="post" name="frmcontact" id="frmcontact">
				<p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Name"  name="Name" id="Name"></p>
				<p><input class="w3-input w3-padding-16 w3-border" type="number" placeholder="How many people"  name="People" id="People"></p>
				<p><input class="w3-input w3-padding-16 w3-border" type="datetime-local" placeholder="Date and time"  name="date" id="date" ></p>
				<p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Message \ Special requirements"  name="Message" id="Message"></p>
				<p>
					<input type="submit" name="submit" id="submit" class="w3-button w3-green w3-block" value="Send Message">
				</p>
			</form>
		</div>
	</div>
</div>



<!-- Footer -->
<footer class="w3-center w3-black w3-padding-48 w3-xxlarge">
	<p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">w3.css</a></p>
</footer>


<!-- Add Google Maps -->
<script>
	function myMap()
	{
		myCenter=new google.maps.LatLng(41.878114, -87.629798);
		var mapOptions= {
			center:myCenter,
			zoom:12, scrollwheel: false, draggable: false,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		};
		var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

		var marker = new google.maps.Marker({
			position: myCenter,
		});
		marker.setMap(map);
	}

// Tabbed Menu
function openMenu(evt, menuName) {
	var i, x, tablinks;
	x = document.getElementsByClassName("menu");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
	}
	document.getElementById(menuName).style.display = "block";
	evt.currentTarget.firstElementChild.className += " w3-red";
}
document.getElementById("myLink").click();
function myFunction() {
	var x = document.getElementById("Demo");
	if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
	} else { 
		x.className = x.className.replace(" w3-show", "");
	}
}




$(function(){
	$('#frmcontact').validate({
		rules:{
			Name:{required:true,minlength:3,maxlength:32},
			People:{required:true},
			date:{required:true},
			Message:{required:true,minlength:10,maxlength:100}
		},
		messages:{
			Name:{required:'Enter your  Name'},
			People:{required:'Enter People\'s Count '},
			date:{required:'Enter Date'},
			Message:{required:'Enter Your Message',minlength:10,maxlength:100}
		}
	})
});


</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU&callback=myMap"></script>
<!--
To use this code on your website, get a free API key from Google.
Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp
-->

</body>
</html>