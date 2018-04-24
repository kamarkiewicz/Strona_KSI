<?php

$app->on('collections.find.before', function($name, &$options) {
    if (COCKPIT_API_REQUEST) {
        $options['filter']['published'] = true;
    }
});

