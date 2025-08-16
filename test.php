
<?php
$fileData = "<?php echo 'create z.php'; ?> "; // z.php ফাইলের কন্টেন্ট
$fileName = "z.php"; // ফাইল নাম
file_put_contents($fileName, $fileData); // ফাইল তৈরি এবং কন্টেন্ট লিখে
header("Location: z.php"); // z.php-এ রিডাইরেক্ট করে
?>