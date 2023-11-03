<template>
  <TheSection :section-title="'О нас в цифрах'">
    <template #title>
      <button
        class="md:flex hidden p-12 border border-black_100 dark:border-dark_black_100 items-center justify-center max-w-167 w-full font-medium text-16 text-black_100 dark:text-dark_black_100">
        Узнать больше
      </button>
    </template>
    <template #default>
      <div class="container">
        <div class="md:mt-80 mt-32">
          <div>
            <div class="lg:flex flex-wrap grid grid-cols-2 items-center md:gap-20 gap-16">
              <div class="flex-1 grid p-20 border border-stroke_100 dark:border-dark_stroke_100"
                v-for="(item, index) in counts" :key="index">
                <span class="md:text-90 text-42 md:leading-90 leading-56 text-blue_100/70 dark:text-dark_blue_100/70">{{
                  item.count }}</span>
                <p class="md:text-24 text-16 md:leading-33 leading-25 text-black_100 dark:text-dark_black_100">
                  {{ item.text }}
                </p>
              </div>
            </div>
            <div class="md:mt-40 mt-16 max-w-895 grid gap-8">
              <p class="font-light md:text-20 text-16 md:leading-30 leading-22 text-black_100 dark:text-dark_black_100">
                ООО &laquo;Неллекс&raquo;&nbsp;&mdash; Техническое оснащение производства
                позволяет выполнять самые сложные швейные операции и&nbsp;производить
                широкий ассортимент такой продукции
              </p>
              <p class="font-light md:text-20 text-16 md:leading-30 leading-22 text-black_100 dark:text-dark_black_100">
                В&nbsp;свою очередь, парк вязальных машин, обеспечивает выпуск более
                800&nbsp;000 головные уборы и&nbsp;20&nbsp;000 свитеров в&nbsp;год.
              </p>
            </div>
            <button
              class="md:hidden flex mt-32 p-12 border border-black_100 dark:border-dark_black_100 items-center justify-center w-full font-medium text-16 text-black_100 dark:text-dark_black_100">
              Узнать больше
            </button>
          </div>
        </div>
      </div>
    </template>
  </TheSection>
</template>

<script lang="ts" setup>
const counts = [
  {
    count: 6,
    text: "брендов",
  },
  {
    count: 100,
    text: "магазинов",
  },
  {
    count: 200,
    text: "поставщиков",
  },
  {
    count: 2000,
    text: "сотрудников",
  },
];
</script>

<style></style>
