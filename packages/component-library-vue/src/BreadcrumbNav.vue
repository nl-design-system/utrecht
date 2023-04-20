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
        headingId: this.$props.label ? getCurrentInstance()?.uid.toString() : undefined,
      };
    },
    methods: { useMicrodataItem, getCurrentInstance },
  });
</script>

<template>
  <nav
    :class="[
      'utrecht-breadcrumb',
      { 'utrecht-breadcrumb-nav--arrows': appearance === 'arrows' },
    ]"
    :aria-labelledby="headingId"
  >
    <UtrechtHeading :id="headingId" class="utrecht-breadcrumb__heading" :level="headingLevel ?? 2" aria-hidden="true">
      {{ label }}
    </UtrechtHeading>

    <ol class="utrecht-breadcrumb__list" v-bind="{...useMicrodataItem({type: 'https://schema.org/BreadcrumbList' })}">
      <slot />
    </ol>
  </nav>
</template>

<style src="@utrecht/components/breadcrumb/css/index.scss"></style>
