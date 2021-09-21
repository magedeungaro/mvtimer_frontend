<template>
  <v-app light>
    <Gradient />
    <v-main>
      <Navbar />
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Gradient from '~/components/Gradient.vue'
export default {
  components: { Gradient },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Planos',
          to: '/plans',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>

<style lang="scss">
body {
  footer,
  .navbar {
    font-family: 'Nunito', sans-serif !important;
  }

  .container {
    margin: 0 auto;
    padding: 0;
  }

  a {
    text-decoration: none;
    &:hover {
      color: $gradient-dark;
      text-decoration: underline;
    }
  }

  .accent-link a {
    color: $accent2;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
