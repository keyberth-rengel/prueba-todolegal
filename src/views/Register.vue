<template>
  <v-container class="d-flex flex-column align-center mt-3 width-container-form">
    <v-row class="justify-center">
      <v-col cols="10" class="border-bottom">
        <p class="text-h5 blue--text text-center">Crear Cuenta Gratis</p>
      </v-col>
      <v-col cols="12" class="mt-4">
        <p
          class="blue--text text-center text-caption text-sm-subtitle-2"
        >Ingrese los siguiente datos para registrarte como un nuevo usuario</p>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="username"
          value
          label="Cedula de identida"
          filled
          append-icon="mdi-information"
        ></v-text-field>
        <v-text-field type="password" v-model="password" label="Contraseña" filled></v-text-field>
        <v-text-field type="password" v-model="repeatPassword" label="Confirmar Contraseña" filled></v-text-field>

        <v-alert
          type="error"
          v-if="!token"
        >Para Poder crear un usuario primero debe iniciar session con otro usuario</v-alert>
        <v-alert type="error" v-if="msjError">{{msjError}}</v-alert>
        <div class="d-flex justify-end">
          <v-btn class="ma-2 blue--text" depressed @click="registerUser">
            REGISTRARME
            <v-icon right dark>mdi-arrow-right-bold-circle-outline</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

import { mapMutations, mapState } from "vuex";
export default {
  name: "Register",
  components: {},
  data() {
    return {
      username: "",
      password: "",
      repeatPassword: "",
      disabledButton: false,
      msjError: ""
    };
  },
  computed: {
    ...mapState({
      token: state => state.token
    })
  },

  methods: {
    ...mapMutations(["login_user_motations"]),
    async registerUser() {
      if (
        this.username === "" ||
        this.password === "" ||
        this.repeatPassword === ""
      )
        return (this.msjError = "Todos los campos son oblicatorios");
      if (this.password !== this.repeatPassword)
        return (this.msjError = "Las contraseñas no son iguales");

      setTimeout(() => {
        this.msjError = "";
      }, 2000);
      const body = {
        name: "keyberth",
        last_name: "rengel",
        phone_number: "8091010101",
        email: "xxx.xxx@todolegal.com",
        username: this.username,
        password: this.password
      };
      let headers = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`
        }
      };
      try {
        let resp = await axios.post(
          "https://1mfqxergc3.execute-api.us-east-1.amazonaws.com/user",
          body,
          { headers }
        );
        if (resp.data) {
          this.login_user_motations(resp.data);
          this.$router.push("/");
        }
      } catch (error) {
        this.msjError = "Usuario o Contraseña Invalido verifique sus datos";
        setTimeout(() => {
          this.msjError = "";
        }, 2000);
      }
    }
  }
};
</script>

<style>
.border-bottom {
  border-bottom: 3px solid blue;
}
.width-container-form {
  max-width: 470px;
  background-color: #f2f2f2;
  border-top-right-radius: 4rem;
  border-bottom-left-radius: 4rem;
}
</style>
