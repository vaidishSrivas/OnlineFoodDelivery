<?php
$name = $_POST['name'];
$address = $_POST['address'];
$phno = $_POST['phno'];
$city = $_POST['city'];
$state = $_POST['state'];
$email = $_POST['email'];
$pass = $_POST['pass'];
$cpass = $_POST['cpass'];

if($pass == $cpass) {
	$conn = new mysqli('localhost','root','','fooddelivery');
		if($conn->connect_error){
			echo "$conn->connect_error";
			die("Connection Failed : ". $conn->connect_error);
		} else {
			$stmt = $conn->prepare("insert into signup(name, address, phno, city, state, email, pass) values(?, ?, ?, ?, ?, ?, ?)");
			$stmt->bind_param("sssssss", $name, $address, $phno, $city, $state, $email, $pass);
			$execval = $stmt->execute();
			/*echo $execval;
			echo "Registration successfully...";*/
			header("Location: http://localhost/Food Delivery/atHome/home.html");
			$stmt->close();
			$conn->close();
		}
	}
else {
	echo "Confirm password should be same as password <br>";
	echo "Please go Back and try again";

}
?>