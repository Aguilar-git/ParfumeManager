<template>
  <v-app>
    <!-- Таблица с продуктами -->
    <ProductsTable />
    <!-- Кнопка добавление продукта -->
    <AddProduct />
  </v-app>
</template>

<script>
import ProductsTable from "../components/ProductsTable/ProductsTable.vue";
import AddProduct from "../components/GeneratingProduct/GeneratingProduct.vue";

export default {
  components: {
    ProductsTable,
    AddProduct,
  },
};
</script>