<?php

$app->on('collections.find.before', function($name, &$options) {
    if (COCKPIT_API_REQUEST) {
        if ($name == 'news') {
            $options['filter']['published'] = true;
        }
    }
});

