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
</script>

<template>
  <!-- <div class="container py-3 mx-auto Main">
    <h1 class="text-teal-500">Hello Nuxt 3</h1>
  </div>
  <div>
    <div class="container py-3 mx-auto" id="main">
      Counter: {{ counter }} >
      <button @click="counter++" class="p-2 bg-cyan-700">+</button>
      <button @click="counter--" class="p-2 bg-cyan-700">-</button>
    </div>
    <Counter id="counter" />
  </div> -->

  <div>hello</div>
</template>
