<?php
/**
 * JSONP Server Side
 *
 * @author   Anton Shevchuk
 * @created  21.09.12 15:19
 */

header('content-type: application/json; charset=utf-8');

$callback = $_REQUEST['callback'] ?? 'alert';

if (!preg_match('/^[a-z0-9_-]+$/i', $callback)) {
    $callback = 'alert';
}

$data = array(
    array(
        'time' => '2012.09.21 13:11:15',
        'text' => 'Рассказать про JSONP'
    ),
    array(
        'time' => '2012.09.21 13:12:42',
        'text' => 'Рассказать зачем нужен JSONP'
    ),
    array(
        'time' => '2012.09.21 13:13:13',
        'text' => 'Каков же профит от использования JSONP?'
    ),
);

echo $callback.'('.json_encode($data).')';
