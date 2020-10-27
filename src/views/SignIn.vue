<template>
  <v-container class="d-flex flex-column align-center mt-3 width-container-form">
    <v-row class="justify-center">
      <v-col cols="10" class="border-bottom">
        <p class="text-h5 blue--text text-center">Bienvenido Usuario</p>
      </v-col>
      <v-col cols="12" class="mt-4">
        <p
          class="blue--text text-center text-caption text-sm-subtitle-2"
        >Por favor ingresa a tu cuenta ingresando tu numero de cedula y contraseña. Si no tienes una cuenta en TodoLegal, puedes crear una gratis</p>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="username"
          value
          label="Cedula de identida"
          filled
          append-icon="mdi-information"
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Contraseña"
          append-icon="mdi-eye-off"
          type="password"
          name="input-10-1"
          filled
        ></v-text-field>
        <v-alert type="error" v-if="msjError">{{msjError}}</v-alert>

        <div class="d-flex justify-center">
          <v-btn text x-small class="blue--text" @click="register">No tengo Cuenta. Crear una GRATIS</v-btn>
        </div>
        <div class="d-flex justify-end">
          <v-btn class="ma-2 blue--text" depressed @click="loginUser">
            CONTINUAR
            <v-icon right dark>mdi-arrow-right-bold-circle-outline</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
export default {
  name: "SignIn",
  components: {},
  data() {
    return {
      username: "",
      password: "",
      msjError: "",
      dataUser: {}
    };
  },
  methods: {
    ...mapMutations(["login_user_motations"]),
    register() {
      //para acceder a otras ruta
      this.$router.push("/register");
    },
    async loginUser() {
      if (this.username === "" || this.password === "")
        return (this.msjError = "Todos los campos son oblicatorios");
      setTimeout(() => {
        this.msjError = "";
      }, 2000);
      const body = {
        // username: this.username,
        // password: this.password

        password: "T3sterR0o*",
        username: "1758700024-2"
      };
      let headers = {
        headers: {
          "Content-Type": "application/json"
        }
      };

      try {
        let resp = await axios.post(
          "https://1mfqxergc3.execute-api.us-east-1.amazonaws.com/auth/login",
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
