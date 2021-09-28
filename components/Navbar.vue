<template lang="pug">
  .container.navbar
    Logo(src="/mvt_white.svg")
    NavList(:linkArray="links").float-right.accent-link 
      
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      links: [
        {
          to: '/plans',
          desc: 'Planos',
        },
        {
          to: '/plans',
          desc: 'Rankings',
        },
        {
          to: '/plans',
          desc: 'Entrar',
        },
      ],
    }
  },
  computed: {
    isHomePage() {
      return this.$nuxt.$route.name === 'index'
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  padding: 15px 0;
}
</style>
