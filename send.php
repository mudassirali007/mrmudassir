<?php
$servername = "localhost";
$username = "root";
$password = '101';
$dbname = "mrmudassir";

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

// var_dump($name, $email, $message);
// exit();
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO contact (name, email, message)
VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>