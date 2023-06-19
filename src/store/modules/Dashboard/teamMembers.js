//STATE
const state = () => ({
  TeamMembers: [
    { name: "Andrew Johnston", role: "Top Trader" },
    { name: "Anna Atkinsons", role: "Manager" },
    { name: "Mark Atkinsons", role: "Top Trader" },
  ],
});


//GETTERS
const getters = {
    getTeamMembers: (state)=>{
        return state.TeamMembers;
    }
}

export default {
    state,
    getters
}