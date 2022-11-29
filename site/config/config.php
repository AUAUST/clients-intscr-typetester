<?php

return [
    'routes' => [
        [
            'pattern' => '(:all)',
            'action'  => function() {
                return site()->visit(site()->homePage());
            }
        ]
    ]
];