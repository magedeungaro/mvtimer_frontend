<template lang="pug">
  GeneralCard.g-card
    .container
      .container-center
        Trophy.trophy
      form
        v-text-field(outlined, label="email", dense).field
        v-text-field(outlined, label="nome de usuário", dense).field
        v-text-field(outlined, label="senha", dense).field
        v-text-field(outlined, label="confirmar senha", dense).field
      .container-center
        Button(text="Registrar").button
      .container-center
        p Já tem uma conta? 
          NuxtLink(to="/login") Logue aqui
      .container-center
        p Ou entre com
          
      .container-center
        NuxtLink(to="/signup") 
          v-icon fab fa-github
</template>
<style lang="scss" scoped>
.container {
  width: 90%;
}
.g-card {
  width: 33.3vw;
  min-height: 70vh;
  height: auto;
}

.field ::placeholder {
  color: $normal;
}

.trophy {
  $pixel: 200px;
  width: $pixel;
  height: $pixel;
  padding: 15px;
}

.container-center {
  @include container-flex-center(row);
}

.container-center:nth-of-type(2) {
  padding-bottom: 25px;
}

.button {
  width: 100%;
}

p {
  color: $normal-50;
}
</style>
