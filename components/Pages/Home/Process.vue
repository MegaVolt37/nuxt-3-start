<template>
  <TheSection :section-title="'Процесс производства'">
    <template #default>
      <div class="container">
        <div class="grid md:gap-20 gap-16">
          <div class="flex md:gap-20 gap-16 md:even:flex-row-reverse max-md:flex-col-reverse"
            v-for="(item, index) in data" :key="index">
            <div
              class="flex-1 basis-1/2 grid content-between md:p-24 p-16 md:gap-10 md:gap-20 gap-16 bg-transparent dark:bg-gray_100">
              <h4
                class="md:text-24 text-18 md:leading-33 leading-25 font-semibold text-black_100 dark:text-dark_black_100">
                {{ item.title }}
              </h4>
              <p class="md:text-20 text-16 md:leading-30 leading-20 font-light text-black_100 dark:text-dark_black_100">
                {{ item.text }}
              </p>
            </div>
            <div class="flex md:gap-20 gap-16 flex-1 basis-1/2 grid-cols-autofit">
              <div class="flex-1" v-for="image in item.images">
                <img class="md:h-285 max-md:aspect-square object-cover"
                  :class="{ 'max-md:aspect-video': item.images.length === 1 }" :src="image" height="285" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </TheSection>
</template>

<script lang="ts" setup>
import img from "@/assets/images/bg_home.jpg";
const data = [
  {
    images: [img, img],
    title: "Название этапа",
    text:
      "В которую входит такие подразделения, как трикотажное и швейное производство, а также торговые марки оптово-рознечной торговли",
  },
  {
    images: [img],
    title: "Название этапа",
    text:
      "В которую входит такие подразделения, как трикотажное и швейное производство, а также торговые марки оптово-рознечной торговли",
  },
  {
    images: [img, img],
    title: "Название этапа",
    text:
      "В которую входит такие подразделения, как трикотажное и швейное производство, а также торговые марки оптово-рознечной торговли",
  },
  {
    images: [img],
    title: "Название этапа",
    text:
      "В которую входит такие подразделения, как трикотажное и швейное производство, а также торговые марки оптово-рознечной торговли",
  },
];
</script>

<style></style>
