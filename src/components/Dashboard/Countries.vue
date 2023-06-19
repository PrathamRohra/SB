<template>
  <div class="h-[148px] rounded-md shadow-sm shadow-gray-600/30">
    <div class="flex flex-row justify-around">
      <div
        v-for="(country, index) in countriesData.names"
        :key="index"
        class="h-full flex flex-col items-center justify-center w-40 p-2"
      >
        <p class="text-sm text-gray-400 mb-3">{{ country }}</p>
        <p class="text-2xl text-black font-bold mb-5">{{ countriesData.stats[index] }}</p>
        <Charts :chartData="countriesData.chartData[country]" :color="chartColor(country)" class="w-16 h-16" />
      </div>
    </div>
  </div>
</template>

<script>
import Charts from "../Dashboard/Charts.vue";
import { mapGetters } from 'vuex';

export default {
  name: "Countries",
  components: {
    Charts
  },
  computed: {
    ...mapGetters([
      'countriesData'
    ])
  },
  methods: {
    chartColor(country) {
      const chartData = this.countriesData.chartData[country];
      const lastValue = chartData[chartData.length - 1];
      const secondLastValue = chartData[chartData.length - 2];
  
      if (lastValue > secondLastValue) {
        return '#00E38C'; // Green color
      } else {
        return '#FF4B75'; // Red color
      }
    }
  }
  // data() {
  //   return {
  //     countries: {
  //       names: ["Italy", "USA", "Canada", "Spain", "Japan", "SA"],
  //       stats: [475, 431, 174, 475, 134, 471],
  //       chartData: {
  //         Italy: [0, 6, 2, 8, 7, 6, 4],
  //         USA: [4, 1, 6, 3, 8, 10, 12],
  //         Canada: [0, 6, 2, 8, 7, 6, 4],
  //         Spain: [4, 1, 6, 3, 8, 10, 12],
  //         Japan: [0, 6, 2, 8, 7, 6, 4],
  //         SA: [4, 1, 6, 3, 8, 10, 12],
  //       },
  //     },
  //   };
  // },
};
</script>
