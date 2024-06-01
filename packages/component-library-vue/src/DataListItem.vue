<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UtrechtDataListItem",
});
</script>

<template>
  <div class="utrecht-data-list__item">
    <slot />
  </div>
</template>

<style src="@utrecht/data-list-css/dist/index.css"></style>
