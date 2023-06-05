<template>
  <div class="relative">
    <div
        @click="openSwitcher = !openSwitcher"
        class="cursor-pointer p-3 bg-[#F3F4F4] h-full rounded-lg inline-flex items-center md:hover:bg-[#CCCCCC] transition-all duration-300"
        v-click-away="onClickAway"
    >
      <p class="text-dark leading-140 font-bold text-sm ml-2">
        {{ activeLang?.name }}
      </p>
      <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :class="openSwitcher ? 'rotate-180' : 'rotate-0'"
          class="transition-all duration-300 ml-2"
      >
        <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="#828F89"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
      </svg>
    </div>
    <div
        :class="
        openSwitcher
          ? 'opacity-100 visible top-[120%]'
          : 'opacity-0 invisible top-[60%]'
      "
        class="w-full border border-[#F0F5F3] rounded-xl transition-all duration-300 z-30 bg-white absolute overflow-hidden"
    >
      <p
          v-for="(item, index) in lang"
          :key="index"
          @click="changeLang(item)"
          :class="locale === item.value ? 'text-green-light' : 'text-dark'"
          class="text-sm font-semibold leading-4 px-3 py-2 md:hover:bg-[#FAFAFA] md:hover:text-green transition duration-300 cursor-pointer md:hover:text-hover-green pb-2.5 pt-2.5"
      >
        {{ item.name }}
        <span
            class="h-px bg-[#F0F5F3] translate-x-0.5 translate-y-2.5 w-[160%]"
            :class="index + 1 === lang.length ? 'hidden' : 'block'"
        />
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const openSwitcher = ref(false);
const lang = ref([
  { name: "Русский", value: "ru" },
  // { name: "Ўзбекча", value: "uzc" },
  { name: "O‘zbekcha", value: "uz" },
  { name: "English", value: "en" },
]);

const activeLang = ref({ name: "Русский", value: "ru" });
onMounted(() => {
  activeLang.value =
      lang.value.find((language) => language.value === locale.value) ||
      lang.value[0];
});

function changeLang(i: { name: string; value: string }) {
  localStorage.setItem("locale", i.value);
  if (activeLang.value.value !== i.value) {
    window.location.reload();
  }
}

function onClickAway() {
  openSwitcher.value = false;
}
</script>
