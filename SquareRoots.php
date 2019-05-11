<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<header>
	<ul>
        <li><a href="about.html">About</a></li>
		<li><a href="estimate.html">Estimate</a></li>
		<li><a href="SquareRoots.php">Square Roots</a></li>
    </ul>
</header>
<body>
<?php
//Andrew Nave 02/24/19
$SquareRoots = array(
     "1" => "1",
     "4" => "2",
     "9" => "3",
     "16" => "4",
     "25" => "5",
     "36" => "6",
	 "49" => "7",
     "64" => "8",
     "81" => "9",
	 "100" => "10",
     "121" => "11",
     "144" => "12"    
);
if (isset($_POST['submit'])) {
     $Answers = $_POST['answers'];
     if (is_array($Answers)) {
          foreach ($Answers as
               $Number => $Response) {
               $Response =
                    stripslashes($Response);
               if (strlen($Response)>0) {
                    if (strcasecmp(
                         $SquareRoots[$Number],
                         $Response)==0)
                         echo "<p>Correct! The
                              square root of $Number is " .
                              $SquareRoots[$Number] .
                              ".</p>\n";
                    else
                         echo "<p>Sorry, the square root
                              of $Number is not '" .
                              $Response . "'.</p>\n";
               }
               else
                    echo "<p>You did not enter a
                         value for the square root of
                         $Number.</p>\n";
          }
     }
     echo "<p><a href='SquareRoots.php'>
          Try again?</a></p>\n";
}
else {
     echo "<form action='SquareRoots.php'
          method='POST'>\n";
     foreach ($SquareRoots as
          $Number => $Response)
          echo "The square root of $Number is:
               <input type='text' name='answers[" .
               $Number . "]' /><br />\n";
          echo "<input type='submit'
               name='submit'
               value='Check Answers' /> ";
          echo "<input type='reset' name='reset'
               value='Reset Form' />\n";
          echo "</form>\n";
}
?>
</body>
</html>