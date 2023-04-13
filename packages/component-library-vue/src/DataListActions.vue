<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtDataListActions",
  });
</script>

<template>
  <dd class="utrecht-data-list__actions utrecht-data-list__actions--html-dd">
    <slot />
  </dd>
</template>

<style src="@utrecht/components/data-list/css/index.scss"></style>
