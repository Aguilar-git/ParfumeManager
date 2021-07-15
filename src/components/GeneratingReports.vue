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
    <v-dialog v-model="dialog" max-width="900">
      <v-card>
        <v-card-title class="text-h5">
          Рапорт о численном составе.
        </v-card-title>
        <v-divider></v-divider>
        <!-- Большая форма рапорта -->
        <v-stepper v-model="step">
          <v-stepper-header>
            <v-stepper-step :complete="step > 1" step="1">
              Отсутствующие
              <small>Выберите тех, кто отсутстввовал</small>
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="step > 2" step="2">
              Замена
              <small>Выберите замену</small>
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3"> Выполненый обьём работ </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card flat>
                <v-list>
                  <v-list-item v-for="item in workers" :key="item.name">
                    <v-col cols="3">
                      <v-list-item-title>{{ item.name }}</v-list-item-title>
                    </v-col>
                    <v-col cols="3">
                      <v-select
                        v-model="item.presence"
                        :items="visited"
                        label="Присутствие"
                        dense
                      ></v-select>
                    </v-col>
                    <v-col cols="6">
                      <v-textarea
                        v-model="item.cause"
                        class="mt-0"
                        label="Причина"
                        rows="1"
                      >
                      </v-textarea>
                    </v-col>
                  </v-list-item>
                </v-list>
              </v-card>

              <v-btn color="red lighten-1" text @click="dialog = false">
                Отмена
              </v-btn>
              <v-btn color="green darken-1" text @click="step = 2">
                Далее
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card flat>
                <v-list>
                  <v-list-item v-for="item in AbsentWorkers()" :key="item.name">
                    <v-col cols="3">
                      <v-list-item-title>{{ item.name }}</v-list-item-title>
                    </v-col>
                    <v-col cols="3">
                      <v-combobox
                        v-model="item.replacementName"
                        label="Замена"
                        dense
                      >
                      </v-combobox>
                    </v-col>
                  </v-list-item>
                </v-list>
              </v-card>

              <v-btn color="grey darken-2" text @click="step = 1">
                Назад
              </v-btn>
              <v-btn color="green darken-1" text @click="step = 3">
                Далее
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card
                color="grey lighten-1"
                class="mb-12"
                height="200px"
              ></v-card>

              <v-btn color="grey darken-2" text @click="step = 2">
                Назад
              </v-btn>
              <v-btn color="green darken-1" text @click="dialog = false">
                Отправить
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      workers: [
        { name: "Вася Пупкин", presence: "Присутствовал", cause: "" },
        { name: "Данил Колесник", presence: "Отсутствовал", cause: "" },
        { name: "Давид Бухбиндер", presence: "Отсутствовал", cause: "" },
        { name: "Мария златовласая", presence: "Присутствовал", cause: "" },
      ],
      visited: ["Присутствовал", "Отсутствовал"],
      step: 1,
    };
  },
  methods: {
    AbsentWorkers() {
      let absentWorkers = [];

      this.workers.forEach((item) => {
        if (item.presence === this.visited[1]) {
          let tmp = {
            name: item.name,
            replacementName: "",
          };
          absentWorkers.push(tmp);
        }
      });
      return absentWorkers;
    },
  },
};
</script>

<style>
</style>