<template>
    <section>
        <h1 class="sm:text-5xl text-2xl mb-10 text-white text-center uppercase">
            {{ header }}
        </h1>
        <div
            class="tbl-header text-left text-sm uppercase font-medium overflow-x-auto"
            id="tbl-header-content"
            ref="tableContentHeader"
        >
            <table
                class="table-fixed"
                :class="fullWidth && 'w-full'"
                cellpadding="0"
                cellspacing="0"
                border="0"
                :style="{minWidth: tableMinWidth + 'rem'}"
            >
                <thead>
                    <tr>
                        <th
                            v-for="(header, i) in tableHeaders"
                            :key="i"
                            class="px-3.5 py-5"
                            scope="col"
                        >
                            {{ header }}
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
        <div
            class="tbl-content overflow-x-auto mt-0 h-80 text-left text-sm font-light align-middle"
            ref="tableContent"
        >
            <table
                class="table-fixed"
                :class="fullWidth && 'w-full'"
                cellpadding="0"
                cellspacing="0"
                border="0"
                :style="{minWidth: tableMinWidth + 'rem'}"
            >
                <tbody>
                    <tr v-for="(item, i) in items" :key="i">
                        <td
                            v-for="(value, key, i) in item"
                            :key="i"
                            class="p-3.5"
                        >
                            {{ value }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script setup>
import { defineProps, onMounted, onBeforeUnmount, ref } from "vue";

defineProps({
    header: String,
    items: Array,
    tableHeaders: Array,
    fullWidth: {
        type: Boolean,
        default: true,
    },
    tableMinWidth: {
        type: Number,
        default: 80
    }
});

const tableContent = ref(null);
const tableContentHeader = ref(null);

const onScroll = () => {
    tableContentHeader.value.scrollLeft = tableContent.value.scrollLeft;
};

onMounted(() => {
    tableContent.value.addEventListener("scroll", onScroll);
});

onBeforeUnmount(() => {
    tableContent.value.removeEventListener("scroll", onScroll);
});
</script>

<style>

.tbl-header {
    background-color: rgba(255, 255, 255, 0.3);
}
.tbl-content {
    border: 1px solid rgba(255, 255, 255, 0.3);
}

th,
td {
    min-width: 15rem;
}
td {
    border-bottom: solid 1px rgba(255, 255, 255, 0.1);
}

#tbl-header-content {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
}
#tbl-header-content::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
}
</style>
