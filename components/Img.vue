<template lang="pug">
  img(:src="src")
</template>

<script>
export default {
  props: {
    src: String,
  },
}
</script>

<style lang="scss" scoped>
img {
  max-width: 55vw;
  margin-top: -400px;
  margin-right: -5vw;
}
</style>
