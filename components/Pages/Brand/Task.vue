<template>
  <div class="lg:my-120 my-64">
    <div class="container">
      <div class="grid lg:grid-cols-[285px_1fr] gap-16 lg:mb-86 mb-64">
        <span class="lg:text-24 text-18 lg:leading-33 leading-25 text-gray_200"
          >Миссия</span
        >
        <p
          class="lg:text-40 text-24 lg:leading-44 leading-25 font-semibold text-black_100 dark:text-dark_black_100"
        >
          В которую входит подразделения, как трикотажное и швейное
        </p>
      </div>
      <div class="grid lg:grid-cols-[285px_1fr] gap-16">
        <span class="lg:text-24 text-18 lg:leading-33 leading-25 text-gray_200"
          >Ценности бренда</span
        >
        <div class="sm:grid flex flex-col sm:grid-cols-3 sm:gap-20 gap-16">
          <div
            class="sm:flex sm:flex-col grid grid-cols-2 gap-20"
            :class="{ 'sm:flex-col-reverse': index % 2 !== 0 }"
            v-for="(item, index) of 3"
            :key="index"
          >
            <div
              class="flex flex-col justify-end aspect-square p-24 bg-blue_100 dark:bg-dark_blue_100/80"
              :class="{ 'max-sm:row-start-1 max-sm:col-start-2': index % 2 !== 0 }"
            >
              <span
                class="lg:text-32 text-20 font-semibold lg:leading-33 leading-22 text-white_100"
                >Стиль</span
              >
            </div>
            <img
              class="aspect-square object-cover"
              :class="{ 'max-sm:row-start-1': index % 2 !== 0 }"
              src="@/assets/images/bg_home.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
