<template lang="pug">
  v-card.card
    .container
      .plan-info
        img(:src="tierData.image" :alt="`Image for the tier ${tierData.title}`")
        h2 Tier {{tierData.title}}
        ul
          li(v-for="description in tierData.description" :key="description") {{description}}
        
      p.price
        strong R${{tierData.price}}
        span /Mês

      .confirm-btn
        NuxtLink(to="/signup")
          Button(text="Assinar")
</template>

<script>
export default {
  props: {
    tierData: Object,
  },
}
</script>

<style lang="scss" scoped>
#app .v-sheet.v-card:not(.v-sheet--outlined) {
  @include box-shadow;
}

.plan-info {
  min-height: 15rem;
}

.container {
  width: 80%;
}

img {
  position: absolute;
  height: 100px;
  right: -25px;
  top: -25px;
}
.card {
  position: relative;
  width: 350px;
  height: 70vh;
}
h2 {
  padding: 27px 0;
}
li {
  padding: 5px 0;
}

.price {
  text-align: center;
  padding-top: 25px;
}
.price strong {
  font-size: 30px;
}
.price span {
  font-size: 10px;
}
.confirm-btn {
  padding-top: 15px;
  Button {
    width: 100%;
  }
}
ul {
  list-style-image: url('static/check.svg');
}
</style>
