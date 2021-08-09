<template>
  <v-app class="grey lighten-4">
    <Navbar />
    <v-main class="pt-10">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "worker-layout",
  components: { Navbar },
};
</script>

<style scoped>
</style>