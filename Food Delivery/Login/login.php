<?php
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$db = "fooddelivery";

$conn = new mysqli($dbhost, $dbuser, $dbpass, $db);

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM signup WHERE email = '$username' AND pass = '$password'";
 $result = mysqli_query($conn,$sql);
 $row = mysqli_fetch_array($result);
 if($row['email'] == $username && $row['pass'] == $password) {
    /*echo "Welcome ".$username."you are successfully Logged in!";*/
    header("Location: http://localhost/Food Delivery/atHome/home.html");
 }
 else {
    echo "<script>alert('Check your Credentials')</script>";
    echo "<script>location.replace('index.html')</script>";
 }
?>