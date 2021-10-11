<template lang="pug">
  .plan-card-container
    PlanCard(v-for="tier in tiers" :key="tier.index" :tierData="tier")
</template>

<script>
export default {
  data() {
    return {
      tiers: [],
    }
  },
  async mounted() {
    this.tiers = await this.$axios.$get('http://localhost:3000/show_plans')
  },
}
</script>

<style scoped>
.plan-card-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
