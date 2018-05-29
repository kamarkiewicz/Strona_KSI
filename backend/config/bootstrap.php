<?php

$app->on('collections.find.before', function($name, &$options) {
    if (COCKPIT_API_REQUEST) {
        $has_published_field = array('news', 'history', 'galleries');
        if (in_array($name, $has_published_field)) {
            $options['filter']['published'] = true;
        }
    }
});

