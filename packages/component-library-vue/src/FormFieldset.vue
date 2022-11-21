<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtFormFieldset",
    props: {
      describedby: {
        type: String,
        required: false,
        default: undefined,
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
      },
      invalid: {
        type: Boolean,
        required: false,
        default: false,
      },
      label: {
        type: String,
        required: false,
        default: undefined,
      },
      labelledby: {
        type: String,
        required: false,
        default: undefined,
      },
      role: {
        type: String,
        required: false,
        default: null,
      },
      name: {
        type: String,
        required: false,
        default: "",
      },
      form: {
        type: String,
        required: false,
        default: null,
      },
    },
  });
</script>

<template>
  <div class="utrecht-form-fieldset">
    <fieldset
      :aria-describedby="describedby || undefined"
      :aria-invalid="invalid || undefined"
      :aria-label="label || undefined"
      :aria-labelledby="labelledby || undefined"
      class="utrecht-form-fieldset__fieldset utrecht-form-fieldset__fieldset--html-fieldset"
      :disabled="disabled"
      :form="form || undefined"
      :name="name || undefined"
      :role="role || undefined"
    >
      <slot />
    </fieldset>
  </div>
</template>

<style src="@utrecht/components/form-fieldset/css/index.scss"></style>
