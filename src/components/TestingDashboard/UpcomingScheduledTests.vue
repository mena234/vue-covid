<template>
    <Table :items="upcomingScheduledTests" :tableHeaders="tableHeaders" :fullWidth="false" header="Upcoming Scheduled Tests" />
</template>

<script setup>
import moment from "moment";
import { upcomingScheduledTests as data } from "@/constants/testingDashboard";

import Table from "@/components/UI/Table";

const upcomingScheduledTests = data.map((d) => ({
    ...d,
    DateStart: new moment(d.DateStart).format("MMM, DD"),
}));

const tableHeaders = Object.keys(data[0])
</script>

<style></style>
