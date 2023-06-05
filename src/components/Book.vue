<template>
    <div v-for="i in data" :key="i" class="mb-10">
      <p class="text-2xl font-bold">{{ i.name }} {{}}</p>
      <div class="grid grid-cols-12 mt-4 gap-4">
        <RouterLink v-for="i in i.books" :key="i.name" :to="`/book/${i.name}`" class="col-span-3 border p-2 rounded-lg bg-white">
          <img :src="i.img" alt="book image" class="mx-auto">
          <p class="text-lg font-medium">{{i.name}}</p>
          <div class="mt-1 flex items-center justify-between">
            <p class="text-sm">{{i.author}}</p>
            <p v-if="i.available" class="text-sm font-medium text-red-500">Mavjud</p>
            <p v-else class="text-sm font-medium text-red-500">Mavjud emas</p>
          </div>
        </RouterLink>
      </div>
    </div>
</template>

<script setup>
import { Swiper } from 'swiper/vue';
import 'swiper/css';

const props = defineProps({
  data: Object,
});
</script>
