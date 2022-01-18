<template>
    <div class="m-10">
      <TestingDashboard />
    </div>
</template>

<script setup>
import TestingDashboard from "@/pages/TestingDashboard";
// import testingDashboard from '@/constants/testingDashboard'
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);

body {
    background: linear-gradient(to right, #25c481, #25b7c4);
    font-family: "Roboto", sans-serif;
    color: white;
}

::-webkit-scrollbar {
    width: 6px;
}
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
</style>
