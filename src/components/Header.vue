<template>
    <div class="p-4 border-b flex items-center z-10 bg-[#F7FAF9] justify-between fixed w-full top-0 left-0">
         <RouterLink to="/" class="text-lg font-bold text-yellow-500">e Library</RouterLink>
        <nav class="flex items-center gap-5">
          <RouterLink to="/about" class="text-base font-semibold">{{ $t("about_lib") }}</RouterLink>
          <RouterLink to="/books" class="text-base font-semibold">Kitoblar</RouterLink>
          <RouterLink to="/articles" class="text-base font-semibold">Maqolalar</RouterLink>
          <RouterLink to="/anons" class="text-base font-semibold">Anonslar</RouterLink>
        </nav>
      <div class="flex items-center gap-5">

        <LangSwitcher />

        <button @click="openModal = true" class="px-5 py-1.5 bg-yellow-500 rounded-md text-white">
          Kirish
        </button>
        </div>
    </div>
        <ModalWindow  :open-modal="openModal" title="Ro'yhatdan o'tish" @closeModal="openModal = false">
          <form class="w-full">
            <label for="name" class="text-md font-medium flex flex-col">Toliq ismingiz
              <input id="name" placeholder="Ism familiya" class="border border border-gray-300 mt-2 outline-0 p-1"/>
            </label>
            <label for="group" class="text-md font-medium mt-5 flex flex-col">Guruhimgiz
              <input id="group" placeholder="Guruhingiz nomi" class="border border border-gray-300 mt-2 outline-0 p-1"/>
            </label>
            <label for="file" class="text-md font-medium mt-5 flex flex-col">Pasportingiz rasmi
              <input id="file" type="file" class="mt-2" placeholder="pas">
            </label>
            <button class="bg-blue-300 w-full mt-5 p-1.5 text-white text-md font-bold rounded">Yuborish</button>
          </form>
        </ModalWindow>
</template>

<script setup>
import LangSwitcher from "./LangSwitcher.vue";
import ModalWindow from "./ModalWindow.vue";
import {ref} from "vue";

const openModal = ref(false)

</script>