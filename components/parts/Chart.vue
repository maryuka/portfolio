<script setup lang="ts">
import { ref } from 'vue'
import {
    Chart as ChartJS,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Legend,
    Tooltip,
} from 'chart.js'

ChartJS.register(
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Legend,
    Tooltip,
)

const props = defineProps<{
    canvasId: string,
    chartData: object,
}>();
const canvasId = props.canvasId;
const chartData = props.chartData;

const ChartOptions = {
    backgroundColor: '#E5EAF6',
    borderRadius: '50',
    responsive: true,
    indexAxis: 'y',
    barPercentage: '0.7',
    scales: {
        x: {
            border: {
                display: false
            },
            grid: {
                display: false,
            },
            ticks: {
                display: false
            }
        },
        y: {
            grid: {
                display: false,
            },
        }
    },
    plugins: {
        legend: {
            display: false,
            labels: {
                font: {
                    family: 'Noto Serif JP'
                }
            }
        },

    }
}

onMounted(() => {
    const chartEl = <HTMLCanvasElement>document.getElementById(canvasId);
    const chartFlag = ref(false);
    const chart = ref();

    const chartFunc = function () {
        const context = chartEl.getContext('2d');
        if (chart.value) {
            chart.value.clear();
            chart.value.destroy();
        }
        console.log(chartData);
        chart.value = new ChartJS(context, {
            type: 'bar',
            data: chartData,
            options: ChartOptions,
        })
    };
    const graphAnim = function () {
        const wy = window.scrollY,
            wb = wy + window.innerHeight,
            chartPos = wy + chartEl.getBoundingClientRect().top
        if (wb > chartPos && chartFlag.value == false) {
            chartFunc();
            chartFlag.value = true;
        }
    };
    window.addEventListener('load', graphAnim);
    window.addEventListener('scroll', graphAnim);
})
</script>

<template>
    <canvas :id="canvasId"></canvas>
</template>