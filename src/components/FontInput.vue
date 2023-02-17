<template>
  <input
    id="font-input"
    type="file"
    accept="*.ttf, *.otf, *.woff, *.woff2"
    ref="fontInput"
    hidden
  />
  <fieldset>
    <legend>Add new friend</legend>
    <label>
      Name:
      <input v-model="friendName" type="text" />
    </label>
    <br />
    <label>
      Age:
      <input v-model="friendAge" type="number" />
    </label>
    <br />
    <button @click="addFriend">Add Friend</button>
    <p>{{ status }}</p>
  </fieldset>
  <ul>
    <li v-for="friend in friends" :key="friend.id">
      {{ friend.name }}, {{ friend.age }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, reactive } from "vue";
import { liveQuery } from "dexie";

import { database } from "~/composables/useDatabase";
import type { Font } from "~/composables/useDatabase";

const fontName = ref("");
const status = ref("");
const friends = reactive(await database.fonts.toArray());

async function storeFont({ file }: { file: File }) {
  const id = await database.fonts.add({
    name: file.name,
    size: file.size,
    fileName: file.name,
    type: file.type,
    file: file,
  });
  console.log("Added font", font);
}

const fontInput = ref();

onMounted(() => {
  fontInput.value.onchange = (event: InputEvent) => {
    if (event.target && event.type === "change") {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (
        ["font/ttf", "font/otf", "font/woff", "font/woff2"].includes(
          file?.type!
        )
      ) {
        const fileData = {
          name: file?.name,
          size: file?.size,
          type: file?.type,
        };
      } else {
        console.error("Invalid file type", file);
      }
    }
  };
});
onUnmounted(() => {
  fontInput.value.onchange = null;
});
</script>

<style lang="scss">
@use "@/assets/style/variables" as v;
</style>
