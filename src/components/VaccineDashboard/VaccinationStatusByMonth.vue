<template>
  <div>
      <Table :items="vaccinationStatsByMonth" :tableHeaders="tableHeaders" header="Vaccination Status By Month" />
  </div>
</template>

<script setup>
import moment from 'moment';
import Table from '@/components/UI/Table'
import { vaccinationStatsByMonth as data } from '@/constants/vaccineDashboard';

const valueOrNon = (value) => {
    return value ?? 'non'
}

const vaccinationStatsByMonth = data.map((d) => ({
    Date: new moment(d.Date).format("MMM, DD"),
    Registrations: valueOrNon(d.Registrations),
    Walkins: valueOrNon(d.Walkins),
    FirstDose: valueOrNon(d.FirstDose),
    SecondDose: valueOrNon(d.SecondDose),
}));

const tableHeaders = Object.keys(data[0]).map((i) => {
    return i.replace(/([A-Z])/g, " $1").trim();
});
</script>

<style>

</style>