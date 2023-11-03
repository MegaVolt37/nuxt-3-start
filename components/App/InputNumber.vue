<template>
  <i-mask-component v-model="model" v-model:unmasked="unmaskedValue" mask="+7 (000) 000-00-00"
    class="bg-transparent py-12 border-b border-b-dark_black_100 px-16 focus:outline-none placeholder:text-16 text-16 text-dark_black_100 placeholder:text-dark_black_100"
    :class="{ '!border-b-red-600': error }" type="text" placeholder="Номер телефона" />
</template>

<script setup lang="ts">
import { IMaskComponent } from "vue-imask";

interface Props {
  type?: string;
  prefix?: string;
  modelValue: any;
  disabled?: boolean;
  error?: boolean;
  isPreview?: boolean;
  transformValue?: (v: any) => any;
}
const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);
const attrs = useAttrs();

const maskedValue = ref(props.modelValue);
const unmaskedValue = ref("");

const model = computed({
  get() {
    return maskedValue.value;
  },

  set(v) {
    // if (!maskedValue.value && !v) return;
    console.log(v);
    maskedValue.value = v;
    nextTick(() => {
      // const emitValue = unmaskedValue.value;
      emit("update:modelValue", +unmaskedValue.value);
    });
  },
});
</script>

<style scoped></style>
