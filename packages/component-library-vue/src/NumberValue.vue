<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtNumberValue",
    props: {
      value: { type: [Number, String], required: false, default: undefined },
    },
  });
</script>

<template>
  <data
    :value="typeof value === 'string' || typeof value === 'number' ? String(value) : undefined"
    class="utrecht-value-number"
  >
    <slot />
  </data>
</template>

<style src="@utrecht/components/value-number/css/index.scss"></style>
