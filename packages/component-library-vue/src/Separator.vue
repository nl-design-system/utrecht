<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UtrechtSeparator',
});
</script>

<template>
  <hr class="utrecht-separator" v-bind="$attrs" />
</template>

<style src="@utrecht/separator-css/dist/index.css"></style>
