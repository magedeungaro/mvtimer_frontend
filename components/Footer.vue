<template lang="pug">
  v-footer(:class="{home_page_footer: isHomePage}").footer
    .container
      .nav-footer-container 
        span MVT • Most  Valuable Timer &copy; {{ new Date().getFullYear() }}
      .nav-footer-container 
        NavFooter
      .nav-footer-container
        Logo
      
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    isHomePage() {
      return this.$nuxt.$route.name === 'index'
    },
  },
}
</script>

<style lang="scss" scoped>
body footer.footer {
  padding: 15px;
  font-size: 1rem;
  font-weight: bold;
  background-color: $footer-background-color;
  &.home_page_footer {
    background-color: $homepage-footer-background-color;
  }
}

.container {
  @include container-flex-center(row);
}

.nav-footer-container {
  @include container-flex-center(column);
  &:not(:first-child) {
    padding-left: $padding-nav-container;
  }
}
</style>
