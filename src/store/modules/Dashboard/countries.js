
//STATE
const state = () => ({
  countriesData: {
    names: ["Italy", "USA", "Canada", "Spain", "Japan", "SA"],
    stats: [475, 431, 174, 475, 134, 471],
    chartData: {
      Italy: [0, 6, 2, 8, 7, 6, 4],
      USA: [4, 1, 6, 3, 8, 10, 12],
      Canada: [0, 6, 2, 5, 4, 2, 4],
      Spain: [4, 5, 6, 12, 8, 10, 12],
      Japan: [3, 1, 3, 4, 7, 6, 1],
      SA: [4, 3, 4, 3, 8, 10, 12],
    },
    color: '#00E38C'
  },
});

//GETTERS
const getters = {
    countriesData: (state) => {
        return state.countriesData;
    }
}

  

export default {
  state,
  getters
};
