<template>
  <v-app>
    <template>
      <v-row>
        <v-spacer></v-spacer>
        <v-switch label="Тема" @change="toggleDarkTheme"></v-switch>
      </v-row>
    </template>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleDarkTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      console.log(this.$vuetify.theme.dark);
    },
  },
};
</script>

<style>
</style>