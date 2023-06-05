<template>

  <!--   Takliflar    -->
  <div class="w-full mt-[100px]">
    <div class="grid grid-cols-12 items-center">
      <img src="../assets/images/e-library.png" class="col-span-6" alt="img">
      <form class="col-span-4 flex flex-col">
        <p class="text-lg font-bold mb-3">{{ title }}</p>
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
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>