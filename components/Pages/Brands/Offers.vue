<template>
  <div class="md:mb-120 mb-64">
    <div class="container">
      <div class="max-sm:grid max-sm:gap-40">
        <div class="grid sm:grid-cols-2" v-for="(item, index) in counts" :key="index">
          <img
            class="md:max-w-600 md:max-h-600 w-full h-full object-cover aspect-square"
            :class="{ 'sm:col-start-2 sm:row-start-1': index % 2 !== 0 }"
            :src="item.image"
            alt=""
          />
          <div
            class="grid lg:p-48 sm:p-24 pt-24 h-full w-full sm:aspect-square content-center max-sm:flex-1"
            :class="{ 'sm:col-start-1 sm:row-start-1': index % 2 !== 0 }"
          >
            <p
              class="lg:text-24 text-18 lg:leading-33 leading-25 text-black_100 dark:text-dark_black_100"
            >
              {{ item.title }}
            </p>
            <p
              class="text-16 leading-20 font-light text-black_100 dark:text-dark_black_100 mt-8"
            >
              {{ item.text }}
            </p>
            <span
              class="flex items-center text-16 leading-22 text-black_100 dark:text-dark_black_100 gap-8 mt-24"
              ><NuxtIcon class="w-16" name="CaretRight" filled />Подробнее</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Image1 from "@/assets/images/about_numbers/1.jpg";
import Image2 from "@/assets/images/about_numbers/2.jpg";
import Image3 from "@/assets/images/about_numbers/3.jpg";
import Image4 from "@/assets/images/about_numbers/4.jpg";
const counts = [
  {
    image: Image1,
    title: "Vilermo",
    text: "В которую входит такие подразделения, как трикотажное и швейное производство.",
    link: "",
  },
  {
    image: Image2,
    title: "Vilermo",
    text: "В которую входит такие подразделения, как трикотажное и швейное производство.",
    link: "",
  },
  {
    image: Image3,
    title: "Vilermo",
    text: "В которую входит такие подразделения, как трикотажное и швейное производство.",
    link: "",
  },
  {
    image: Image4,
    title: "Vilermo",
    text: "В которую входит такие подразделения, как трикотажное и швейное производство.",
    link: "",
  },
];
</script>

<style></style>
