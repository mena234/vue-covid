<template>
    <div>
        <div class="overflow-x-auto">
            <Responsive class="responsive-container">
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
                            <LabelsLayer
                                :dataKeys="['TestDate', 'Positives']"
                            />
                        </template>
                    </Chart>
                </template>
            </Responsive>
        </div>
        <div class="flex flex-col ml-10 mt-5">
            <div class="xl:text-lg sm:text-sm"><span>Year: 2021</span></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import moment from "moment";
import { Responsive, Chart, Line } from "vue3-charts";
import LabelsLayer from "@/components/UI/LabelsLayer";
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

<style scoped>
.responsive-container {
    min-width: 60rem;
}
</style>
