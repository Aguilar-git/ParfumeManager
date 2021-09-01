<template>
  <v-row justify="center">
    <!-- Кнопка добавления записи -->
    <v-btn
      class="purple darken-1"
      @click.stop="dialog = true"
      fab
      dark
      bottom
      right
      fixed
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <!-- Диалог -->
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="text-h5"> Закупка </v-card-title>
        <v-divider></v-divider>
        <!-- Большая форма рапорта -->
        <v-stepper v-model="step">
          <v-stepper-header>
            <v-stepper-step :complete="step > 1" step="1">
              Продукт
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="step > 2" step="2">
              Детали
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3">Дата покупки</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="pa-3 pl-0 pr-0" flat>
                <v-form>
                  <v-row>
                    <v-col>
                      <v-combobox
                        label="Компания производитель"
                        :items="lists.companies"
                        v-model="product.companyName"
                        dense
                      ></v-combobox>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-combobox
                        label="Название аромата"
                        :items="lists.fragrants"
                        v-model="product.fragrantName"
                        dense
                      ></v-combobox>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-combobox
                        label="Концентрация"
                        :items="lists.concentrations"
                        v-model="product.concentrationName"
                        dense
                      ></v-combobox>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card>

              <v-btn color="red lighten-1" text @click="dialog = false">
                Отмена
              </v-btn>
              <v-btn color="green darken-1" text @click="step = 2">
                Далее
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="pa-3 pl-0 pr-0" flat>
                <v-form>
                  <v-row>
                    <v-col>
                      <v-combobox
                        label="Максимальный объём флакона"
                        :items="lists.maxVolumes"
                        v-model="product.maxVolumeValue"
                        dense
                      ></v-combobox>
                    </v-col>
                    <v-col>
                      <v-text-field
                        label="Фактический объём флакона"
                        v-model="product.purchaseVolume"
                        dense
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field
                        label="Цена покупки"
                        dense
                        v-model="product.buy"
                      ></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field
                        label="Цена покупки за миллилитр"
                        dense
                      ></v-text-field>
                      <!-- v-model -->
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field label="Цена продажи" dense></v-text-field>
                      <!-- v-model -->
                    </v-col>
                    <v-col>
                      <v-text-field
                        label="Цена продажи за миллилитр"
                        dense
                        v-model="product.sellPerMilliliter"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card>

              <v-btn color="grey darken-2" text @click="step = 1">
                Назад
              </v-btn>
              <v-btn color="green darken-1" text @click="step = 3">
                Далее
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card class="pt-3 pb-3" flat>
                <v-row style="height: 400px" justify="center">
                  <v-col>
                    <v-date-picker
                      full-width
                      v-model="product.dateBuy"
                    ></v-date-picker>
                  </v-col>
                </v-row>
              </v-card>

              <v-btn color="grey darken-2" text @click="step = 2">
                Назад
              </v-btn>
              <v-btn color="green darken-1" text @click="CreateProduct">
                Отправить
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script src="./GeneratingProduct.js"></script>