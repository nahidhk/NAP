<?php
$fileName = "z.php";
$fileData = "\n<?php echo 'another line'; ?>";

// ফাইলে নতুন ডাটা **শেষে যোগ হবে**
file_put_contents($fileName, $fileData, FILE_APPEND);

echo "ফাইলে ডাটা অ্যাড হয়েছে!";
?>





<?php
//file_put_contents($fileName, $fileData); 
//header("Location: z.php"); 

?>