<template>
  <v-app>
    <v-dialog max-width="400" v-model="dialog">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2"> Log In </v-card-title>
        <v-card-text class="mt-5">
          <v-col>
            <v-form>
              <v-text-field v-model="login" label="Login"></v-text-field>
              <v-text-field v-model="password" label="Password"> </v-text-field>
            </v-form>
          </v-col>
        </v-card-text>

        <v-divider></v-divider>

        <!-- <v-text-field color="success" loading disabled></v-text-field> -->
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="success">Log In</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
      login: "",
      password: "",
    };
  },
  methods: {
    success() {
      this.$router.push({ name: "Main" });
    },
  },
};
</script>

<style>
</style>