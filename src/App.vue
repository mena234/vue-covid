<template>
    <div class="mx-5">
        <div class="container m-auto flex justify-between align-middle mt-10 mb-24">
            <router-link to="/testing-dashboard" class="routing-button px-4 py-2 rounded-md">
                Testing Dashboard
            </router-link>
            <router-link to="/travel-auth-dashboard" class="routing-button px-4 py-2 rounded-md">
                Travel Auth Dashboard
            </router-link>
            <router-link to="/vaccine-dashboard" class="routing-button px-4 py-2 rounded-md">
                Vaccine Dashboard
            </router-link>
        </div>
        <router-view />
    </div>
</template>

<script setup></script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);

body {
    background: linear-gradient(to right, #25c481, #25b7c4);
    font-family: "Roboto", sans-serif;
    color: white;
}

.routing-button {
    background-color: #333;
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
