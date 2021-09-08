<template>
  <v-app>
    <v-dialog max-width="400" v-model="dialog" persistent>
      <v-card>
        <v-card-title class="text-h5 grey lighten-2"> Sign in </v-card-title>
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
          <v-btn
            color="yellow"
            text
            @click="$router.push({ path: '/Registration' })"
            >Sign up</v-btn
          >
          <v-btn color="green" text @click="logIn">Sign in</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script src="./login.js"></script>