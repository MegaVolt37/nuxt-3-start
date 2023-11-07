<template>
  <header
    class="bg-white_100 dark:bg-dark_white_100 py-16 border-b border-b-stroke_100 dark:border-b-dark_stroke_100 sticky top-0 z-50"
  >
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <NuxtLink to="/">
          <NuxtIcon class="h-30 w-150 cursor-pointer" name="logo_header" filled />
        </NuxtLink>
        <nav class="md:block hidden">
          <ul class="flex items-center gap-40 max-[992px]:gap-20">
            <li v-for="(item, index) in links" :key="index">
              <NuxtLink
                class="text-20 max-[992px]:text-16 font-light text-black_100 dark:text-dark_black_100"
                :to="item.url"
                >{{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="md:grid hidden items-center gap-x-20 grid-cols-2">
          <NuxtLink
            class="block min-w-140 text-16 text-black_100 dark:text-dark_black_100"
            to="tel:+79999999999"
            >+7 999 999 99 99</NuxtLink
          >
          <button
            class="bg-black_100 dark:bg-dark_black_100 text-white_100 dark:text-dark_white_100 flex justify-center items-center max-w-150 h-46 w-full text-16 font-medium"
          >
            Связаться
          </button>
        </div>
        <div class="md:hidden block">
          <button
            class="burger after:bg-black_100 dark:after:bg-dark_black_100 before:bg-black_100 dark:before:bg-dark_black_100 before:shadow-[0_11px_0] before:shadow-black_100 dark:before:shadow-dark_black_100"
            :class="{ active: isOpenMenu }"
            @click="openMenu"
          ></button>
          <el-drawer
            class="text-white_100 bg-white_100 dark:text-dark_white_100 dark:bg-dark_white_100 !border-stroke_100"
            :direction="'ttb'"
            :with-header="false"
            v-model="isOpenMenu"
            :size="'100%'"
            :before-close="handleClose"
            @close="closeDrawer"
          >
            <el-collapse
              v-model="activeName"
              @change=""
              accordion
              class="!border-none -mt-20 mb-20"
            >
              <div @click="isOpenMenu = false">
                <NuxtLink to="/about" class="block">
                  <el-collapse-item
                    :disabled="true"
                    @click="isOpenMenu = false"
                    class="text-stroke_100 dark:text-dark_stroke_100"
                  >
                    <template #title>
                      <span
                        class="text-black_100 dark:text-dark_black_100 text-20 font-semibold"
                        >О нас</span
                      >
                    </template>
                  </el-collapse-item>
                </NuxtLink>
              </div>
              <el-collapse-item
                name="1"
                class="text-stroke_100 dark:text-dark_stroke_100"
              >
                <template #title>
                  <div class="flex items-center justify-between w-full">
                    <span
                      class="text-black_100 dark:text-dark_black_100 text-20 font-semibold"
                      >Бренды</span
                    >
                    <!-- <el-icon class="header-icon"> </el-icon> -->
                    <NuxtIcon
                      class="head er-icon text-black_100 dark:text-dark_black_100"
                      name="CaretDown"
                      filled
                    />
                  </div>
                </template>
                <ul class="pl-24 flex flex-col gap-18">
                  <li class="text-black_100 dark:text-dark_black_100 font-light text-20">
                    Vilermo
                  </li>
                  <li class="text-black_100 dark:text-dark_black_100 font-light text-20">
                    Regarzo
                  </li>
                  <li class="text-black_100 dark:text-dark_black_100 font-light text-20">
                    Tezza
                  </li>
                </ul>
              </el-collapse-item>
              <div @click="isOpenMenu = false">
                <NuxtLink to="/contact-us" class="block">
                  <el-collapse-item
                    @click="isOpenMenu = false"
                    class="text-stroke_100 dark:text-dark_stroke_100"
                    ><template #title>
                      <span
                        class="text-black_100 dark:text-dark_black_100 text-20 leading-28 font-semibold"
                        >Контакты</span
                      ></template
                    ></el-collapse-item
                  >
                </NuxtLink>
              </div>
            </el-collapse>
            <div class="flex flex-col gap-24 mt-auto pb-12">
              <NuxtLink
                class="text-black_100 dark:text-dark_black_100 text-18 flex items-center gap-16"
              >
                <NuxtIcon
                  class="text-black_100 dark:text-dark_black_100"
                  name="phone"
                  filled
                />+7 999 999 99 99
              </NuxtLink>
              <NuxtLink
                class="text-black_100 dark:text-dark_black_100 text-18 flex items-center gap-16"
              >
                <NuxtIcon
                  class="text-black_100 dark:text-dark_black_100"
                  name="mail"
                  filled
                />
                email@email.com
              </NuxtLink>
              <button
                class="mt-16 w-full text-16 font-medium text-white_100 bg-blue_200 py-16"
              >
                Связаться
              </button>
            </div>
          </el-drawer>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const route = useRoute();
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
const isOpenMenu = ref(false);
const activeName = ref("0");
const openMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
};

const handleClose = (done: () => void) => {
  done();
};
watch(
  () => route.path,
  () => {
    isOpenMenu.value = false;
  },
  { deep: true }
);
</script>

<style lang="scss">
.burger {
  cursor: pointer;
  display: block;
  position: relative;
  border: none;
  background: transparent;
  width: 40px;
  height: 25px;
}

.burger::before,
.burger::after {
  content: "";
  left: 0;
  position: absolute;
  display: block;
  width: 100%;
  height: 3px;
  border-radius: 3px;
}

.burger::before {
  top: 0;
  // box-shadow: 0 11px 0 theme("colors.black_100", "colors.dark_black_100");
  transition: box-shadow 0.3s 0.15s, top 0.3s 0.15s, transform 0.3s;
}

.burger::after {
  bottom: 0;
  transition: bottom 0.3s 0.15s, transform 0.3s;
}

.burger.active::before {
  top: 11px;
  transform: rotate(45deg);
  box-shadow: 0 6px 0 rgba(0, 0, 0, 0);
  transition: box-shadow 0.15s, top 0.3s, transform 0.3s 0.15s;
}

.burger.active::after {
  bottom: 11px;
  transform: rotate(-45deg);
  transition: bottom 0.3s, transform 0.3s 0.15s;
}

.el-overlay {
  top: 63px;

  .el-drawer__body {
    display: flex;
    flex-direction: column;
    gap: 20;
    margin-bottom: 63px;
    background-color: currentColor !important;
  }
}

.el-collapse {
}

.el-collapse-item__header,
.el-collapse-item__content,
.el-collapse-item__wrap {
  background: transparent;
}

.el-collapse-item__arrow {
  display: none;
}

.header-icon {
  transition: all 0.3s ease-in-out;
}

.el-collapse-item__header {
  height: 76px;
  border-color: currentColor;
  color: currentColor;
}
.el-collapse-item.is-disabled .el-collapse-item__header {
  cursor: pointer;
  color: inherit;
}
.el-collapse-item__wrap {
  border-color: currentColor;
  color: currentColor;
}

.el-collapse-item.is-active .header-icon {
  rotate: 180deg;
}
</style>
