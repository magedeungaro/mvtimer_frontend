<template>
  <div style="display: flex; justify-content: space-around; align-items: center;">
    <PlanCard v-for="tier in tiers" :key="tier.index" :tierData="tier"/>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      testTierObjectArr: [{
        img: "http://www.mostvaluabletimer.com/img/mvp/70.gif",
        desc: ['babu', 'ronaldo', 'nhac', 'nha'],
        title: 'Slime',
        price: '5,99'
      },
      {
        img: "http://www.mostvaluabletimer.com/img/mvp/70.gif",
        desc: ['babu', 'ronaldo', 'nhac', 'nha'],
        title: 'Slime',
        price: '5,99'
      },
      {
        img: "http://www.mostvaluabletimer.com/img/mvp/70.gif",
        desc: ['babu', 'ronaldo', 'nhac', 'nha'],
        title: 'Slime',
        price: '5,99'
      }],
      tiers: []
    }
  },
  async mounted() {
    this.tiers = await this.$axios.$get("http://localhost:3000/show_plans")
  }
}
</script>

<style>

</style>