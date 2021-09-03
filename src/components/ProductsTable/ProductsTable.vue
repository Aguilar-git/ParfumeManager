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
        <v-btn @click="dialog = !dialog" icon>
          <v-icon>mdi-pencil-outline</v-icon>
        </v-btn>
        <v-btn @click="openDelDialog(item)" icon>
          <v-icon>mdi-delete-outline</v-icon>
        </v-btn>
        <v-btn @click="infoDialog(item)" icon>
          <v-icon>mdi-information-outline</v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" width="700">
      <v-card height="400"> </v-card>
    </v-dialog>

    <!-- Sell dialog -->
    <SellDialog
      :item="table.selectedItem"
      :dialog="sell_dialog"
      :closeFunction="closeSellDialog"
    ></SellDialog>

    <!-- Delete dialog -->
    <DeleteDialog
      :item="table.selectedItem"
      :dialog="delete_dialog"
      :closeFunction="closeDelDialog"
      :deleteFunction="deleteProduct"
    ></DeleteDialog>

    <!-- Info dialog -->
    <v-dialog v-model="info_dialog" width="600">
      <v-card>
        <v-card-title>
          {{ table.selectedItem.name }}
        </v-card-title>
        <v-card-text> Описание </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="green darken-1" @click="info_dialog = false"
            >Закрыть</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script src="./productsTable.js">
</script>