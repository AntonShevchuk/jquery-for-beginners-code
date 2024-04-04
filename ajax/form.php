<?php
/**
 * Simple Form Server Side
 *
 * @author   Anton Shevchuk
 * @created  04.04.24 14:44
 */

header("content-type: application/json; charset=utf-8");

print json_encode($_POST);
