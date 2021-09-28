<template lang="pug">
  div
    section
      Trophy

      .text-block.center.float-right.first-block
        h2 Organize sua caçada com MVTimer
        p Tenha todas as informações para aproveitar seu farm ao máximo
        NuxtLink(to="/plans") 
          Button(text="Comece gratis")
    
    section
      .text-block.float-left
        h2 Informações sempre com você
        p Tenha todos os horários disponíveis para que você possa se organizar durante o dia

      Img(src="/mockupsite.png").float-right

</template>

<style lang="scss" scoped>
body {
  .center {
    text-align: center;
  }

  .theme--light.v-application {
    .text-block {
      padding: 100px 0;
      max-width: 35vw;
      &.first-block {
        color: rgba(255, 255, 255, 0.85) !important;
        padding-top: 150px;
      }
    }
  }
}
</style>
