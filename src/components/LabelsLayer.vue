<template>
    <g class="layer-labels">
        <text
            v-for="(p, i) in points"
            :key="i"
            :x="p.x"
            :y="p.y - 10"
            text-anchor="middle"
            font-size="12"
            fill="#fff"
        >
            {{ p.props.data[dataKeys[1]] }}
        </text>
    </g>
</template>

<script setup>
import { usePoints } from "vue3-charts";
const props = defineProps({
    dataKeys: {
        type: Object,
        required: true,
    },
});
const { points } = usePoints(props.dataKeys);
</script>
