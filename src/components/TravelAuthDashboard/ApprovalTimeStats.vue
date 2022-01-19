<template>
    <Table :items="approvalTimeStats" :tableHeaders="tableHeaders" header="APPROVAL TIME STATUS" :tableMinWidth="40" />
</template>

<script setup>
import { dayNumberWithMonth } from '@/helpers/dateHelper'
import { addSpaceBeforeCapital } from '@/helpers/stringHelper'
import { approvalTimeStats as data } from "@/constants/travelAuthDashboard";

import Table from "@/components/UI/Table";

const approvalTimeStats = data.map((d) => ({
    ...d,
    DateOfTravel: dayNumberWithMonth(d.DateOfTravel),
}));

const tableHeaders = addSpaceBeforeCapital(data[0]);
</script>

<style></style>
