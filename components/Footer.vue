<template lang="pug">
  v-footer(:class="{home_page_footer: isHomePage}").footer
    .container
      div 
        span MVT • Most  Valuable Timer &copy; {{ new Date().getFullYear() }}
      div 
      div
        <Logo/>
      
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
  font-size: 1.5rem;
  font-weight: bold;
  background-color: $footer-background-color;
  &.home_page_footer {
    background-color: $homepage-footer-background-color;
  }
}

.container {
  @include flex(row);
}
</style>
