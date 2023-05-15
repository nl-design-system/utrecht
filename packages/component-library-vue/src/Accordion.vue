<script lang="ts">
  import { defineComponent, ref } from "vue";
  import UtrechtHeading from "@/Heading.vue";
  import { useId } from "./helpers/uniqueId";

  export default defineComponent({
    name: "UtrechtAccordion",
    components: { UtrechtHeading },
    props: {
      group: {
        type: Boolean,
        default: "",
        required: false,
      },
      heading: {
        type: String,
        default: "",
        required: false,
      },
      headingLevel: {
        type: Number,
        default: 2,
        required: false,
      },
    },
    data() {
      return {
        headingId: useId(),
      };
    },
    methods: { ref },
  });
</script>

<template>
  <UtrechtHeading v-if="heading && typeof headingLevel === 'number'" :level="headingLevel ?? 1"
    >{{ heading }}</UtrechtHeading
  >
  <div
    v-bind="$props"
    :ref="ref"
    class="utrecht-accordion"
    :role="group ? 'group' : undefined"
    :aria-labelledby="group ? headingId : undefined"
  >
    <slot></slot>
  </div>
</template>

<style src="@utrecht/components/accordion/css/index.scss"></style>
