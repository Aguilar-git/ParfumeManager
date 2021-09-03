<template>
  <v-app>
    <!-- Sell dialog -->
    <v-dialog v-model="dialog" width="600" persistent>
      <v-card>
        <v-card-title>
          {{ item.name }}
        </v-card-title>
        <v-card-subtitle class="pb-2"> Продажа </v-card-subtitle>
        <v-card-text>
          <v-divider></v-divider>
          <v-row class="pt-2 pb-0">
            <v-col>
              <span class="font-weight-bold">Объём:</span>
              {{ item.actualVolume }}/{{ item.purchaseVolume }}
            </v-col>
            <v-col>
              <span class="font-weight-bold">Цена за мл:</span>
              {{ item.sellPerMilliliter }}грн
            </v-col>
          </v-row>
          <v-row class="pt-0 pb-2">
            <v-col>
              <span class="font-weight-bold">Дата покупки:</span>
              {{ item.dateBuy }}
            </v-col>
            <v-col>
              <span class="font-weight-bold">Продано на сумму:</span>
              {{ item.sellPerMilliliter }}грн
            </v-col>
          </v-row>
          <v-divider></v-divider>

          <v-form>
            <v-text-field suffix="мл" label="Объём"></v-text-field>
            <v-text-field suffix="₴" label="Цена"></v-text-field>
            <v-menu
              v-model="dateTimePickerMenu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Дата продажи"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                @input="dateTimePickerMenu = false"
              ></v-date-picker>
            </v-menu>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="red lighten-1" @click="closeFunction">
            Отмена
          </v-btn>
          <v-btn text color="green darken-1" @click="closeFunction">
            Создать
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script src="./generatingSell.js"></script>