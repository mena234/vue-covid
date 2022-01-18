<template>
  <div class="mb-24">
    <VaccinationStats />
  </div>
  <div class="mb-24">
    <VaccinationStatsByWeek />
  </div>
  <div class="mb-24">
    <VaccinationStatusByMonth />
  </div>
</template>

<script setup>
import VaccinationStats from '@/components/VaccineDashboard/VaccinationStats'
import VaccinationStatsByWeek from '@/components/VaccineDashboard/VaccinationStatsByWeek'
import VaccinationStatusByMonth from '@/components/VaccineDashboard/VaccinationStatusByMonth'
</script>

<style>

</style>