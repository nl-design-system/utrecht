<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtSeparator",
  });
</script>

<template>
  <hr class="utrecht-separator" v-bind="$attrs" />
</template>

<style src="@utrecht/components/separator/css/index.scss"></style>
