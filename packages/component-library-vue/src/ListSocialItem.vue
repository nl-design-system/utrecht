<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UtrechtListSocialItem",
});
</script>

<template>
  <li class="utrecht-list-social__item" v-bind="$attrs">
    <slot></slot>
  </li>
</template>

<style src="@utrecht/list-social-css/css/index.scss"></style>
