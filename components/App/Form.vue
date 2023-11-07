<template>
  <section class="home_section-form bg-bg_form bg-no-repeat relative bg-cover bg-center md:py-80 py-32">
    <div class="container relative z-[1]">
      <div>
        <h2 class="md:text-40 text-24 md:mb-32 mb-24 font-semibold md:leading-44 leading-25 text-dark_black_100">
          Готовы начать сотрудничать?<br />Остались вопросы?
        </h2>
        <Form class="flex flex-wrap sm:gap-20 gap-16" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
          <Field v-slot="{ field, errorMessage, handleChange }" name="name" type="text">
            <input v-bind="field" :value="field.value" @change="handleChange" placeholder="Ваше имя"
              class="flex-1 bg-transparent py-12 border-b border-b-dark_black_100 px-16 focus:outline-none placeholder:text-16 text-16 text-dark_black_100 placeholder:text-dark_black_100"
              :class="{ '!border-b-red-600': errorMessage }" type="text" />
          </Field>

          <Field v-slot="{ field, errorMessage, handleChange }" name="phone" type="number">
            <input v-maska data-maska="+7 (9##) ###-##-##" v-bind="field" :value="field.value" @change="handleChange"
              placeholder="Номер телефона"
              class="flex-1 bg-transparent py-12 border-b border-b-dark_black_100 px-16 focus:outline-none placeholder:text-16 text-16 text-dark_black_100 placeholder:text-dark_black_100"
              :class="{ '!border-b-red-600': errorMessage }" type="text" />
          </Field>
          <div class="lg:flex-1 md:flex-[0_0_49%] flex-auto max-sm:mt-12">
            <button class="text-16 font-medium py-12 px-12 w-full bg-white_100 mb-12">
              Отправить
            </button>

            <label for="check" class="checkbox-label">
              <Field name="check" :value="true" type="checkbox" id="check" class="checkbox"
                :class="{ error: errors.check }" />
              <!-- <input v-bind="field" v-model="field.value" type="checkbox" id="checkbox" class="checkbox" /> -->
              <span class="checkbox-view">
                <div class="checkbox-icon"></div>
              </span>
              Согласие на обработку персональных данных
            </label>
          </div>
        </Form>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Field, Form, ErrorMessage } from "vee-validate";
import { boolean, object, string } from "yup";
const phoneRegex = (v) => v.replace(/\D/g, "");
const schema = object({
  phone: string()
    .required()
    .test("len", "Неверная длина номера телефона", (v) =>
      /^\d{11}$/.test(v.replace(/\D/g, ""))
    ),
  name: string().required(),
  // check: boolean().defined().isTrue(),
  check: boolean().isTrue().required(),
});
const onSubmit = (values) => {
  if (!schema.cast(values)) return;
  values.phone = phoneRegex(values.phone);
  console.log(values);
};
</script>

<style lang="scss">
.home_section-form {
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: theme("colors.blue_300");
    opacity: 70%;
  }
}

.checkbox {
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.checkbox-label {
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: theme("colors.white_100");
}

.checkbox-view {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17px;
  height: 17px;
  margin-right: 8px;
  border: 1px solid theme("colors.white_100");
  // background: #fff;
  transition: 0.3s;
}

.checkbox.error~.checkbox-view {
  border: 1px solid red;
}

.checkbox-icon {
  width: 8px;
  height: 8px;
  background-color: theme("colors.white_100");
  opacity: 0;
  transition: 0.3s;
}

.checkbox:checked+.checkbox-view {
  // background-color: green;
}

.checkbox:checked+.checkbox-view .checkbox-icon {
  opacity: 1;
}
</style>
