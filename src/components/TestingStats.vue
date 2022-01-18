<template>
    <Table :items="testingStats" :tableHeaders="tableHeaders" header="Testing Status" />
</template>

<script setup>
import moment from "moment";
import { testingStats as data } from "@/constants/testingDashboard";

import Table from "@/components/UI/Table";

const testingStats = data.map((d) => ({
    ...d,
    DateStart: new moment(d.DateStart).format("MMM, DD"),
}));

const tableHeaders = Object.keys(data[0]).map((i) => {
    return i.replace(/([A-Z])/g, " $1").trim();
});
</script>

<style></style>
