<template>
  <v-card width="350" style="position: relative;">
    <v-container class="container">
      <img :src="tierData.img" :alt="`Image for the tier ${tierData.title}`">
      <h2>Tier {{tierData.title}}</h2>
      <ul v-for="description in tierData.desc" :key="description">
        <li>{{description}}</li>
      </ul>
      <p style="text-align: center;">
        <strong style="font-size: 30px;">R${{tierData.price}}</strong>
        <span style="font-size: 10px;">/Mês</span>
      </p>
      <div class="confirm-btn">
        <v-btn large color="accent" rounded block>Assinar</v-btn>
      </div>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    tierData: Object
  }
}
</script>

<style lang="scss" scoped>

#app .v-sheet.v-card:not(.v-sheet--outlined) {
  @include box-shadow;
}

img {
  position: absolute;
  height: 100px;
  right: -25px;
  top: -25px;
}
h2 {
  padding: 27px 0;
}
li {
  padding: 5px 0;
}
p {
  padding: 100px 0 52px 0;
}
.confirm-btn {
  font-weight: bold;
  padding: 0 0 60px 0;
}
ul {
  list-style-image: ;
}
</style>