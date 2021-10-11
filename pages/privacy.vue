<template lang="pug">
  GeneralCard
    .container
      h2 Política de Privacidade
      p Para garantir uma melhoria contínua, o MVT coleta informações através de cookies para gerar relatórios no Google Analytics, e servem para identificar visitantes novos ou retornantes, localização e idioma, páginas visitadas, tempo de sessão, sistema operacional, browser, tipo de aparelho e provedor de internet. 
      
      p O MVT também possui plugins do Facebook e são utilizados cookies para facilitar o uso do plugin e outros serviços. Nosso site está hospedado no GitHub Pages, que pode coletar informações de nossos visitantes como endereços de IP. Você pode optar por bloquear cookies em seu Browser, como este tutorial mostra. 
      
      p Há sempre a opção de navegar anonimamente para que nenhuma informação seja guardada em seu browser. Porém, algumas funcionalidades poderão ficar indisponíveis.
</template>

<script>
export default {
  setup() {},
}
</script>

<style lang="scss" scoped>
.container {
  overflow-y: auto;
  height: 95%;
}

h2,
p {
  $padding: 20px;
  padding-left: $padding;
  padding-right: $padding;
}

h2 {
  $pixelpadding: 15px;
  padding-top: $pixelpadding;
  padding-bottom: $pixelpadding;
  text-align: center;
}
</style>
