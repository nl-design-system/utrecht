<script lang="ts">
  import { defineComponent, getCurrentInstance, ref } from "vue";
  import UtrechtLink from "./Link.vue";
  import { useMicrodataItem, useMicrodataProp } from "./helpers/microdata";

  export default defineComponent({
    name: "UtrechtBreadcrumbLink",
    components: { UtrechtLink },
    props: {
      href: { type: String, required: true },
      current: { type: Boolean, required: false, default: false },
      rel: { type: String, required: false, default: "" },
      index: { type: Number, required: false, default: undefined },
    },
    methods: { ref, useMicrodataProp, useMicrodataItem, getCurrentInstance },
  });
</script>

<template>
  <li
    class="utrecht-breadcrumb__item"
    v-bind="useMicrodataItem({ type: 'https://schema.org/ListItem', prop: 'itemListElement' })"
  >
    <UtrechtLink
      v-bind="{ ...useMicrodataProp('item') }"
      :ref="ref"
      class="utrecht-breadcrumb__link"
      :aria-current="current && 'location'"
      :href="href"
      :rel="rel"
    >
      <span class="utrecht-breadcrumb__text" v-bind="{ ...useMicrodataProp('name') }">
        <slot />
      </span>
      <meta
        v-if="typeof index === 'number'"
        v-bind="{ ...useMicrodataProp('position') }"
        :content="String(index + 1)"
      />
    </UtrechtLink>
  </li>
</template>

<style src="@utrecht/components/breadcrumb/css/index.scss"></style>
