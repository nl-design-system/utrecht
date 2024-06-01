<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UtrechtDataList",
  props: {
    appearance: { type: String, required: false, default: "rows" },
  },
});
</script>

<template>
  <dl
    :class="{ 'utrecht-data-list--rows': appearance === 'rows' }"
    class="utrecht-data-list utrecht-data-list--html-dl"
  >
    <slot />
  </dl>
</template>

<style src="@utrecht/data-list-css/css/index.scss"></style>
