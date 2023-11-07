<template>
  <TheSection class="brands__main" :section-title="'Бренды<br/>в&nbsp;составе NELLEX'">
    <template #title>
      <div
        class="brands__main-category flex gap-20 md:flex-wrap md:justify-end max-md:w-full max-md:overflow-x-auto max-md:pb-20 relative z-[1] max-md:mt-12"
      >
        <button
          class="flex-[1_0_auto] p-12 border border-black_100 dark:border-dark_black_100 items-center justify-center max-w-125 w-full font-medium text-16 text-black_100 dark:text-dark_black_100"
          v-for="(item, index) in data_category"
          :key="index"
        >
          {{ item.name }}
        </button>
      </div>
    </template>
  </TheSection>
</template>

<script lang="ts" setup>
const data_category = [
  {
    name: "Vilermo",
  },
  {
    name: "Regarzo",
  },
  {
    name: "Tezza",
  },
  {
    name: "Nell",
  },
  {
    name: "Amikosho",
  },
  {
    name: "Modibodi",
  },
];
</script>

<style lang="scss">
.brands__main {
  .section__title {
    @apply items-start gap-20 max-md:flex-col;
  }
  &-category::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  &-category::-moz-scrollbar {
    width: 0;
    display: none;
  }
}
</style>
