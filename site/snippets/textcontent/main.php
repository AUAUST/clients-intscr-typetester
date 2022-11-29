<main>

  <?php foreach ($texts as $text): ?>

  <div class="text-container" data-id="<?= $text['id'] ?>" style="color: <?= $text['color'] ?>; font-size: <?= $text['size'] ?>rem; line-height: 1em;">
  
    <div contenteditable="true" spellcheck="false" class="overflow-<?= $text['overflow'] ?: 'wrap' ?>">
      <?= $text['text'] ?>
    </div>

  </div>

  <?php endforeach ?>

</main>