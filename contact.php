<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact Me</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/main.css" />
    <script src="js/bootstrap.bundle.js"></script>
    <script src="js/bootstrap.js"></script>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/bootstrap-grid.css">
    <link rel="stylesheet" href="css/bootstrap-reboot.css">
    <style>
        html, body {
            padding:0; 
            margin:0;
        }
    </style>
</head>
<body class = "bg-transparent text-light">
<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
        <div class = "row">
            <div class = "col text-center pt-2 pb-2">
                <h3>Contact Me</h3>
            </div>
        </div>
        <div class = "row">
            <div class = "col input-group">
                <input class = "form-control" name="name" placeholder="Name">
            </div>
            <div class = "col input-group">
                <textarea  class = "form-control" name="message" placeholder="Message"></textarea>
            </div>
        </div>
        <div class = "row">
            <br>
            <div class = "col input-group">
                <input  class = "form-control" name="email" type="email" placeholder="Email">
            </div>
            <div class ="col">
            </div>
        </div>
        <div class = "row pt-4">
            <div class = "col input-group">
                <input  class = "form-control" name = "city_state" type = "text" placeholder = "City, State">
            </div>
            <div class ="col input-group">
                <input  class = "form-control" name="human" placeholder="What is 2+2? (Anti-spam)">
            </div>
        </div>
        <div class = "row text-center pb-2 pt-2">
            <div class = "col">
                <input class = "btn btn-primary" id="submit" name="submit" type="submit" value="Submit">
            </div>
        </div>
    </form>
<?php   
 // ** Form validation code **
 // We will use the $_POST "super global" associative array to extract the values of the form fields
// #1 - was the submit button pressed?
if (isset($_POST["submit"])){ 
    $to = "tlp6760@rit.edu"; // !!! REPLACE WITH YOUR EMAIL !!!
    
    // #2 - if a value for the `email` form field is missing, give a default value
    // else, use the value from the form field
        $from = empty(trim($_POST["email"])) ? "noemail@sample.com" : sanitize_string($_POST["email"]);
        
        $subject = "Web Form";
        
        // #3 - same as above, except with the `message` form field
        $message = empty(trim($_POST["message"])) ?  "No message" : sanitize_string($_POST["message"]);
        
        // #4 - same as above, except with the `name` form field
        $name = empty(trim($_POST["name"])) ? "No name" : sanitize_string($_POST["name"]);
        
        $city_state = empty(trim($_POST["city_state"])) ? "No city, state" : sanitize_string($_POST["city_state"]);
    
        // #5 - same as above, except with the `human` form field
        $human = empty(trim($_POST["human"])) ? "0" : sanitize_string($_POST["human"]);
        
        $headers = "From: $from" . "\r\n";
        
        // #6 - add the user's name to the end of the message
        $message .= "\n\n - $name";
    
        $message .= "\n\n - $city_state";
        
        // #7 - if they know what 2+2 is, send the message
        if (intval($human) == 4){
        
            // #8 - mail returns false if the mail can't be sent
            $sent = mail($to,$subject,$message,$headers);
            if ($sent){
                echo "<p><b>You sent:</b> $message</p>";
            }else{
                echo "<p>Mail not sent!</p>";
            }
        }else{
            echo "<p>You are either a 'bot, or bad at arithmetic!</p>";
        }

}

// #9 - this handy helper function is very necessary whenever
// we are going to put user input onto a web page or a database
// For example, if the user entered a <script> tag, and we added that <script> tag to our HTML page
// they could perform an XSS attack (Cross-site scripting)
function sanitize_string($string){
$string = trim($string);
$string = strip_tags($string);
return $string;
}
?>
</body>
</html>
