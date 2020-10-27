<template>
  <v-container class="d-flex flex-column align-center mt-3 width-container-form">
    <v-row class="justify-center">
      <v-col cols="10" class="d-flex flex-column align-center">
        <v-img :src="exitoIMG" max-height="80" max-width="80" class="mb-5" />
        <p class="text-h5 blue--text text-center">¡Validacion Exitosa!</p>
      </v-col>
      <v-col cols="12" class="mt-1 mb-0 width--form">
        <p class="text-subtitle-1 text-sm-h6 blue--text text-start">Datos Verificados:</p>
        <p class="text-subtitle-1 pa-0 ma-0 text-sm-h6 blue--text text-start">Nombres y apellidos</p>
        <p
          class="text-subtitle-1 text-sm-h6 black--text text-start"
        >{{dataUser.name + " " + dataUser.lastname}}</p>
        <p class="text-subtitle-1 pa-0 ma-0 text-sm-h6 blue--text text-start">Cedula de identida</p>
        <p class="text-subtitle-1 pa-0 ma-0 text-sm-h6 black--text text-start">{{dataUser.username}}</p>
      </v-col>
      <v-col cols="12">
        <div class="d-flex justify-end">
          <v-btn class="ma-2 blue--text" depressed @click="signup">
            FINALIZAR
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
import exitoIMG from "@/assets/exito.png";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      exitoIMG
    };
  },

  computed: {
    ...mapState({
      dataUser: state => state.data_user
    })
  },
  methods: {
    ...mapMutations(["login_user_motations"]),
    signup() {
      //para acceder a otras ruta
      //   this.login_user_motations({});
      this.$router.push("/sign-in");
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
  padding: 3rem;
}
.width--form {
  max-width: 320px;
  background-color: #fff;
  border-top-right-radius: 4rem;
  border-bottom-left-radius: 4rem;
  padding: 2rem;
}
</style>
