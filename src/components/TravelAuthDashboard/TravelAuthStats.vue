<template>
    <div>
        <h2 class="text-center sm:text-5xl text-2xl mb-10">TRAVEL AUTH STATUS</h2>
        <div class="overflow-x-auto">
            <Responsive class="responsive-container">
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
        </div>
        <div class="flex flex-col ml-10 mt-2 sm:text-lg text-sm">
            <div><span>Year: 2021</span></div>
            <div>
                <div class="p-2 inline-block bg-light-black"></div>
                <span class="ml-2">Total</span>
            </div>
            <div>
                <div class="p-2 inline-block bg-light-gray"></div>
                <span class="ml-2">Approved</span>
            </div>
            <div>
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
import { dayNumberWithMonth } from '@/helpers/dateHelper'
import { Responsive, Chart, Grid, Tooltip, Bar } from "vue3-charts";
import { plByMonth } from "@/constants/data";
import { travelAuthStats as data } from "@/constants/travelAuthDashboard";

const travelAuthStats = data.map((d) => ({
    ...d,
    DateStart: dayNumberWithMonth(d.DateStart),
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
.responsive-container {
    min-width: 60rem;
}
</style>
