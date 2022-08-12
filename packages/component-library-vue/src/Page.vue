<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtPage",
  });
</script>

<template>
  <div class="utrecht-page">
    <slot />
  </div>
</template>

<style src="@utrecht/components/page/css/index.scss"></style>
