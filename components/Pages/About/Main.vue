<template>
  <section
    class="home_section-top bg-bg_about bg-no-repeat relative bg-cover bg-center md:py-[12%] max-lg:flex md:items-center items-end max-lg:min-h-[465px] pb-24 pt-[30%]">
    <div class="container">
      <div class="max-w-720 flex flex-col gap-24 relative z-[1]">
        <h1 class="lg:text-72 text-34 font-semibold text-white_100 lg:leading-64 leading-33">
          О компании
        </h1>
        <p class="lg:text-20 text-16 lg:leading-30 leading-22 text-white_100">
          В которую входит такие подразделения, как трикотажное и швейное производство, а
          также торговые марки оптово-рознечной торговли
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.home_section-top {
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(90deg,
        rgba(0, 0, 0, 0.71),
        rgb(0, 0, 0, 0.52),
        rgb(0, 0, 0, 0));
  }
}
</style>
