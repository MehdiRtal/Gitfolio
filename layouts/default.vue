<template>
  <v-app>
    <v-main class="pa-10 background">
      <Nuxt />
    </v-main>
    <v-footer class="background pb-5 mt-n5">
      <v-btn
        large
        style="display: block; margin-left: auto; margin-right: auto"
        class="rounded-lg cards primary--text"
      >
        Made with GitProfile</v-btn
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>
