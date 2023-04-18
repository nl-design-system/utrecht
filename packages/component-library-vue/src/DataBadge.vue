<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UtrechtDataBadge",
    props: {
      dateTime: { type: String, required: false, default: undefined },
      value: { type: String, required: false, default: undefined },
    },
  });
</script>

<template>
  <time v-if="typeof dateTime !== 'undefined'" :datetime="dateTime" class="utrecht-badge-data">
    <slot name="dateTimeSlotContent" />
  </time>

  <data v-else-if="typeof value !== 'undefined'" :value="value" class="utrecht-badge-data">
    <slot name="valueSlotContent" />
  </data>

  <span v-else class="utrecht-badge-data"><slot /></span>
</template>

<style src="@utrecht/components/badge-data/css/index.scss"></style>
