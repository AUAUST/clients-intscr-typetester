<?php

return [

  'debug' => env('KIRBY_MODE') === 'development' || env('KIRBY_DEBUG', false),

  'panel' => [
    'install' => env('KIRBY_PANEL_INSTALL', false),
    'slug' => env('KIRBY_PANEL_SLUG', 'panel')
  ],

  'hooks' => [
    'system.loadPlugins:after' => function () {
      kirby()->extend([
        'routes' => require __DIR__ . '/routes.php'
      ]);
    }
  ],

  'kirby-helpers' => [
    'vite' => [
      'server' => [
        'https' => false
      ]
    ]
  ],
  'cache' => [
    'pages' => [
      'active' => env('KIRBY_CACHE', false),
      'ignore' => fn (\Kirby\Cms\Page $page) => $page->kirby()->user() !== null
    ]
  ]
];
