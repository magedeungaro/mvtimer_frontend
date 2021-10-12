<template>
  <v-app light>
    <Gradient />
    <v-main class="main">
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
  .main {
    min-height: 100vh !important;
  }
  footer,
  .navbar,
  .btn {
    font-family: 'Nunito', sans-serif !important;
  }

  .container {
    margin: 0 auto;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  ul li a {
    transition: 0.5s;
    border: none;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 0px;
      height: 2px;
      left: 50%;
      bottom: 0;
      background-color: $gradient-dark;
      transition: all ease-in-out 0.2s;
      border-radius: 50px;
    }
    &:hover {
      color: $gradient-dark;
      &::after {
        width: 100%;
        left: 0;
      }
    }

    &.no-after {
      &::after {
        content: none;
      }
    }
  }

  ul.accent-link li a {
    color: $accent2;
    &::after {
      background-color: $accent2;
    }
  }
}
</style>
