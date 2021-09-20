<template lang="pug">
  .gradient
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.gradient {
  @include gradient;
  width: 100%;
  height: 80vh;
  clip-path: polygon(0 0, 100% 0%, 100% 66%, 0% 100%);
  position: absolute;
}
</style>
