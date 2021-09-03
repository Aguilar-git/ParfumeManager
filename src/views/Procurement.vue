<template>
  <v-app>
    <!-- Таблица с продуктами -->
    <ProductsTable />
    <!-- Кнопка добавление продукта -->
    <AddProduct />
  </v-app>
</template>

<script>
import AddProduct from "../components/GeneratingProduct/generatingProduct.vue";
import ProductsTable from "../components/ProductsTable/productsTable.vue";

export default {
  components: {
    ProductsTable,
    AddProduct,
  },
};
</script>