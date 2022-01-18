<template>
    <Responsive style="margin-top: 20px">
        <template #main="{ width }">
            <Chart
                :size="{ width: width, height: 500 }"
                :margin="margin"
                :data="restHomePositives"
            >
                <template #layers>
                    <Line
                        :dataKeys="['TestDate', 'Positives']"
                        :lineStyle="{ stroke: '#fff' }"
                    />
                    <LabelsLayer :dataKeys="['TestDate', 'Positives']" />
                </template>
            </Chart>
        </template>
    </Responsive>
</template>

<script setup>
import { ref } from "vue";
import moment from "moment";
import { Responsive, Chart, Line } from "vue3-charts";
import LabelsLayer from "@/components/LabelsLayer";
import { restHomePositives as data } from "@/constants/testingDashboard";

const restHomePositives = data.map((p) => ({
    ...p,
    TestDate: new moment(p.TestDate).format("MMM, DD"),
}));

const margin = ref({
    left: 0,
    top: 20,
    right: 20,
    bottom: 0,
});
</script>
