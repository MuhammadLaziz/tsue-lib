<template>
  <div class="pt-[120px]">
    <p class="text-3xl font-bold mb-5">Anons kitoblar</p>
    <div class="grid grid-cols-12 gap-4">
      <RouterLink v-for="i in data" :key="i.name" :to="`/book/${i.name}`" class="border col-span-3 p-2 rounded-lg bg-white pointer-events-none">
        <img :src="i.img" alt="book image" class="mx-auto">
        <p class="text-lg font-medium">{{i.name}}</p>
        <div class="mt-1 flex items-center justify-between">
          <p class="text-sm">{{i.author}}</p>
          <p v-if="i.available" class="text-sm font-medium text-red-500">Mavjud</p>
          <p v-else>Mavjud emas</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const data = ref([
  {
    name: 'Otkan kunlar',
    author: 'Abdulla Qodiriy',
    img: 'src/assets/images/e-library.png',
    avaible: false
  },
  {
    name: 'Otkan kunlar',
    author: 'Abdulla Qodiriy',
    img: 'src/assets/images/e-library.png',
    avaible: false
  },
  {
    name: 'Otkan kunlar',
    author: 'Abdulla Qodiriy',
    img: 'src/assets/images/e-library.png',
    avaible: false
  },
  {
    name: 'Otkan kunlar',
    author: 'Abdulla Qodiriy',
    img: 'src/assets/images/e-library.png',
    avaible: false
  },
  {
    name: 'Otkan kunlar',
    author: 'Abdulla Qodiriy',
    img: 'src/assets/images/e-library.png',
    avaible: false
  },
  {
    name: 'Otkan kunlar',
    author: 'Abdulla Qodiriy',
    img: 'src/assets/images/e-library.png',
    avaible: false
  },
  {
    name: 'Otkan kunlar',
    author: 'Abdulla Qodiriy',
    img: 'src/assets/images/e-library.png',
    avaible: false
  },
  {
    name: 'Otkan kunlar',
    author: 'Abdulla Qodiriy',
    img: 'src/assets/images/e-library.png',
    avaible: false
  },
  {
    name: 'Otkan kunlar',
    author: 'Abdulla Qodiriy',
    img: 'src/assets/images/e-library.png',
    avaible: false
  },
  {
    name: 'Otkan kunlar',
    author: 'Abdulla Qodiriy',
    img: 'src/assets/images/e-library.png',
    avaible: false
  },
  {
    name: 'Otkan kunlar',
    author: 'Abdulla Qodiriy',
    img: 'src/assets/images/e-library.png',
    avaible: false
  },
  {
    name: 'Otkan kunlar',
    author: 'Abdulla Qodiriy',
    img: 'src/assets/images/e-library.png',
    avaible: false
  },
])
</script>