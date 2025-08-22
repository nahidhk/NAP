<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'] ?? '';
    $fileName = $_POST['fileName'] ?? '';
    $fileIcon = $_POST['fileIcon'] ?? '';
    $loadData = `<div> <h1>$fileIcon <br> $title</h1> <p>Edit this /components/$fileName</p></div>`;
    file_put_contents($fileName, $loadData);

    // setting json path
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

    // Add new component data
    $data[] = [
        'btn_name' => $title,
        'componen' => $fileName,
        'btn_icon' => $fileIcon
    ];

    // Save updated JSON data
    file_put_contents($jsonPath, json_encode($data, JSON_PRETTY_PRINT));

    // Redirect or display a success message
    header("Location: dash?f=" . urlencode($fileName) . "&");
    exit;
}
?>
