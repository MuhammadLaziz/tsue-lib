<template>
  <div class="pt-[130px]">
    <Book :data="types"/>
  </div>
</template>

<script setup>
import Book from "../components/Book.vue";
import {ref} from "vue";

const types = ref([
  {
    name: "Badiy kitoblar",
    books: [
      {
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: false,
        img: "src/assets/images/e-library.png",
      },
      {
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: false,
        img: "src/assets/images/e-library.png",
      },
      {
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: false,
        img: "src/assets/images/e-library.png",
      },
      {
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: false,
        img: "src/assets/images/e-library.png",
      },
      {
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: true,
        img: "src/assets/images/e-library.png"
      },{
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: true,
        img: "src/assets/images/e-library.png"
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
        img: "src/assets/images/e-library.png"
      },
      {
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: true,
        img: "src/assets/images/e-library.png"
      },{
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: true,
        img: "src/assets/images/e-library.png"
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
        img: "src/assets/images/e-library.png"
      },
      {
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: true,
        img: "src/assets/images/e-library.png"
      },{
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: true,
        img: "src/assets/images/e-library.png"
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
        img: "src/assets/images/e-library.png"
      },
      {
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: true,
        img: "src/assets/images/e-library.png"
      },{
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: true,
        img: "src/assets/images/e-library.png"
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
        img: "src/assets/images/e-library.png"
      },
      {
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: true,
        img: "src/assets/images/e-library.png"
      },{
        name: "Otkan kunlar",
        author: "Abdulla Qodiriy",
        available: true,
        img: "src/assets/images/e-library.png"
      },
    ]
  },
]);
</script>