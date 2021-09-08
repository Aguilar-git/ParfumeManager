<template>
  <v-app>
    <!-- Info dialog -->
    <v-dialog v-model="dialog" width="600" persistent>
      <v-card>
        <v-card-title>
          {{ item.name }}
        </v-card-title>
        <v-card-text> Описание </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="green darken-1" @click="$emit('close-dialog')">
            Закрыть
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script src="./infoAboutProduct.js"></script>