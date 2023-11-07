<template>
  <TheSection :section-title="'В цифрах'">
    <template #default>
      <div class="container">
        <div class="md:mt-48 mt-32">
          <div class="md:flex flex-wrap gap-20 grid grid-cols-1">
            <div class="md:flex-1 md:flex grid max-md:grid-cols-2 md:flex-col md:even:flex-col-reverse"
              v-for="(item, index) in counts" :key="index">
              <img class="md:max-w-285 md:max-h-285 w-full h-full object-cover aspect-square max-sm:flex-1"
                :class="{ 'max-md:col-start-2 max-md:row-start-1': index % 2 !== 0 }" :src="item.image" alt="" />
              <!-- <div class="md:max-w-285 md:max-h-285 h-full w-full aspect-square max-sm:flex-1">
              </div> -->
              <div
                class="grid p-20 bg-gray_100 md:max-w-285 md:max-h-285 h-full w-full aspect-square content-between max-sm:flex-1"
                :class="{ 'max-md:col-start-1 max-md:row-start-1': index % 2 !== 0 }">
                <span class="lg:text-90 text-56 lg:leading-90 leading-56 text-blue_100/70 dark:text-dark_blue_100/70">{{
                  item.count }}</span>
                <p class="lg:text-24 text-18 lg:leading-33 leading-25 text-black_100 dark:text-dark_black_100">
                  {{ item.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </TheSection>
</template>

<script lang="ts" setup>
import Image1 from "@/assets/images/about_numbers/1.jpg";
import Image2 from "@/assets/images/about_numbers/2.jpg";
import Image3 from "@/assets/images/about_numbers/3.jpg";
import Image4 from "@/assets/images/about_numbers/4.jpg";
const counts = [
  {
    image: Image1,
    count: 100,
    text: "Магазинов",
  },
  {
    image: Image2,
    count: 25,
    text: "Поставщиков",
  },
  {
    image: Image3,
    count: 7,
    text: "Сотрудников",
  },
  {
    image: Image4,
    count: 13,
    text: "Сотрудников",
  },
];
</script>

<style></style>
