<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>APADEMIDE'S TYPETESTER</title>
    <style>
      <?php foreach ($fonts as $font): ?>
      @font-face {
        font-family: <?= $font['id'] ?>;
        src: url(<?= $font['url'] ?>);
      }
      <?php endforeach ?>
      :root {
        font-size: 15px;
      }
      div, p {
        margin: 0;
        padding: 0;
      }
      header {
        border-bottom: 1px solid black;
        position: sticky;
        top: 7px;
      }
      .controls-container {
        margin-bottom: 7px;
      }
      .button {
        display: inline-block;
        background-color: lightgray;
        border-radius: 20px;
        padding: 1px 20px;
      }
      .text-container {
        padding: 7px 0;
        border-bottom: 1px black solid;
      }
      .overflow-scroll {
        white-space: nowrap;
        overflow-x: scroll;
      }
      .overflow-scroll * {
        display: inline-block;
      }
    </style>
  </head>
  <body style="font-family:<?= $fonts[array_key_first($fonts)]['id'] ?>;">
    <script type="application/json" id="data-fonts"><?php echo json_encode($fonts) ?></script>