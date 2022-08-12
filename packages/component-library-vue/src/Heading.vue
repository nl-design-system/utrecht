<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtHeading",
    props: {
      level: { type: Number, required: true, default: 6 },
    },
  });
</script>

<template>
  <h1 v-if="level == 1" class="utrecht-heading-1">
    <slot></slot>
  </h1>
  <h2 v-else-if="level == 2" class="utrecht-heading-2">
    <slot></slot>
  </h2>
  <h3 v-else-if="level == 3" class="utrecht-heading-3">
    <slot></slot>
  </h3>
  <h4 v-else-if="level == 4" class="utrecht-heading-4">
    <slot></slot>
  </h4>
  <h5 v-else-if="level == 5" class="utrecht-heading-5">
    <slot></slot>
  </h5>
  <h6 v-else class="utrecht-heading-6">
    <slot></slot>
  </h6>
</template>

<style scoped src="@utrecht/components/heading-1/css/index.scss"></style>
<style scoped src="@utrecht/components/heading-2/css/index.scss"></style>
<style scoped src="@utrecht/components/heading-3/css/index.scss"></style>
<style scoped src="@utrecht/components/heading-4/css/index.scss"></style>
<style scoped src="@utrecht/components/heading-5/css/index.scss"></style>
<style scoped src="@utrecht/components/heading-6/css/index.scss"></style>
