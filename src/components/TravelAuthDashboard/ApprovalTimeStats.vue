<template>
    <Table :items="approvalTimeStats" :tableHeaders="tableHeaders" header="APPROVAL TIME STATUS" />
</template>

<script setup>
import moment from "moment";
import { approvalTimeStats as data } from "@/constants/travelAuthDashboard";

import Table from "@/components/UI/Table";

const approvalTimeStats = data.map((d) => ({
    ...d,
    DateOfTravel: new moment(d.DateOfTravel).format("MMM, DD"),
}));

const tableHeaders = Object.keys(data[0]).map((i) => {
    return i.replace(/([A-Z])/g, " $1").trim();
});
</script>

<style></style>
