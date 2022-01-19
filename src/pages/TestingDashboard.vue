<template>
    <div>
        <div class="mb-24">
            <TestingStats />
        </div>
        <div class="mb-24">
            <div class="sm:text-5xl text-2xl text-center mb-10">TESTING HOME POSITIVIES</div>
            <RestHomePositives />
        </div>
        <div class="mb-24">
            <UpcomingScheduledTests />
        </div>
    </div>
</template>

<script setup>
import RestHomePositives from "@/components/TestingDashboard/RestHomePositives";
import TestingStats from "@/components/TestingDashboard/TestingStats";
import UpcomingScheduledTests from "@/components/TestingDashboard/UpcomingScheduledTests";
</script>
