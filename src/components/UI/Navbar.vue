<template>
    <div class="topnav overflow-hidden bg-light-black" ref="nav">
        <router-link
            to="/testing-dashboard"
            class="link hover:bg-light-gray hover:text-light-black text-white text-center no-underline py-3.5 px-4 float-left sm:block hidden"
            >Testing Dashboard</router-link
        >
        <router-link
            to="/travel-auth-dashboard"
            class="link hover:bg-light-gray hover:text-light-black text-white text-center no-underline py-3.5 px-4 float-left sm:block hidden"
            >Travel Auth Dashboard</router-link
        >
        <router-link
            to="/vaccine-dashboard"
            class="link hover:bg-light-gray hover:text-light-black text-white text-center no-underline py-3.5 px-4 float-left sm:block hidden"
            >Vaccine Dashboard</router-link
        >
        <button
            class="px-3.5 py-4 float-right sm:hidden"
            href="javascript:void(0);"
            @click="onClick"
        >
            <img src="@/assets/menu-icon.svg" class="w-6 h-4" />
        </button>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const nav = ref(null);
const onClick = () => {
    console.log(nav.value);
    nav.value.classList.toggle('responsive')
};
</script>

<style scoped>
a {
    float: left;
}

.router-link-exact-active {
    background-color: #25c481;
    color: white;
}

@media screen and (max-width: 576px) {
    .responsive {
        position: relative;
    }
    .responsive .icon {
        position: absolute;
        right: 0;
        top: 0;
    }
    .responsive .link {
        float: none;
        display: block;
        text-align: left;
    }
}
</style>
