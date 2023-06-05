<template>
  <div class="pt-[100px]">
      <div class="border rounded-md p-5">
        <div class="flex items-center justify-between">
          <p class="text-xl font-bold">{{books?.name}}</p>
          <p class="text-red-500 text-md italic">{{timerOutput}} so'ng kitobni olishingiz mumkin</p>
        </div>
        <p class="text-lg font-medium my-3">{{books?.author}}</p>
        <p class="text-md italic">{{books?.description}}</p>
        <img :src="books?.img" alt="" class="my-10 mx-auto w-auto">
      </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from 'vue-router'
import Picture from '../assets/images/e-library.png'

const route = useRoute()
const router = useRouter()
console.log(route.params.slug, 'route')
console.log(router, 'router')

const books = ref(
  {
    name: "O'tkan Kunlar",
    author: "Abdulla Qodiriy",
    available: true,
    img: Picture,
    description: 'Elektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkinElektron kutbonamizda siz ozingiz hohlagan kitoblarni online buyurtma qilishingiz mumkin'
  },
)
const isHave = ref(false)

const countDownToTime = new Date("JUNE 8, 2023 00:00:00").getTime()
let timerOutput = null

function startTimer() {
  const timeNow = new Date().getTime();
  const timeDifference = countDownToTime - timeNow;
  const millisecondsInOneSecond = 1000;
  const millisecondsInOneMinute = millisecondsInOneSecond * 60;
  const millisecondsInOneHour = millisecondsInOneMinute * 60;
  const millisecondsInOneDay = millisecondsInOneHour * 24;
  const differenceInDays = timeDifference / millisecondsInOneDay;
  const remainderDifferenceInHours = (timeDifference % millisecondsInOneDay) / millisecondsInOneHour;
  const remainderDifferenceInMinutes = (timeDifference % millisecondsInOneHour) / millisecondsInOneMinute;
  const remainderDifferenceInSeconds = (timeDifference % millisecondsInOneMinute) / millisecondsInOneSecond;
  const remainingDays = Math.floor(differenceInDays);
  const remainingHours = Math.floor(remainderDifferenceInHours);
  const remainingMinutes = Math.floor(remainderDifferenceInMinutes);
  const remainingSeconds =Math.floor(remainderDifferenceInSeconds);
  timerOutput = remainingDays + " Kundan";

  // timerOutput = remainingDays + " Kun " + ": " + remainingHours + " Soat " + ": " + remainingMinutes + " Minut " + ": " + remainingSeconds + " Seconds";
}

startTimer()

// function isWeHave() {
//   books.value.forEach(item => {
//     if (item.name === route.params.slug) {
//       isHave.value = true
//       return item
//     }
//   })
//   console.log(isHave, 'isHave')
// }
// isWeHave()


// const isHave = computed(() => {
//   types.value.find((item) => {
//     item.books.forEach(item => {
//       return item.name = route.params.slug;
//       // console.log(item.name)
//     })
//   })
// })
</script>