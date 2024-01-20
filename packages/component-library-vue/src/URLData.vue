<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UtrechtURLData",
});
</script>

<template>
  <bdi translate="no" class="utrecht-url-data">
    <slot />
  </bdi>
</template>

<style src="@utrecht/components/url-data/css/index.scss"></style>
