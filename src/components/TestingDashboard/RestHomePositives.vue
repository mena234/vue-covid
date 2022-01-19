<template>
    <div>
        <div class="overflow-x-auto">
            <Responsive class="responsive-container mb-5">
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
        <div class="flex flex-col ml-10 mt-2">
            <div class="sm:text-lg text-sm"><span>Year: 2021</span></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Responsive, Chart, Line } from "vue3-charts";
import LabelsLayer from "@/components/UI/LabelsLayer";
import { restHomePositives as data } from "@/constants/testingDashboard";
import { dayNumberWithMonth } from '@/helpers/dateHelper'

const restHomePositives = data.map((p) => ({
    ...p,
    TestDate: dayNumberWithMonth(p.TestDate),
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
