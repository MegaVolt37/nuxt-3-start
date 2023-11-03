<template>
  <div class="section__history">
    <TheSection :section-title="'История компании'">
      <template #title>
        <div class="flex gap-20">
          <NuxtIcon class="swiper_history-btn_left cursor-pointer text-black_100 dark:text-dark_black_100"
            name="CaretLeft" filled />
          <NuxtIcon class="swiper_history-btn_right cursor-pointer text-black_100 dark:text-dark_black_100"
            name="CaretRight" filled />
        </div>
      </template>
      <template #default>
        <div>
          <Swiper ref="swiper" @active-index-change="changeI" class="relative max-md:-mt-80" :slides-per-view="1"
            :modules="[SwiperScrollbar, SwiperNavigation]" :navigation="navigation" :scrollbar="scrollbar">
            <SwiperSlide class="" v-for="(item, index) in slides" :key="index">
              <div class="max-h-560 min-h-[245px] h-full bg-no-repeat bg-cover bg-center aspect-[5/2] w-full"
                :style="`background-image: url('${item.image}')`">
                <div class="container md:block hidden">
                  <div class="grid gap-24 pt-80">
                    <p class="text-24 font-semibold leading-33 text-white_200 dark:text-dark_black_100">
                      {{ item.title }}
                    </p>
                    <p class="text-20 font-light leading-28 text-white_200 dark:text-dark_black_100">
                      {{ item.text }}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div
              class="swiper-scrollbar max-w-1200 mx-auto md:!bottom-80 !bottom-60 md:!left-1/2 !left-16 md:!-translate-x-1/2">
              <div class="swiper-scrollbar-drag"></div>
              <div class="flex md:gap-42 gap-24 items-center relative z-[1] md:mt-20 mt-12">
                <p class="text-24 font-semibold text-white_200/40" :class="{ '!text-white_200': index === activeSlide }"
                  v-for="({ year }, index) of slides" :key="year">
                  {{ year }}
                </p>
              </div>
            </div>
          </Swiper>
          <div
            class="container md:hidden block relative after:bottom-0 after:content-[''] after:absolute after:-left-0 after:right-0 after:bg-stroke_100 dark:after:bg-dark_stroke_100 after:h-1">
            <div class="grid gap-16 pt-24 pb-24">
              <p class="text-20 font-semibold leading-22 text-white_200 dark:text-dark_black_100">
                {{ slides?.[activeSlide]?.title }}
              </p>
              <p class="text-16 font-light leading-20 text-white_200 dark:text-dark_black_100">
                {{ slides?.[activeSlide]?.text }}
              </p>
            </div>
          </div>
        </div>

        <div>
          <div class="mt-80 container">
            <div></div>
          </div>
        </div>
      </template>
    </TheSection>
  </div>
</template>

<script lang="ts" setup>
import img from "@/assets/images/bg_home.jpg";
const navigation = {
  prevEl: ".swiper_history-btn_left",
  nextEl: ".swiper_history-btn_right",
};
const swiper = ref();
const changeI = ({ activeIndex }) => {
  activeSlide.value = activeIndex ?? 0;
};
const activeSlide = ref(0);
const slides = [
  {
    image: img,
    title: "Название",
    year: 2014,
    text:
      "В которую входит такие подразделения, как трикотажное и швейное производство, а также торговые марки оптово-рознечной торговли",
  },
  {
    image: img,
    title: "Название бытия",
    year: 2015,
    text:
      "В которую входит такие подразделения, как трикотажное и швейное производство, а также торговые марки оптово-рознечной торговли",
  },
  {
    image: img,
    title: "события",
    year: 2016,
    text:
      "В которую входит такие подразделения, как трикотажное и швейное производство, а также торговые марки оптово-рознечной торговли",
  },
];
const scrollbar = {
  el: ".swiper-scrollbar",
  // Makes the Scrollbar Draggable
  // draggable: true,
  // Snaps slider position to slides when you release Scrollbar
  // snapOnRelease: true,
  // Size (Length) of Scrollbar Draggable Element in px
  dragSize: 30,
};
</script>

<style lang="scss">
.swiper-scrollbar.swiper-scrollbar-horizontal {
  bottom: 0;
  background-color: rgba(#fff, 40%);
  height: 2px;
}

.swiper-horizontal>.swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-horizontal {
  // @media screen and (max-width: 768px) {
  //   width: calc(100% - (2 * var(--swiper-scrollbar-sides-offset, 1%) + theme("width.16")));
  // }
}

.swiper-scrollbar-drag {
  background-color: #fff;
}

.section__history {
  .section__title {
    z-index: 11;
  }
}
</style>
