<template lang="pug">
  button {{text}}
</template>

<script>
export default {
  props: {
    text: String,
  },
}
</script>

<style lang="scss" scoped>
button {
  $button-padding: 25px;
  padding: 10px 40px;
  border-radius: $button-padding;
  width: fit-content;
  margin: 0;
  background-color: $accent;
  color: white;
  transition: 0.7s;

  &:hover {
    background-color: $accent-dark;
    -webkit-box-shadow: 4px 4px 9px 0px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 4px 4px 9px 0px rgba(0, 0, 0, 0.35);
    box-shadow: 4px 4px 9px 0px rgba(0, 0, 0, 0.35);
  }
  &:active {
    background-color: $accent2-dark;
    color: $accent2-dark2;
  }
}
</style>
