<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UtrechtCodeBlock",
});
</script>

<template>
  <pre class="utrecht-code-block">
      <code class="utrecht-code-block__content">
          <slot/>
      </code>
  </pre>
</template>

<style src="@utrecht/code-block-css/css/index.scss"></style>
