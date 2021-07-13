<template>
  <v-app>
    <v-dialog max-width="400" v-model="dialog">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2"> Log In </v-card-title>
        <v-card-text class="mt-5">
          <v-col>
            <v-form>
              <v-text-field v-model="data.login" label="Login"></v-text-field>
              <v-text-field v-model="data.password" label="Password">
              </v-text-field>
            </v-form>
          </v-col>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="authorization">Log In</v-btn>
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
      data: {
        login: "",
        password: "",
      },
      url: "http://localhost:1337/login",
    };
  },
  methods: {
    async postData(url, data) {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return await response.json();
    },
    authorization() {
      this.postData(this.url, this.data)
        .then((data) => {
          console.log(data[0].login);
          this.success();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    success() {
      this.$router.push({ name: "Main" });
    },
  },
};
</script>

<style>
</style>