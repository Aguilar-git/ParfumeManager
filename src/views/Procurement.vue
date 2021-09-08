<template>
  <v-app>
    <!-- Таблица с продуктами -->
    <ProductsTable />
  </v-app>
</template>

<script>
import ProductsTable from "../components/ProductsTable/productsTable.vue";

export default {
  components: {
    ProductsTable,
  },
};
</script>