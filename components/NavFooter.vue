<template lang="pug">
.container.container-list
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

.container.container-list {
  width: 100%;
}
</style>
