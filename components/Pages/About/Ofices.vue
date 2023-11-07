<template>
  <TheSection :section-title="'Отделы производства'">
    <template #default>
      <div>
        <div class="first:border-t border-stroke_100 dark:border-dark_stroke_100 md:py-40 py-24 border-b"
          v-for="(item, index) in data" :key="index">
          <div class="container">
            <div class="flex gap-20 justify-between items-start max-md:flex-col">
              <div>
                <span class="block text-blue_200 dark:dark_blue_100 md:text-24 text-18 font-semibold md:mb-8 mb-16">{{
                  item.title }}</span>
                <p class="text-black_100 dark:text-dark_black_100 md:text-20 text-16 font-light leading-28">
                  {{ item.text }}
                </p>
              </div>
              <button
                class="flex p-12 border border-black_100 dark:border-dark_black_100 items-center justify-center sm:max-w-167 w-full font-medium text-16 text-black_100 dark:text-dark_black_100">
                Узнать больше
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </TheSection>
</template>

<script lang="ts" setup>
const data = [
  {
    title: "Конструкторский отдел",
    text: "В которую входит такие подразделения, как трикотажное и швейное производство",
    link: "",
  },
  {
    title: "Вышивальный отдел",
    text: "В которую входит такие подразделения, как трикотажное и швейное производство",
    link: "",
  },
  {
    title: "Экспериментальный отдел",
    text: "В которую входит такие подразделения, как трикотажное и швейное производство",
    link: "",
  },
  {
    title: "Швейный отдел",
    text: "В которую входит такие подразделения, как трикотажное и швейное производство",
    link: "",
  },
];
</script>

<style></style>
