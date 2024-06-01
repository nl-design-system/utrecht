<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";
import UtrechtHeading from "./Heading.vue";
import { useMicrodataItem } from "./helpers/microdata";
import { useModelWrapper } from "./helpers/modelWrapper";

export default defineComponent({
  name: "UtrechtBreadcrumbNav",
  components: { UtrechtHeading },
  props: {
    appearance: { type: String, required: false, default: "arrows" },
    headingLevel: { type: Number, required: false, default: 2 },
    label: { type: String, required: false, default: "" },
  },
  setup(props, { emit }) {
    return {
      value: useModelWrapper(props, emit),
    };
  },
  data() {
    return {
      headingId: this.$props.label ? String(getCurrentInstance()?.uid) : undefined,
    };
  },
  methods: { useMicrodataItem, getCurrentInstance },
});
</script>

<template>
  <nav
    :class="['utrecht-breadcrumb-nav', { 'utrecht-breadcrumb-nav--arrows': appearance === 'arrows' }]"
    :aria-labelledby="headingId"
  >
    <UtrechtHeading
      :id="headingId"
      class="utrecht-breadcrumb-nav__heading"
      :level="headingLevel ?? 2"
      aria-hidden="true"
    >
      {{ label }}
    </UtrechtHeading>

    <ol
      class="utrecht-breadcrumb-nav__list utrecht-breadcrumb-nav__list--html-ol"
      v-bind="{ ...useMicrodataItem({ type: 'https://schema.org/BreadcrumbList' }) }"
    >
      <slot />
    </ol>
  </nav>
</template>

<style src="@utrecht/breadcrumb-nav-css/dist/index.css"></style>
