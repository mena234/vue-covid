<template>
    <div>
        <h2 class="text-center text-5xl mb-10">APPROVAL TIME STATUS</h2>
        <Responsive>
            <template #main="{ width }">
                <Chart
                    :size="{ width, height: 420 }"
                    :data="travelAuthStats"
                    :margin="margin"
                    :direction="direction"
                    :axis="axis"
                >
                    <template #layers>
                        <Grid strokeDasharray="2,2" />
                        <Bar
                            :dataKeys="['DateStart', 'Total']"
                            :barStyle="{ fill: '#333333' }"
                        />
                        <Bar
                            :dataKeys="['DateStart', 'Approved']"
                            :barStyle="{ fill: '#dddddd' }"
                        />
                        <Bar
                            :dataKeys="['DateStart', 'NotApproved']"
                            :barStyle="{ fill: '#fff' }"
                        />
                    </template>

                    <template #widgets>
                        <Tooltip
                            borderColor="#333333"
                            :config="{
                                DateStart: { color: '#333333' },
                                Total: { color: '#333333' },
                                Approved: { color: '#333333' },
                                NotApproved: { color: '#333333' },
                                Revenue: { color: '#333333' },
                            }"
                        />
                    </template>
                </Chart>
            </template>
        </Responsive>
        <div class="flex flex-col ml-10 mt-5">
            <div class="text-lg"><span>Year: 2021</span></div>
            <div class="text-lg">
                <div class="p-2 total-bg-color inline-block"></div>
                <span class="ml-2">Total</span>
            </div>
            <div class="text-lg">
                <div class="p-2 approved-bg-color inline-block"></div>
                <span class="ml-2">Approved</span>
            </div>
            <div class="text-lg">
                <div
                    class="p-2 bg-white not-approved-bg-color inline-block"
                ></div>
                <span class="ml-2">Not Approved</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import moment from "moment";
import { Responsive, Chart, Grid, Tooltip, Bar } from "vue3-charts";
import { plByMonth } from "@/constants/data";
import { travelAuthStats as data } from "@/constants/travelAuthDashboard";

const travelAuthStats = data.map((d) => ({
    ...d,
    DateStart: new moment(d.DateStart).format("MMM, DD"),
}));
console.log(travelAuthStats);
console.log(plByMonth);

// const data = ref(plByMonth);
const direction = ref("horizontal");
const margin = ref({
    left: 0,
    top: 20,
    right: 20,
    bottom: 0,
});

const axis = ref({
    primary: {
        type: "band",
    },
    secondary: {
        domain: ["dataMin", "dataMax + 100"],
        type: "linear",
        ticks: 8,
    },
});
</script>

<style>
.total-bg-color {
    background-color: black;
}

.approved-bg-color {
    background-color: #ddd;
}
</style>
