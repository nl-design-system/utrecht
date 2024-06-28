<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UtrechtArticle',
});
</script>

<template>
  <article class="utrecht-article">
    <slot />
  </article>
</template>

<style src="@utrecht/article-css/dist/index.css"></style>
