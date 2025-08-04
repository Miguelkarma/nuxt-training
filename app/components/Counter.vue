<script setup lang="ts">
const counter = useCounter();
</script>

<template>
  <div class="container py-3 mx-auto">
    Counter: {{ counter }}
    <div class="flex space-x-6">
      <button @click="counter++" class="p-2 bg-cyan-700">+</button>
      <button @click="counter--" class="p-2 bg-cyan-700">-</button>
    </div>
  </div>
</template>
