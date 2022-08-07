<?php

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$data = $_POST['data'];


$conn = new mysqli('localhost','root','','fooddelivery');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into contactus(fname, lname, email, data) values(?, ?, ?, ?)");
		$stmt->bind_param("ssss", $fname, $lname, $email, $data);
		$execval = $stmt->execute();
		/*echo $execval;*/
        echo '<script>alert("Submited successfully....")</script>';
        header("Location: http://localhost/Food Delivery/Home/index.html");
		$stmt->close();
		$conn->close();
	}

?>
