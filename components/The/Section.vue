<template>
  <section class="md:my-120 my-64">
    <div>
      <div class="container">
        <div class="section__title relative flex items-center justify-between md:mb-48 mb-32" :class="{}">
          <h2 class="md:text-40 text-24 md:leading-44 leading-28 font-semibold text-black_100 dark:text-dark_black_100">
            {{ sectionTitle }}
          </h2>
          <slot name="title" />
        </div>
      </div>
      <div>
        <slot />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface IProps {
  sectionTitle?: string;
}
defineProps<IProps>();
</script>

<style></style>
