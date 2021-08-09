<template>
  <v-app>
    <!-- Таблица с рапортами -->
    <ReportsTable />
    <!-- Кнопка добавление рапорта -->
    <AddReport />
  </v-app>
</template>

<script>
import ReportsTable from "../components/ProductsTable.vue";
import AddReport from "../components/GeneratingProduct/GeneratingProduct.vue";

export default {
  components: {
    ReportsTable,
    AddReport,
  },
};
</script>