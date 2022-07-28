<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>Cars List</h1>
      </div>

      <v-spacer />
    </v-app-bar>

    <v-main>
      <Main />
    </v-main>
  </v-app>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',

  components: {
    Main
  },

  data: () => ({
    //
  }),
};
</script>
