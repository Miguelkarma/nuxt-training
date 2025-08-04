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

const { data: products } = await useFetch("api/products", {
  transform: (_products) => (_products as { data: any }).data,
});
//for javascript part
// console.log(toRaw(products.value));
</script>

<template>
  <div class="prose mx-auto">{{ products }}</div>
</template>
