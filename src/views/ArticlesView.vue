<template>
  <div class="pt-10">
    <div class="grid grid-cols-12 gap-4 items-center min-h-screen">
      <div class="col-span-6">
        <img src="../assets/images/e-library.png" alt="" class="w-auto h-full">
      </div>
      <div class="col-span-6">
        <p class="text-2xl font-bold">Toshkent davlat iqtisodiyot universtetining maqolalar sahifasi</p>
        <p class="text-lg">Toshkent davlat iqtisodiyot universtetining professor o'qituvchilari tomonidan joriy etilgan yoki joriy etilishi kutilayotgan maqolalar bilan tanishishimgiz mumkin</p>
      </div>
    </div>

<!--    Joriy etilgan maqolalar    -->
    <div class="flex items-center mb-10">
      <h1 class="text-3xl font-bold">Maqolalar</h1>
      <p class="text-xl ml-2">(joriy etilgan)</p>
    </div>
    <div class="grid grid-cols-12 gap-4">
      <div v-for="i in articles" :key="i.name" class="border bg-white col-span-3 px-2 rounded-md pb-2">
        <img :src="i.img" alt="img" class="mx-auto">
        <p class="text-lg font-medium">{{ i.name }}</p>
        <p class="text-md italic">{{ i.author }}</p>
      </div>
    </div>

<!--      Joriy etilmagan maqolalar-->

    <div class="flex items-center mb-10 mt-[100px]">
      <h1 class="text-3xl font-bold">Maqolalar</h1>
      <p class="text-xl ml-2">(kutilayotkanlar)</p>
    </div>
    <div class="grid grid-cols-12 gap-4">
      <div v-for="i in articles" :key="i.name" class="border bg-white col-span-3 px-2 rounded-md pb-2">
        <img :src="i.img" alt="img" class="mx-auto">
        <p class="text-lg font-medium">{{ i.name }}</p>
        <p class="text-md italic">{{ i.author }}</p>
      </div>
    </div>

    <Recommendations :title="`Qaysi mavzularda maqola o'qishni hohlaysiz`"/>

  </div>
</template>
<script setup>

import {ref} from "vue";
import Recommendations from "../components/Recommendations.vue";

const articles = ref([
  {
    name: 'Makroiqtisodiyot',
    author: 'Munis Abdullayev',
    img: 'src/assets/images/e-library.png'
  },
  {
    name: 'Makroiqtisodiyot',
    author: 'Munis Abdullayev',
    img: 'src/assets/images/e-library.png'
  },
  {
    name: 'Makroiqtisodiyot',
    author: 'Munis Abdullayev',
    img: 'src/assets/images/e-library.png'
  },
  {
    name: 'Makroiqtisodiyot',
    author: 'Munis Abdullayev',
    img: 'src/assets/images/e-library.png'
  },
  {
    name: 'Makroiqtisodiyot',
    author: 'Munis Abdullayev',
    img: 'src/assets/images/e-library.png'
  },
  {
    name: 'Makroiqtisodiyot',
    author: 'Munis Abdullayev',
    img: 'src/assets/images/e-library.png'
  },
  {
    name: 'Makroiqtisodiyot',
    author: 'Munis Abdullayev',
    img: 'src/assets/images/e-library.png'
  },
  {
    name: 'Makroiqtisodiyot',
    author: 'Munis Abdullayev',
    img: 'src/assets/images/e-library.png'
  },
])
</script>