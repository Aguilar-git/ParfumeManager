<template>
  <v-app>
    <!-- Таблица с рапортами -->
    <ReportsTable />
    <!-- Кнопка добавление рапорта -->
    <AddReport />
  </v-app>
</template>

<script>
import ReportsTable from "./../components/ReportsTable.vue";
import AddReport from "./../components/GeneratingReports.vue";

export default {
  components: {
    ReportsTable,
    AddReport,
  },
};
</script>