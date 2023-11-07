<template>
  <TheSection :section-title="'Сертификаты'">
    <template #title>
      <div class="flex gap-20">
        <NuxtIcon
          class="swiper_certificates-btn_left cursor-pointer text-black_100 dark:text-dark_black_100"
          name="CaretLeft"
          filled
        />
        <NuxtIcon
          class="swiper_certificates-btn_right cursor-pointer text-black_100 dark:text-dark_black_100"
          name="CaretRight"
          filled
        />
      </div>
    </template>
    <template #default>
      <div class="container">
        <Swiper
          ref="swiper"
          class="certificates-slider"
          :space-between="20"
          :slides-per-view="'auto'"
          :modules="[SwiperNavigation]"
          :navigation="navigation"
        >
          <SwiperSlide
            class="certificates-slider__slide"
            v-for="(item, index) in 5"
            :key="index"
          >
            <div class="p-24 border border-stroke_100 dark:border-dark_stroke_100">
              <img class="aspect-square object-cover mb-24" :src="img" alt="" />
              <!-- <div
                class="md:max-h-360 max-h-320 h-full md:p-32 p-16 bg-no-repeat bg-cover w-full aspect-square bg-center"
                :style="`background-image: url('${img}')`"
              ></div> -->
              <div>
                <span class="block text-12 text-gray_300 mb-8">16.10.23</span>
                <p class="text-20 leading-25 text-black_100 dark:text-dark_black_100">
                  Сертификат за 1 место по России
                </p>
              </div>
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
  prevEl: ".swiper_certificates-btn_left",
  nextEl: ".swiper_certificates-btn_right",
};
</script>

<style lang="scss">
.certificates-slider {
  width: 100%;
  max-width: 100vw;
  overflow: visible;
}

.certificates-slider__slide.swiper-slide {
  @screen md {
    width: theme("width.285");
  }

  width: theme("width.320");
}
</style>
