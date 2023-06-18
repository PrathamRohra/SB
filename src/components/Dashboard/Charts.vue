<template>
  <div>
    <Line
      :data="data.chartD2"
      :options="options"
    />
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LineElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

export default {
  name: "App",
  props: {
    chartData: {
      type: Array,
      required: true,
      default:[6, 2, 3, 6, 1], 
    },
  },
  components: {
    Line,
  },
  mounted(){
    console.log(this.chartData);
  },
  data() {
    return {
      data: {
        // chartD: {
        //   labels: ["January", "February", "March", "New", "Hey"],
        //   datasets: [
        //     {
        //       backgroundColor: "white",
        //       borderColor: "black",
        //       borderWidth: 2,
        //       data: [6, 2, 3, 6, 1],
        //       fill: false,
        //     },
        //   ],
        // },
        chartD2: {
          labels: ["1", "2", "3", "4", "5", "6", "7"],
          datasets: [
            {
              backgroundColor: "white",
              borderColor: "#0F77FA",
              borderWidth: 2,
              data: this.chartData.map((num)=>Number(num)),
              fill: false,
            },
          ],
        },
      },
      options: {
        responsive: true,
        maintainAspectRatio	: true,
        elements: {
          point: {
            radius: 0, // Hide data points
            hitRadius: 0,
            hoverRadius: 0,
            hoverBorderWidth: 0,
          },
        },
        plugins: {
          title: {
            display: false,
          },
          legend: {
            display: false, // Hide the legend
          },
        },
        scales: {
          x: {
            display: false,
            beginAtZero: true,
            grid: {
              display: false, // Hide x-axis grid lines
            },
          },
          y: {
            display: false,
            beginAtZero: true,
            ticks: {
              display: false, // Hide y-axis ticks
            },
            grid: {
              display: false,
            },
          },
        },
      },
    };
  },
};
</script>
