<template lang="pug">
  v-footer(:class="{home_page_footer: isHomePage}").footer
    .nav-footer-container 
      span MVT • Most  Valuable Timer &copy; {{ new Date().getFullYear() }}
    .nav-footer-container 
      NavList(:linkArray="links")
    .nav-footer-container
      Logo
      
</template>

<script>
export default {
  name: 'Footer',
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
          desc: 'Política de Privacidade',
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
body footer.footer {
  @include container-flex-center(row);
  padding: 15px;
  font-size: 1rem;
  font-weight: bold;
  background-color: $footer-background-color;
  justify-content: space-around;
  &.home_page_footer {
    background-color: $homepage-footer-background-color;
  }
}

.nav-footer-container {
  @include container-flex-center(column);
  &:not(:first-child) {
    padding-left: $padding-nav-container;
  }
}
</style>
