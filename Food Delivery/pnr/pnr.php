<?php
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$db = "fooddelivery";

$conn = new mysqli($dbhost, $dbuser, $dbpass, $db);

$pnr = $_POST['pnr'];

$sql = "SELECT * FROM pnr WHERE pnrno = '$pnr'";
 $result = mysqli_query($conn,$sql);
 $row = mysqli_fetch_array($result);
 if($row['pnrno'] == $pnr) {

  header("Location: http://localhost/Food Delivery/inTrain/train.html");

 }
 else {
    echo "<script>alert('Check your Credentials')</script>";
    echo "<script>location.replace('index.html')</script>";
 }
?>