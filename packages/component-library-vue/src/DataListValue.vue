<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UtrechtDataListValue",
  props: {
    value: { type: [Number, String], required: false, default: "" },
    emptyDescription: { type: String, required: false, default: "" },
    multiline: { type: Boolean, required: false },
    notranslate: { type: Boolean, required: false },
  },
  data() {
    return {
      empty: this.$props.value === "" || this.$props.value === undefined,
    };
  },
});
</script>

<template>
  <dd
    class="utrecht-data-list__item-value utrecht-data-list__item-value--html-dd"
    :class="{ 'utrecht-data-list__item-value--multiline': multiline }"
    :translate="typeof notranslate === 'boolean' ? (notranslate ? 'no' : 'yes') : undefined"
  >
    <span v-if="empty" :aria-label="emptyDescription">-</span>
    <slot v-else />
  </dd>
</template>

<style src="@utrecht/components/data-list/css/index.scss"></style>
