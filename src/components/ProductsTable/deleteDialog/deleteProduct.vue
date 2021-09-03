<template>
  <v-app>
    <!-- Delete dialog -->
    <v-dialog v-model="dialog" max-width="530" persistent>
      <v-card>
        <v-card-title class="text-h6">
          Вы действительно хотите удалить этот елемент?
        </v-card-title>
        <v-card-subtitle class="text-subtitle-1">
          {{ item.name }}
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="green darken-1" @click="closeFunction">
            Отмена
          </v-btn>
          <v-btn text color="red lighten-1" @click="deleteFunction">
            Удалить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script src="./deleteProduct.js"></script>