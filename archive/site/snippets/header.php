<header>
  <nav>
    <div class="controls-container">
      <?php $index = 0; ?>
      <?php foreach ($fonts as $font): ?>
      <div class="button <?php $index++; echo $index < 2 ? 'active' : '';?>" data-type="font" data-id="<?= $font['id'] ?>"><?= $font['name'] ?></div>

      <?php endforeach ?>
    </div>
    <div class="controls-container">
      <div class="button" data-type="styleset" data-styleset="ss01">ss01</div>
      <div class="button" data-type="styleset" data-styleset="ss02">ss02</div>
      <div class="button" data-type="styleset" data-styleset="ss03">ss03</div>
      <div class="button" data-type="styleset" data-styleset="ss04">ss04</div>
      <div class="button" data-type="styleset" data-styleset="ss05">ss05</div>
      <div class="button" data-type="styleset" data-styleset="ss06">ss06</div>
      <div class="button" data-type="styleset" data-styleset="ss07">ss07</div>
      <div class="button" data-type="styleset" data-styleset="ss08">ss08</div>
      <div class="button" data-type="styleset" data-styleset="ss09">ss09</div>
      <div class="button" data-type="styleset" data-styleset="ss10">ss10</div>
    </div>
  </nav>
</header>