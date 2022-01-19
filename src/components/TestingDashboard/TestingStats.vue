<template>
    <Table :items="testingStats" :tableHeaders="tableHeaders" header="Testing Status" />
</template>

<script setup>
import { testingStats as data } from "@/constants/testingDashboard";
import { dayNumberWithMonth } from '@/helpers/dateHelper'
import { addSpaceBeforeCapital } from '@/helpers/stringHelper'
import Table from "@/components/UI/Table";

const testingStats = data.map((d) => ({
    ...d,
    DateStart: dayNumberWithMonth(d.DateStart),
}));

const tableHeaders = addSpaceBeforeCapital(data[0]);
</script>

<style></style>
