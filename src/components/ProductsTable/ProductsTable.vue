<template>
  <v-app>
    <v-data-table :headers="table.headers" :items="table.data">
      <template v-slot:[`item.actions`]="{ item }">
        <v-btn @click="dialog = !dialog" icon>
          <v-icon>mdi-cash-plus</v-icon>
        </v-btn>
        <v-btn @click="dialog = !dialog" icon>
          <v-icon small>mdi-pencil-outline</v-icon>
        </v-btn>
        <v-btn @click="infoAboutItem(item)" icon>
          <v-icon>mdi-information-outline</v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" width="700">
      <v-card height="400"> </v-card>
    </v-dialog>

    <v-dialog v-model="dialogInfo" width="600">
      <v-card>
        <v-card-title>
          {{ table.selectedItem.name }}
        </v-card-title>
        <v-card-text> Описание </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="green darken-1" @click="dialogInfo = false"
            >Закрыть</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script src="./ProductsTable.js">
</script>