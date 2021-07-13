<template>
  <nav>
    <v-navigation-drawer expand-on-hover app permanent>
      <v-list>
        <v-subheader>
          <v-icon>mdi-menu</v-icon>
        </v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
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
    <!-- <v-toolbar flat app>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Max</span>
        <span>Type</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon large>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar> Не удалять -->
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { icon: "mdi-home", text: "Главная", route: "/Main" },
        {
          icon: "mdi-card-account-mail-outline",
          text: "Кадры",
          route: "/Personnel",
        },
        { icon: "mdi-account-hard-hat", text: "Пропуск", route: "/pass-cards" },
        {
          icon: "mdi-account-cowboy-hat",
          text: "Рапорт о численом составе",
          route: "/Staffing-reports",
        },
        {
          icon: "mdi-arm-flex-outline",
          text: "Рапорт о выполненом обьёме работы",
          route: "/Scope-of-work",
        },
        { icon: "mdi-book-edit-outline", text: "Акты", route: "/Acts" },
        {
          icon: "mdi-alert-decagram-outline",
          text: "Штрафы от АМКР",
          route: "/Fines",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>