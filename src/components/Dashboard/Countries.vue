<template>
  <div class="h-[148px] rounded-md shadow-sm shadow-gray-600/30">
    <div class="flex flex-row justify-around">
      <div
        v-for="(country, index) in countries.names"
        :key="index"
        class="h-full flex flex-col items-center justify-center w-40 p-2"
      >
        <p class="text-sm text-gray-400 mb-3">{{ country }}</p>
        <p class="text-2xl text-black font-bold mb-5">{{ countries.stats[index] }}</p>
        <Charts :chartData="countries.chartData[country]" class="w-16 h-16" />
      </div>
    </div>
  </div>
</template>

<script>
import Charts from "../Dashboard/Charts.vue";
export default {
  name: "Countries",
  components: {
    Charts
  },
  data() {
    return {
      countries: {
        names: ["Italy", "USA", "Canada", "Spain", "Japan", "SA"],
        stats: [475, 431, 174, 475, 134, 471],
        chartData: {
          Italy: [0, 6, 2, 8, 7, 6, 4],
          USA: [4, 1, 6, 3, 8, 10, 12],
          Canada: [0, 6, 2, 8, 7, 6, 4],
          Spain: [4, 1, 6, 3, 8, 10, 12],
          Japan: [0, 6, 2, 8, 7, 6, 4],
          SA: [4, 1, 6, 3, 8, 10, 12],
        },
      },
    };
  },
};
</script>
