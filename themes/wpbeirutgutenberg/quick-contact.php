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
    !isset($_POST['quick-name']) ||
	!isset($_POST['quick-phone']) ||
	!isset($_POST['quick-email']) ||
	!isset($_POST['quick-message']) ||
    empty($_POST['quick-name']) ||
    empty($_POST['quick-phone']) ||
	empty($_POST['quick-email']) ||
	empty($_POST['quick-message'])
) {
	$json_arr = array( "type" => "error", "msg" => $fillMsg );
	echo json_encode( $json_arr );
} else {

    ?>
    <?php
	$msg = "Name: ".$_POST['quick-name']."\r\n";
	$msg .= "Phone: ".$_POST['quick-phone']."\r\n";
	$msg .= "Email: ".$_POST['quick-email']."\r\n";
	$msg .= "Message: ".$_POST['quick-message']."\r\n";
	
    $success = @mail($mailTo, $_POST['quick-email'], $msg, 'From: ' . $_POST['quick-name'] . '<' . $_POST['quick-email'] . '>');
	
    if ($success) {
		$json_arr = array( "type" => "success", "msg" => $successMsg );
		echo json_encode( $json_arr );
    } else {
		$json_arr = array( "type" => "error", "msg" => $errorMsg );
		echo json_encode( $json_arr );
    }
}