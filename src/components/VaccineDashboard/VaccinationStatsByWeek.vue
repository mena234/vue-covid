<template>
  <div>
      <Table :items="vaccinationStatsByWeek" :tableHeaders="tableHeaders" header="Vaccination Status By Week" />
  </div>
</template>

<script setup>
import moment from 'moment';
import Table from '@/components/UI/Table'
import { vaccinationStatsByWeek as data } from '@/constants/vaccineDashboard';

const valueOrNon = (value) => {
    return value ?? 'non'
}

const vaccinationStatsByWeek = data.map((d) => ({
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