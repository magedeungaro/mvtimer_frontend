<template>
  <v-card class="card">
    <v-container class="container">
      <img :src="tierData.img" :alt="`Image for the tier ${tierData.title}`">
      <h2>Tier {{tierData.title}}</h2>
      <ul>
        <li v-for="description in tierData.description" :key="description">{{description}}</li>
      </ul>

      <p class="price">
        <strong>R${{tierData.price}}</strong>
        <span>/Mês</span>
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
.card{
  position: relative;
  width: 350px;
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
.price{
  text-align: center;
}
.price strong{
  font-size: 30px;
}
.price span{
  font-size: 10px;
}
.confirm-btn {
  font-weight: bold;
  padding: 0 0 60px 0;
}
ul {
  list-style-image: url('static/check.svg');
}
</style>