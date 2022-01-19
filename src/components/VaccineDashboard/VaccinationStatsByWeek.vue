<template>
  <div>
      <Table :items="vaccinationStatsByWeek" :tableHeaders="tableHeaders" header="Vaccination Status By Week" />
  </div>
</template>

<script setup>
import { dayNumberWithMonth } from '@/helpers/dateHelper';
import { addSpaceBeforeCapital } from '@/helpers/stringHelper'
import Table from '@/components/UI/Table'
import { vaccinationStatsByWeek as data } from '@/constants/vaccineDashboard';

const valueOrNon = (value) => {
    return value ?? 'non'
}

const vaccinationStatsByWeek = data.map((d) => ({
    Date: dayNumberWithMonth(d.Date),
    Registrations: valueOrNon(d.Registrations),
    Walkins: valueOrNon(d.Walkins),
    FirstDose: valueOrNon(d.FirstDose),
    SecondDose: valueOrNon(d.SecondDose),
}));

const tableHeaders = addSpaceBeforeCapital(data[0]);
</script>

<style>

</style>