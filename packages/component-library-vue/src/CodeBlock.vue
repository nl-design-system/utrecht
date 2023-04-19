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

<style src="@utrecht/components/code-block/css/index.scss"></style>
