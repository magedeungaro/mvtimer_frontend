<template lang="pug">
  NuxtLink(to="/")
    img(:src="src").mvt-logo
</template>
<script>
export default {
  props: {
    src: String,
  },
}
</script>

<style lang="scss" scoped>
.mvt-logo {
  height: $logo-height;
}
</style>
