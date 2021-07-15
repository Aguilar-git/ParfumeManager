<template>
  <nav>
    <v-navigation-drawer expand-on-hover app permanent>
      <v-subheader>
        <v-icon>mdi-menu</v-icon>
      </v-subheader>
      <v-divider></v-divider>
      <v-list>
        <v-list-item-group color="purple lighten-2">
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="grey--text">
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      style="background: white; border-bottom: 1px solid rgba(0, 0, 0, 0.12)"
      height="49"
      dense
      flat
      app
    >
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Max</span>
        <span>Type</span>
      </v-toolbar-title>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { icon: "mdi-home", text: "Главная", route: "/Main" },
        {
          icon: "mdi-account-cowboy-hat",
          text: "Рапорты",
          route: "/Reports",
        },
        { icon: "mdi-book-edit-outline", text: "Акты", route: "/Acts" },
        {
          icon: "mdi-cog-outline",
          text: "Настройки",
          route: "/Settings",
        },
      ],
    };
  },
  methods: {
    removeCookie() {
      localStorage.setItem("login", null);
      console.log(localStorage.getItem("login"));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>