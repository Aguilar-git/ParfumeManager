<template>
  <v-app>
    <v-btn @click="TableInitialization" class="ma-1" absolute right icon>
      <v-icon>mdi-reload</v-icon>
    </v-btn>
    <v-data-table :headers="table.headers" :items="table.data">
      <template v-slot:[`item.actions`]="{ item }">
        <v-btn @click="dialog = !dialog" icon>
          <v-icon>mdi-cash-plus</v-icon>
        </v-btn>
        <v-btn @click="dialog = !dialog" icon>
          <v-icon>mdi-pencil-outline</v-icon>
        </v-btn>
        <v-btn @click="deleteDialog(item)" icon>
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

    <!-- Delete dialog -->
    <v-dialog v-model="delete_dialog" max-width="530">
      <v-card>
        <v-card-title class="text-h6">
          Вы действительно хотите удалить этот елемент?
        </v-card-title>
        <v-card-subtitle class="text-subtitle-1">
          {{ table.selectedItem.name }}
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="green darken-1" @click="delete_dialog = false">
            Отмена
          </v-btn>
          <v-btn text color="red lighten-1" @click="deleteProduct">
            Удалить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script src="./ProductsTable.js">
</script>