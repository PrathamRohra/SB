

//STATE
const state = ()=>({
    ourServices: [
        "Web Development",
        "App Development",
        "UI/UX Designing",
        "Branding",
        "Cloud Technologies",
      ],
      selectedService: "UI/UX Designing",
      showServiceDetails: true,
})


//GETTERS
const getters = {
    ourServices: (state) =>{
        return state.ourServices;
    },

    selectedService: (state) =>{
        return state.selectedService;
    }
    ,
    showServiceDetails: (state)=>{
        return state.showServiceDetails;
    }
}

//MUTATIONS
const mutations = {
    displayServiceDetails(state, payload) {
        state.selectedService = payload;
        state.showServiceDetails = true;
    },
}

export default {
    state,
    getters,
    mutations,
}