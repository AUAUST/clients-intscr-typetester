<template>
  <!-- fonts: {{ fonts }}<br /> -->
  current:<br />
  ascender: {{ fonts.currentFont.value?.ascender }} <br />
  <!-- charToGlyph a: {{ fonts.currentFont.value?.charToGlyph("a") }} <br /> -->
  descender: {{ fonts.currentFont.value?.descender }} <br />
  encoding: {{ fonts.currentFont.value?.encoding }} <br />
  glyph 1: {{ fonts.currentFont.value?.glyphs.get(1) }} <br />
  glyph 2: {{ fonts.currentFont.value?.glyphs.get(2) }} <br />
  glyph 3: {{ fonts.currentFont.value?.glyphs.get(3) }} <br />
  has char a: {{ fonts.currentFont.value?.hasChar("a") }} <br />
  has char Æ: {{ fonts.currentFont.value?.hasChar("Æ") }} <br />
  has char •: {{ fonts.currentFont.value?.hasChar("•") }} <br />
  has char 1: {{ fonts.currentFont.value?.hasChar("1") }} <br />
  has char 2: {{ fonts.currentFont.value?.hasChar("2") }} <br />
  has char ¶: {{ fonts.currentFont.value?.hasChar("¶") }} <br />
  has char ½: {{ fonts.currentFont.value?.hasChar("½") }} <br />
  names: {{ fonts.currentFont.value?.names }} <br />
  <br />
  height: {{ viewport.size.height }}<br />
  width: {{ viewport.size.width }}<br />
  content width: {{ views.fullWidth }}<br />
  clicking: {{ viewport.clicking }}<br />

  sidebar hideable: {{ viewport.size.sideBarHideable }}<br />
  scale: {{ viewport.size.currentScale }}<br />
  <br />
  brightness: {{ viewport.brightness }}<br />
  <br />
  vue localStorage: {{ storage.storage }}<br />
  <br />
  loading: {{ notifications.loading }}<br />
  loading sources: {{ notifications.loadingSources }}<br />
  <br />
  notifications:
  <p v-for="notification of notifications.listed" :key="notification.id">
    {{ notification }}
  </p>
  <br /><br />
  tabs:
  {{ tabs }}<br />
  <br />
  max views: {{ views.maxViews }}<br />
  views:
  {{ views }}<br />
</template>

<script setup lang="ts">
import { viewport } from "~/composables/useViewport";
import { storage } from "~/composables/useStorage";
import { notifications } from "~/composables/useNotifications";
import { tabs } from "~/composables/useTabs";
import { views } from "~/composables/useViews";
import { fonts } from "~/composables/useFont";
</script>
