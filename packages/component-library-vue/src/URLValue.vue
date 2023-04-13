<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtURLValue",
  });
</script>

<template>
  <bdi translate="no" class="utrecht-url">
    <slot />
  </bdi>
</template>

<style src="@utrecht/components/url/css/index.scss"></style>
