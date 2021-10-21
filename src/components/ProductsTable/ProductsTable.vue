<template>
  <v-app>
    <v-btn @click="TableInitialization" class="ma-1" absolute right icon>
      <v-icon>mdi-reload</v-icon>
    </v-btn>
    <v-data-table :headers="table.headers" :items="table.data">
      <template v-slot:[`item.actions`]="{ item }">
        <v-btn @click="openSellDialog(item)" icon>
          <v-icon>mdi-cash-plus</v-icon>
        </v-btn>
<!--        <v-btn @click="dialog = !dialog" icon>
          <v-icon>mdi-pencil-outline</v-icon>
        </v-btn>-->
        <v-btn @click="openDelDialog(item)" icon>
          <v-icon>mdi-delete-outline</v-icon>
        </v-btn>
        <v-btn @click="openInfoDialog(item)" icon>
          <v-icon>mdi-information-outline</v-icon>
        </v-btn>
      </template>
    </v-data-table>

<!--    <v-dialog v-model="dialog" width="700">
      <v-card height="400"> </v-card>
    </v-dialog>-->

    <!-- Sell dialog -->
    <SellDialog
      :item="table.selectedItem"
      :dialog="sell_dialog"
      @close-dialog="closeSellDialog"
    ></SellDialog>

    <!-- Delete dialog -->
    <DeleteDialog
      :item="table.selectedItem"
      :dialog="delete_dialog"
      @delete-product="deleteProduct"
      @close-dialog="closeDelDialog"
    ></DeleteDialog>

    <!-- Info dialog -->
    <InfoDialog
      :item="table.selectedItem"
      :dialog="info_dialog"
      @close-dialog="info_dialog = false"
    />

    <!-- Кнопка добавление продукта -->
    <AddProduct @update-table="TableInitialization" />
  </v-app>
</template>

<script src="./ProductsTable.js">
</script>