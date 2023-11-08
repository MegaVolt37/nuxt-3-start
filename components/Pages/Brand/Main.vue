<template>
  <div>
    <div
      class="md:sticky hidden top-0 flex w-full items-center justify-center gap-40 bg-black_100 dark:bg-gray_400 py-10"
    >
      <span
        class="text-gray_300 dark:text-dark_black_100/70"
        :class="{ '!text-dark_black_100': activeLink == idx }"
        v-for="idx of 5"
        :key="idx"
        >Vilermo</span
      >
    </div>
    <div class="grid md:h-[39vw] md:max-h-560 md:grid-cols-2">
      <img class="w-full h-full object-cover" src="@/assets/images/bg_home.jpg" alt="" />
      <div
        class="flex flex-col md:gap-24 gap-16 justify-center items-start lg:pl-80 md:pl-40 md:max-w-650 md:pr-20 max-md:py-32 max-md:px-16 max-md:border-b border-b-stroke_100 dark:border-b-dark_stroke_100"
      >
        <p
          class="lg:text-56 text-34 font-semibold lg:leading-64 leading-33 text-black_100 dark:text-dark_black_100"
        >
          Vilermo
        </p>
        <p
          class="lg:text-20 text-16 lg:leading-30 leading-20 font-light text-black_100 dark:text-dark_black_100"
        >
          В которую входит такие подразделения, как трикотажное и швейное производство, а
          также торговые марки оптово-рознечной торговли
        </p>
        <span
          class="flex items-center text-16 font-medium leading-22 text-black_100 dark:text-dark_black_100 gap-8 md:mt-24 mt-1 cursor-pointer"
          >Перейти на сайт<NuxtIcon class="w-16" name="CaretRight" filled
        /></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const activeLink = ref(1);
</script>

<style></style>
