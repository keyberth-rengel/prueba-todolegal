<template>
  <v-app>
    <v-main>
      <v-container fluid class="d-flex flex-column align-center">
        <AppBar />
        <router-view />
        <p class="blue--text text-subtitle text-center mt-5">Examen by TodoLegal</p>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar";
export default {
  name: "App",

  components: {
    AppBar
  },

  data: () => ({
    //
  })
};
</script>
