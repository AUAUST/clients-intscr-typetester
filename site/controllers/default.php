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

  $texts = [];
  $index = 0;
  foreach ($site->texts()->toStructure() as $text) {
    $texts[$index] = [
      'text' => $text->text()->kt(),
      'id' => $index,
      'size' => $text->size()->toFloat(),
      'color' => $text->color()->hex()->toString(),
      'overflow' => $text->overflow()->toString(),
    ];
    $index++;
  }

  return [
    'fonts' => $fonts,
    'texts' => $texts
  ];
};