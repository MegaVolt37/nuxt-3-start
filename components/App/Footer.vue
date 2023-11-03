<template>
  <footer>
    <div class="bg-black_200">
      <div class="container">
        <div class="grid py-40 sm:grid-cols-4 max-sm:justify-items-center sm:gap-20 gap-16">
          <div class="sm:col-span-2 flex flex-col justify-between max-sm:items-center gap-16 max-sm:mb-8">
            <div>
              <NuxtLink class="block w-fit" to="/">
                <img width="150" height="31" src="@/assets/images/footer_logo.png" alt="footer logo" />
              </NuxtLink>
            </div>
            <nav class="">
              <ul class="flex justify-start items-center gap-42">
                <li v-for="(item, index) in links" :key="index">
                  <NuxtLink class="md:text-12 text-16 text-gray_200" :to="item.url">{{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
          <div class="sm:col-span-1 flex flex-col gap-20 justify-between mb-8 max-sm:items-center">
            <div class="flex flex-col gap-8 max-sm:items-center">
              <span class="font-semibold text-12 text-white_100">Телефоны</span>
              <p class="text-16 text-white_100 max-sm:text-center">+7 800 222 25 20</p>
            </div>
            <div class="flex flex-col gap-8 max-sm:items-center">
              <span class="font-semibold text-12 text-white_100">Почта</span>
              <p class="text-16 text-white_100 max-sm:text-center">email@email.com</p>
            </div>
          </div>
          <div class="sm:col-span-1 flex flex-col gap-20 justify-between">
            <div class="flex flex-col gap-8 max-sm:items-center">
              <span class="font-semibold text-12 text-white_100">Адрес</span>
              <p class="text-16 text-white_100 leading-22 max-sm:text-center">
                Ставрополь,<br />проспект Кулакова, 18
              </p>
            </div>
            <div class="flex flex-col gap-8 max-sm:items-center">
              <span class="font-semibold text-12 text-white_100">Соцсети</span>
              <div class="flex items-center gap-8 max-sm:items-center">
                <NuxtLink class="w-32 h-32 border border-gray_200 rounded-full flex items-center justify-center"
                  v-for="(item, index) in social" :key="index" :to="item.link">
                  <NuxtIcon class="text-gray_200 max-sm:text-center" :name="item.icon" filled />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black_100">
      <div class="container">
        <div class="grid py-40 sm:grid-cols-4 max-sm:justify-items-center sm:gap-20 gap-16">
          <div class="sm:col-span-3">
            <span class="text-white_100 text-12 font-extralight">© NELLEX 2023 </span>
          </div>
          <div class="sm:col-span-1">
            <NuxtLink class="text-white_100 text-12 underline" to="">Политика конфиденциальности</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const links = [
  {
    name: "О нас",
    url: "/about",
  },
  {
    name: "Бренды",
    url: "/brands",
  },
  {
    name: "Контакты",
    url: "/contact-us",
  },
];
const social = [
  {
    icon: "social/VK",
    link: "",
  },
  {
    icon: "social/Telegram",
    link: "",
  },
  {
    icon: "social/OK",
    link: "",
  },
];
</script>

<style></style>
