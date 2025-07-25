<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UtrechtActionGroup',
});
</script>

<template>
  <div class="utrecht-action-group">
    <slot />
  </div>
</template>

<style src="@utrecht/action-group-css/dist/index.css"></style>
