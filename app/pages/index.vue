<script setup lang="ts">
// const counter = useCounter();
// const { $sayHello } = useNuxtApp();
// $sayHello("Guillermo");
//check if the plugin is available
// console.log(useNuxtApp());
// definePageMeta({
//   middleware: "auth",
// });

import { useCounterStore } from "@/stores/myStore";
const store = useCounterStore();
console.log(store);

const response = await $fetch("/api/hello");
console.log(response);
</script>

<template>
  <div class="prose mx-auto">sup</div>
</template>
