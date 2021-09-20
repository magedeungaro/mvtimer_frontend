<template lang="pug">
.container
  ul
    li 
      NuxtLink(to="/plans") Planos
    li 
      NuxtLink(to="/plans") Rankings
    li 
      NuxtLink(to="/plans") Política de Privacidade
</template>

<style scoped lang="scss">
ul {
  list-style: none;
}

li {
  display: inline-block;
  padding-left: $padding-li;
}
</style>
