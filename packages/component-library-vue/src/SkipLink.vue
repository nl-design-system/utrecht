<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtSkipLink",
    props: {
      href: {
        type: String,
        default: undefined,
        required: false,
      },
    },
  });
</script>

<template>
  <p>
    <a v-bind="$attrs" :href="$props.href" class="utrecht-skip-link utrecht-skip-link--visible-on-focus">
      <slot></slot>
    </a>
  </p>
</template>

<style src="@utrecht/components/skip-link/css/index.scss"></style>
