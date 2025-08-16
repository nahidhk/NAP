<?php
$ip = $_SERVER['REMOTE_ADDR']; 
$hostname = gethostbyaddr($ip);
$datetime = date("l, d F Y H:i:s");
$user_agent = $_SERVER['HTTP_USER_AGENT'];

$jsonPath = __DIR__ . "/../config.nap";
if (file_exists($jsonPath)) {
    $jsonData = file_get_contents($jsonPath);
    $data = json_decode($jsonData, true);
    if (!is_array($data)) {
        $data = [];
    }
} else {
    $data = [];
}
?>

<blockquote>
    <div class="tcenter">
        <h2>
            HOST: <?php echo htmlspecialchars($hostname) ?><br>
            IP: <?php echo htmlspecialchars($ip) ?><br>
        </h2>
        <hr>
    </div>
    <div class="flex center">
        <table class="blueTable">
            <tbody>
                <tr>
                    <td class="w300">Server Time</td>
                    <td><?php echo htmlspecialchars($datetime) ?></td>
                </tr>
                <tr>
                    <td class="w300">Server IP</td>
                    <td><?php echo htmlspecialchars($ip) ?></td>
                </tr>
                <tr>
                    <td class="w300">Server Hostname</td>
                    <td><?php echo htmlspecialchars($hostname) ?></td>
                </tr>
                <tr>
                    <td class="w300">Agent</td>
                    <td><?php echo htmlspecialchars($user_agent) ?></td>
                </tr>

                <?php foreach ($data as $key => $value): ?>
                <tr>
                    <td class="w300"><?php echo htmlspecialchars(ucwords(str_replace("_", " ", $key))) ?></td>
                    <td><?php echo is_array($value) ? htmlspecialchars(json_encode($value)) : htmlspecialchars($value) ?>
                    </td>
                </tr>
                <?php endforeach; ?>
                <tr>
                    <td class="w300">Network</td>
                    <td><?php echo "Web Server" ?></td>
                </tr>

            </tbody>
        </table>
    </div>
    <hr>
    <h2>Install Components</h2>
    <hr>
    <div class="popup w300">
        <form action="" method="post">
            <div class="inputbox">
                <div>
                    <i class="fa-solid fa-wand-magic-sparkles iicon"></i>
                </div>
                <input type="text" class="inputfld" name="title" placeholder="Input Title">
            </div>

            <div class="inputbox">
                <div>
                    <i class="fa-solid fa-file iicon"></i>
                </div>
                <input type="text" class="inputfld" name="fileName" placeholder="Input File Name => components.php">
            </div>

            <div class="inputbox">
                <div>
                    <i class="fa-solid fa-icons iicon"></i>
                </div>
                <input type="text" class="inputfld" name="fileName" placeholder="<i class='fa-ex fa-ex'></i>">
            </div>
            <div class="inputbox">
                <button  type="submit" class="fullbtn">Create</button>
            </div>





        </form>
    </div>
</blockquote>