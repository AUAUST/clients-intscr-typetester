<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <router-link :to="{ name: 'home' }">Go to Home</router-link>
      <router-link :to="{ name: 'about' }">Go to About</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import RouterVue from "vue-router";
</script>
