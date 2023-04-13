<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtDataListKey",
  });
</script>

<template>
  <dt class="utrecht-data-list__item-key">
    <slot />
  </dt>
</template>

<style src="@utrecht/components/data-list/css/index.scss"></style>
