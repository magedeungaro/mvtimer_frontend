<template lang="pug">
  div
    h1 Hi
    <PlanCard :tierData="this.testTierObject"/>
    <Trophy />
    NuxtLink(to="/plans") Plans
</template>

<script>
export default {
  data() {
    return {
      testTierObject: {
        img: "http://www.mostvaluabletimer.com/img/mvp/70.gif",
        desc: ['babu', 'ronaldo', 'nhac', 'nha'],
        title: 'Slime',
        price: '5,99'
      }
    }
  }
}
</script>

<style>

</style>
