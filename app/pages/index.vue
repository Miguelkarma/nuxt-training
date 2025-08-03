<script setup lang="ts">
const { $sayHello } = useNuxtApp();
$sayHello("Guillermo");
//check if the plugin is available
// console.log(useNuxtApp());
</script>
<template>
  <div class="container py-3 mx-auto Main">
    <h1 class="text-teal-500">Hello Nuxt 3</h1>
  </div>
</template>
