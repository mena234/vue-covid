<template>
    <Table :items="upcomingScheduledTests" :tableHeaders="tableHeaders" :fullWidth="false" header="Upcoming Scheduled Tests" />
</template>

<script setup>
import { dayNumberWithMonth } from '@/helpers/dateHelper'
import { upcomingScheduledTests as data } from "@/constants/testingDashboard";

import Table from "@/components/UI/Table";

const upcomingScheduledTests = data.map((d) => ({
    ...d,
    DateStart: dayNumberWithMonth(d.DateStart),
}));

const tableHeaders = Object.keys(data[0])
</script>

<style></style>
