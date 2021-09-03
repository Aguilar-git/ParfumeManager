<template>
  <v-app dark>
    <component :is="layout" class="mt-2">
      <vue-extend-layouts />
    </component>
  </v-app>
</template>

<script>
import AuthLayout from "./layouts/authorizationLayout";
import DefaultLayout from "./layouts/defaultLayout";

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
