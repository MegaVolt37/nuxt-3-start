<template>
  <TheSection>
    <div class="container">
      <div class="flex max-lg:flex-col">
        <h2
          class="lg:max-w-285 max-lg:mb-32 md:text-40 text-24 md:leading-44 leading-25 font-semibold text-black_100 dark:text-dark_black_100">
          Как мы работаем
        </h2>
        <ul class="flex-1">
          <li
            class="flex gap-16 p-24 justify-between first:border-t border-b first:border-t-stroke_100 border-b-stroke_100 dark:first:border-t-dark_stroke_100 dark:border-b-dark_stroke_100"
            v-for="({ text }, index) in data" :key="index">
            <span class="font-semibold text-24 leading-33 text-blue_100 dark:text-dark_blue_100">{{ index + 1 }}</span>
            <p
              class="font-light max-w-566 w-full md:text-20 text-16 md:leading-30 leading-20 text-black_100 dark:text-dark_black_100">
              {{ text }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </TheSection>
</template>

<script lang="ts" setup>
const data = [
  {
    text: "В которую входит такие подразделения, как трикотажное и швейное производство",
  },
  {
    text: "В которую входит такие подразделения, как трикотажное и швейное производство",
  },
  {
    text: "В которую входит такие подразделения, как трикотажное и швейное производство",
  },
  {
    text: "В которую входит такие подразделения, как трикотажное и швейное производство",
  },
];
</script>

<style></style>
