<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'] ?? '';
    $fileName = $_POST['fileName'] ?? '';
    $fileIcon = $_POST['fileIcon'] ?? '';

    // Correct HTML string creation
    $loadData = "<div style='padding: 10px; border: 1px solid #ccc; border-radius: 5px;'><h1> <i class='$fileIcon'></i> <br> $title</h1><p>Edit this /components/$fileName</p></div>";

    // Save component file
    file_put_contents(__DIR__ . "/components/$fileName", $loadData);

    // JSON path
    $jsonPath = __DIR__ . "/components/call/call.json";
    if (file_exists($jsonPath)) {
        $jsonData = file_get_contents($jsonPath);
        $data = json_decode($jsonData, true);
        if (!is_array($data)) {
            $data = [];
        }
    } else {
        $data = [];
    }

    // Add new component
    $data[] = [
        'btn_name' => $title,
        'componen' => $fileName,
        'btn_icon' => $fileIcon
    ];

    // Save JSON
    file_put_contents($jsonPath, json_encode($data, JSON_PRETTY_PRINT));

    // Redirect
    header("Location: dash?f=" . urlencode($fileName) . "&");
    exit;
}
?>
