<?php
/**
 * EDIT THE VALUES BELOW THIS LINE TO ADJUST THE CONFIGURATION
 * EACH OPTION HAS A COMMENT ABOVE IT WITH A DESCRIPTION
 */
/**
 * Specify the email address to which all mail messages are sent.
 * The script will try to use PHP's mail() function,
 * so if it is not properly configured it will fail silently (no error).
 */
$mailTo     = 'YOUR EMAIL ID HERE';

/**
 * Set the message that will be shown on success
 */
$successMsg = 'Thank you, mail sent successfuly!';

/**
 * Set the message that will be shown if not all fields are filled
 */
$fillMsg    = 'Please fill all fields!';

/**
 * Set the message that will be shown on error
 */
$errorMsg   = 'Hm.. seems there is a problem, sorry!';

/**
 * DO NOT EDIT ANYTHING BELOW THIS LINE, UNLESS YOU'RE SURE WHAT YOU'RE DOING
 */

?>
<?php
if(
    !isset($_POST['contact-name']) ||
    !isset($_POST['contact-email']) ||
	!isset($_POST['contact-phone']) ||
	!isset($_POST['contact-street']) ||
	!isset($_POST['contact-category']) ||
    !isset($_POST['contact-city']) ||
	!isset($_POST['contact-state']) ||
	!isset($_POST['contact-zipcode']) ||
	!isset($_POST['contact-message']) ||
    empty($_POST['contact-name']) ||
    empty($_POST['contact-email']) ||
	empty($_POST['contact-phone']) ||
	empty($_POST['contact-street']) ||
	empty($_POST['contact-category']) ||
    empty($_POST['contact-city']) ||
	empty($_POST['contact-state']) ||
	empty($_POST['contact-zipcode']) ||
	empty($_POST['contact-message'])
) {
	$json_arr = array( "type" => "error", "msg" => $fillMsg );
	echo json_encode( $json_arr );
} else {

    ?>
    <?php
	$msg = "Name: ".$_POST['contact-name']."\r\n";
	$msg .= "Email: ".$_POST['contact-email']."\r\n";
	$msg .= "Phone: ".$_POST['contact-phone']."\r\n";
	$msg .= "Street: ".$_POST['contact-street']."\r\n";
	$msg .= "Category: ".$_POST['contact-category']."\r\n";
	$msg .= "City: ".$_POST['contact-city']."\r\n";
	$msg .= "State: ".$_POST['contact-state']."\r\n";
	$msg .= "zip code: ".$_POST['contact-zipcode']."\r\n";
	$msg .= "Message: ".$_POST['contact-message']."\r\n";
	
    $success = @mail($mailTo, $_POST['contact-email'], $msg, 'From: ' . $_POST['contact-name'] . '<' . $_POST['contact-email'] . '>');
    if ($success) {
		$json_arr = array( "type" => "success", "msg" => $successMsg );
		echo json_encode( $json_arr );
    } else {
		$json_arr = array( "type" => "error", "msg" => $errorMsg );
		echo json_encode( $json_arr );
    }
}