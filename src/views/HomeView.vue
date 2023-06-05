<template>
  <main class="pt-[0px]">
     <div class="min-h-[250px] rounded-md overflow-hidden">
       <div class="grid grid-cols-12 gap-4 items-center min-h-screen">
         <div class="col-span-6">
           <img src="../assets/images/e-library.png" alt="" class="w-auto h-full">
         </div>
         <div class="col-span-6">
           <p class="text-xl font-bold">Toshkent davlat iqtisodiyot universtetining elektron kutbxonasi</p>
           <p>Elektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkin</p>
           <p>Elektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkin</p>
         </div>
       </div>
       <Book :data="types" class="mt-10" />

<!--   Jamoa    -->
       <div>
         <p class="text-4xl font-bold mb-5 text-center">Jamoa</p>
         <div class="grid grid-cols-12 gap-4">
           <div class="border col-span-3 rounded-md px-2">
             <img src="src/assets/images/e-library.png" alt="" class="mx-auto">
             <p class="text-md font-medium my-1">Lazizbek G'aniyev</p>
             <p>Rahbar</p>
           </div>
           <div class="border rounded-md px-2 col-span-3">
             <img src="src/assets/images/e-library.png" alt="" class="mx-auto">
             <p class="text-md font-medium my-1">Lazizbek G'aniyev</p>
             <p>Rahbar</p>
           </div>
           <div class="border rounded-md px-2 col-span-3">
           <img src="src/assets/images/e-library.png" alt="" class="mx-auto">
           <p class="text-md font-medium my-1">Lazizbek G'aniyev</p>
           <p>Rahbar</p>
         </div>
           <div class="border rounded-md px-2 col-span-3">
             <img src="src/assets/images/e-library.png" alt="" class="mx-auto">
             <p class="text-md font-medium my-1">Lazizbek G'aniyev</p>
             <p>Rahbar</p>
           </div>

         </div>
       </div>

<!--   Takliflar    -->
       <div class="w-full mt-[100px]">
         <div class="grid grid-cols-12 items-center">
           <img src="../assets/images/e-library.png" class="col-span-6" alt="img">
           <form class="col-span-4 flex flex-col">
             <p class="text-lg font-bold mb-3">Taklif qoldirish uchun</p>
             <label for="name" class="flex flex-col text-md font-medium">Ism va familiya
               <input id="name" placeholder="Ism familiya" class="text-sm p-2 mt-2 rounded-sm border-0 outline-0">
             </label>
             <label for="text" class="flex flex-col mt-5 text-md font-medium">Taklifingiz
             <textarea id="text" class="text-sm p-2 mt-2 rounded-sm border-0 outline-0 min-h-[100px]"/>
             </label>
             <button class="mt-3 bg-blue-300 rounded-sm text-white text-lg font-bold">Yuborish</button>
           </form>
         </div>
       </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import "swiper/css";
import Book from '../components/Book.vue';
import Picture from '../assets/images/e-library.png'
const types = ref([
  {
    name: "Badiy kitoblar",
    books: [
      {
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: false,
        img: Picture,
      },
      {
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: true,
        img: Picture
      },{
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: true,
        img: Picture
      },
    ]
  },
  {
    name: "Detektiv asarlar",
    books: [
      {
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: true,
        img: Picture
      },
      {
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: true,
        img: Picture
      },{
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: true,
        img: Picture
      },
    ]
  },
  {
    name: "Ilmiy asarlar",
    books: [
      {
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: true,
        img: Picture
      },
      {
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: true,
        img: Picture
      },{
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: true,
        img: Picture
      },
    ]
  },
  {
    name: "Tragedik asarlar",
    books: [
      {
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: true,
        img: Picture
      },
      {
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: true,
        img: Picture
      },{
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: true,
        img: Picture
      },
    ]
  },
  {
    name: "Fantastik asarlar",
    books: [
      {
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: true,
        img: Picture
      },
      {
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: true,
        img: Picture
      },{
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: true,
        img: Picture
      },
    ]
  },
]);
</script>
