<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?= $site->title() ?></title>

  <?php $meta = $page->meta(); ?>
  <?= $meta->robots() ?>
  <?= $meta->jsonld() ?>
  <?= $meta->social() ?>

  <link rel="icon" href="/img/favicon.svg" type="image/svg+xml">

  <?= vite()->js("main.ts") ?>
  <?= vite()->css("main.ts") ?>

  <style>
    @font-face {
      font-family: "Arzier";
      src: url(<?= $site
                  ->defaultUIFont()
                  ->toFile()
                  ->url() ?>);
    }
  </style>
  <script>
    function dragOverHandler(ev) {
      console.log('File(s) in drop zone');

      ev.preventDefault();
    }
  </script>
</head>

<body ondragover="dragOverHandler(event);">
  <div id="app"></div>
  <script id="data-site" type="application/json">
    <?= \Kirby\Data\Json::encode($data) ?>
  </script>
</body>

</html>