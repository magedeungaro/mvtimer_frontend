<template lang="pug">
  v-card.card
    slot
</template>

<style lang="scss" scoped>
#app .v-sheet.v-card:not(.v-sheet--outlined) {
  @include box-shadow;
}

.card {
  position: relative;
  width: 60vw;
  height: 70vh;
  background: white;
  padding: 30px 15px;
  margin: 0 auto;
}
</style>
