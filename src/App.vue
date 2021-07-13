<template>
  <v-app dark>
    <component :is="layout" class="mr-5 mt-2">
      <vue-extend-layouts />
    </component>
  </v-app>
</template>

<script>
import AuthLayout from "./layouts/AuthorizationLayout.vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";

export default {
  name: "App",
  computed: {
    layout() {
      return this.$route.meta.layout || "default-layout";
    },
  },
  components: {
    AuthLayout,
    DefaultLayout,
  },
};
</script>
