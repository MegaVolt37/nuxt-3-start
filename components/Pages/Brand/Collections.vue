<template>
  <div class="mb-120">
    <div class="container">
      <div class="flex lg:gap-48 gap-32 items-center max-md:flex-col">
        <div class="flex-1">
          <h2
            class="lg:text-40 text-24 lg:leading-44 leading-25 text-black_100 font-semibold dark:text-dark_black_100 mb-20"
          >
            Коллекции
          </h2>
          <p
            class="lg:text-20 text-16 lg:leading-30 leading-20 font-light text-black_100 dark:text-dark_black_100 md:mb-40"
          >
            В которую входит такие подразделения, как трикотажное и швейное производство,
            а также торговые марки оптово-рознечной торговли
          </p>
          <div class="md:flex hidden flex-wrap gap-16">
            <button
              class="py-12 px-24 border border-stroke_100 dark:border-dark_stroke_100 items-center justify-center w-fit font-medium text-16 text-gray_300"
              :class="{
                '!border-black_100 dark:!border-dark_black_100 !text-black_100 dark:!text-dark_black_100':
                  activeSlide === index,
              }"
              v-for="(item, index) in data"
              :key="index"
              @click="changeSlide(index)"
            >
              {{ item.category }}
            </button>
          </div>
        </div>
        <Swiper
          class="brand__collections-slider flex-1 max-md:w-full"
          ref="swiper"
          :space-between="0"
          :slides-per-view="'auto'"
          :modules="[SwiperPagination]"
          :pagination="true"
          @active-index-change="changeActiveSlide"
          @swiper="swiper = $event"
        >
          <SwiperSlide v-for="(item, index) in data" :key="index">
            <div
              class="md:max-h-560 md:max-w-590 md:pb-[93%] pb-[79%] max-h-285 h-full bg-no-repeat bg-cover w-full bg-center flex pt-24 pl-24"
              :style="`background-image: url('${item.image}')`"
            >
              <span
                class="md:hidden block text-24 font-semibold leading-33 text-white_100"
                >{{ item.category }}</span
              >
            </div>
          </SwiperSlide>
          <div id="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import img from "@/assets/images/bg_home.jpg";
const data = [
  {
    id: 0,
    category: "CASUAL",
    image: img,
  },
  {
    id: 1,
    category: "STYLE",
    image: img,
  },
  {
    id: 2,
    category: "OUTERWEAR ",
    image: img,
  },
  {
    id: 3,
    category: "SPORT",
    image: img,
  },
  {
    id: 4,
    category: "OUTERWEAR ",
    image: img,
  },
];
const activeSlide = ref(0);
const swiper = ref(null);
const readSwiper = computed(() => swiper.value);
const changeSlide = (index) => {
  console.log(index, swiper.value);
  readSwiper.value?.slideToLoop(index);
};
// const changeActiveSlide = (swiper) => {
//   activeSlide.value = swiper?.activeIndex;
// };
watch(
  () => swiper.value?.activeIndex,
  (value) => {
    console.log(value);
  }
);
</script>

<style lang="scss">
.brand__collections-slider {
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    @apply max-md:static max-md:mt-1;
  }
  .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    @apply w-10 mx-6 h-10 md:bg-white_200/70 bg-black_300/40 max-md:dark:bg-dark_black_100/40 opacity-100;
  }

  .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
    @apply md:bg-white_200 bg-black_100  md:dark:bg-dark_white_100 dark:bg-white_100;
  }
}
</style>
