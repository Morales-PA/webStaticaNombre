<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multilingual Greetings</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <img src="images/wikipedia.png" alt="Wikipedia">
        <div class="credits" id="credits">Juan MORALES</div>
        <br>

    <?php
        // Database connection parameters
        $host = 'localhost';     // or your server IP
        $dbname = 'greetingsDB';  // Replace with your actual database name
        $username = 'usuario';     // Replace with your MySQL username
        $password = 'safePassword';     // Replace with your MySQL password

        try {
            // Create a PDO instance
            $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // Query to select a random greeting
            $stmt = $pdo->query("SELECT * FROM greetings ORDER BY RAND() LIMIT 1");
            $greeting = $stmt->fetch(PDO::FETCH_ASSOC);

            // Check if the greeting exists
            if ($greeting) {
                $language = $greeting['language'];
                $message = $greeting['message'];
                echo "<div id='greeting' class='greeting'>$message (in $language)</div>";
            } else {
                echo "<div id='greeting' class='greeting'>No greetings found!</div>";
            }

        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    ?>

        <form action="" method="post">
            <input type="text" name="textWrittenByUser" id="textWrittenByUser">
            <input type="submit" id="changeGreeting" class="change-btn">
        </form>
        
    </div>

    <script src="js/script.js"></script>

</body>
</html>
