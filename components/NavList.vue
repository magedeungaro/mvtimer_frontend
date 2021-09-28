<template lang="pug">
ul
  li(v-for="link in linkArray", :key="link.desc") 
    NuxtLink(:to="link.to") {{link.desc}}
      
</template>

<script>
export default {
  props: {
    linkArray: Array,
  },
}
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  width: fit-content;
}

li {
  display: inline-block;
  padding-left: $padding-li;
}
</style>
