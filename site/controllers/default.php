<?php

return function ($site) {

  $fonts = [];
  foreach ($site->fonts()->toStructure() as $font) {
    $id = Str::camel(Str::ascii($font->name()));
    $fonts[$id] = [
      'name' => $font->name()->toString(),
      'id' => $id,
      'url' => $font->file()->toFile()->url(),
      'stylesets' => $font->stylesets()->split(),
    ];
  }

  return [
    'fonts' => $fonts,
  ];
};