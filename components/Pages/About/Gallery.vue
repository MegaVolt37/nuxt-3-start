<template>
  <TheSection :section-title="'Галерея'">
    <template #title>
      <div class="flex gap-20">
        <NuxtIcon
          class="swiper_products-btn_left cursor-pointer text-black_100 dark:text-dark_black_100"
          name="CaretLeft"
          filled
        />
        <NuxtIcon
          class="swiper_products-btn_right cursor-pointer text-black_100 dark:text-dark_black_100"
          name="CaretRight"
          filled
        />
      </div>
    </template>
    <template #default>
      <div class="max-md:mx-16">
        <Swiper
          class="about__gallery-slider"
          ref="swiper"
          :space-between="0"
          :slides-per-view="'auto'"
          :modules="[SwiperNavigation, SwiperPagination]"
          :navigation="navigation"
          :pagination="true"
        >
          <SwiperSlide v-for="(item, index) in 5" :key="index">
            <div
              class="md:max-h-560 md:pb-[39%] pb-[79%] max-h-285 h-full bg-no-repeat bg-cover w-full bg-center"
              :style="`background-image: url('${img}')`"
            ></div>
          </SwiperSlide>
          <div id="swiper-pagination"></div>
        </Swiper>
      </div>
    </template>
  </TheSection>
</template>

<script lang="ts" setup>
import img from "@/assets/images/bg_home.jpg";
const navigation = {
  prevEl: ".swiper_products-btn_left",
  nextEl: ".swiper_products-btn_right",
};
</script>

<style lang="scss">
.about__gallery-slider {
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    @apply max-md:static max-md:mt-1;
  }
  .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    @apply w-10 mx-6 h-10 md:bg-white_200/70 bg-black_300/40  opacity-100;
  }

  .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
    @apply md:bg-white_200 bg-black_100  md:dark:bg-dark_white_100 dark:bg-white_100;
  }
}
</style>
