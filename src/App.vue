<template>
  <div class="min-h-screen container mx-auto px-4 pb-10 bg-[#F7FAF9]">
    <Header />
    <RouterView />
  </div>
</template>

  <script setup>
  import { RouterView } from 'vue-router'
  import Header from './components/Header.vue';
  </script>