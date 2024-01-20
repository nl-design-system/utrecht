<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UtrechtStrong",
});
</script>

<template>
  <strong v-bind="$attrs" class="utrecht-emphasis utrecht-emphasis--strong">
    <slot></slot>
  </strong>
</template>

<style src="@utrecht/components/skip-link/css/index.scss"></style>
