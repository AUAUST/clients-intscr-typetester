<template>
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
import { database } from "~/composables/useDB";
import { ref } from "vue";
import { liveQuery } from "dexie";

const props = defineProps({
  defaultAge: {
    type: Number,
    default: 21,
  },
});

const friendName = ref("");
const friendAge = ref(props.defaultAge);
const status = ref("");
const friends = liveQuery(() => database.friends.toArray());

async function addFriend() {
  try {
    const id = await database.friends.add({
      name: friendName.value,
      age: friendAge.value,
    });
    status.value = `Friend ${friendName.value} successfully added. Got id ${id}`;
  } catch (error) {
    status.value = `Failed to add${friendName.value}: ${error}`;
  }
}
</script>
