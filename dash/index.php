<!DOCTYPE html>
<html lang="en">
<head>

    <link rel="stylesheet" href="assets/css/style.css">
    <meta charset="UTF-8">
    <title>Network Admin Panel</title>
</head>
<body>
    <!-- components -->
    <?php include '../components/nav.php'; ?>

<!-- side menu php -->
 <div class="flex">
    <div>
        <?php include '../components/sideMenu.php' ?>
    </div>
    <div class="zra w100">
        <br><br><br>
        <?php $urlx= $_GET['f'];?>
        <?php include '../components/'.$urlx ?>
    </div>
 </div>


    <!-- script -->
    <script src="assets/js/login.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/js/all.min.js"
        integrity="sha512-b+nQTCdtTBIRIbraqNEwsjB6UvL3UEMkXnhzd8awtCYh0Kcsjl9uEgwVFVbhoj3uu1DO1ZMacNvLoyJJiNfcvg=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</body>
</html>