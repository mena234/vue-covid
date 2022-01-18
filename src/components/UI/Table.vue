<template>
    <section>
        <h1 class="text-5xl mb-10 text-white text-center uppercase">
            {{ header }}
        </h1>
        <div class="tbl-header text-left text-sm uppercase font-medium overflow-x-auto">
            <table class="table-fixed" :class="fullWidth && 'w-full'" cellpadding="0" cellspacing="0" border="0">
                <thead>
                    <tr>
                        <th v-for="(header,i) in tableHeaders" :key="i" class="px-3.5 py-5" scope="col">{{ header }}</th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="tbl-content overflow-x-auto mt-0 h-80 text-left text-sm font-light align-middle">
            <table class="table-fixed" :class="fullWidth && 'w-full'" cellpadding="0" cellspacing="0" border="0">
                <tbody>
                    <tr v-for="(item, i) in items" :key="i">
                        <td v-for="(value, key, i) in item" :key="i" class="p-3.5">{{ value }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    header: String,
    items: Array,
    tableHeaders: Array,
    fullWidth: {
        type: Boolean,
        default: true
    }
})
</script>

<style>
table {
    min-width: 80rem;
}
.tbl-header {
    background-color: rgba(255, 255, 255, 0.3);
}
.tbl-content {
    border: 1px solid rgba(255, 255, 255, 0.3);
}

th, td {
    min-width: 20rem;
}
td {
    border-bottom: solid 1px rgba(255, 255, 255, 0.1);
}

</style>
