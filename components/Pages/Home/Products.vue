<template>
  <TheSection :section-title="'О нас в цифрах'">
    <template #title>
      <div class="flex gap-20">
        <NuxtIcon class="swiper_products-btn_left cursor-pointer text-black_100 dark:text-dark_black_100" name="CaretLeft"
          filled />
        <NuxtIcon class="swiper_products-btn_right cursor-pointer text-black_100 dark:text-dark_black_100"
          name="CaretRight" filled />
      </div>
    </template>
    <template #default>
      <div class="container">
        <Swiper ref="swiper" class="products-slider" :space-between="20" :slides-per-view="'auto'"
          :modules="[SwiperNavigation]" :navigation="navigation">
          <SwiperSlide class="products-slider__slide" v-for="(item, index) in 5" :key="index">
            <div class="md:max-h-360 max-h-320 h-full md:p-32 p-16 bg-no-repeat bg-cover w-full aspect-square bg-center"
              :style="`background-image: url('${img}')`">
              <p class="text-24 font-semibold leading-33 text-white_200 dark:text-dark_black_100">
                Шапки
              </p>
            </div>
          </SwiperSlide>
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
.products-slider {
  width: 100%;
  max-width: 100vw;
  overflow: visible;
}

.products-slider__slide.swiper-slide {
  @screen md {
    width: theme("width.360");
  }

  width: theme("width.320");
}
</style>
