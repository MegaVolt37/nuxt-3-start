<template>
  <TheSection :section-title="'Процесс производства'">
    <template #default>
      <div class="container">
        <div class="grid md:grid-cols-3 grid-cols-2 md:gap-20 gap-16">
          <div
            class="p-20 flex items-center justify-center border border-stroke_100 dark:border-dark_stroke_100 md:h-[115px] -h-[80px]"
            v-for="item of data" :key="item">
            <img class="object-contain w-full h-full" :src="item" alt="" />
            <!-- <NuxtIcon :name="'logo_partnears/' + item" filled /> -->
          </div>
        </div>
      </div>
    </template>
  </TheSection>
</template>

<script lang="ts" setup>
import zolla from "@/assets/images/logo_partnears/zolla.svg";
import zasport from "@/assets/images/logo_partnears/zasport.svg";
import trialsport from "@/assets/images/logo_partnears/trialsport.svg";
import sportmaster from "@/assets/images/logo_partnears/sportmaster.svg";
import decalthon from "@/assets/images/logo_partnears/decalthon.svg";
import baon from "@/assets/images/logo_partnears/baon.svg";
const data = [zolla, zasport, trialsport, sportmaster, decalthon, baon];
</script>

<style></style>
