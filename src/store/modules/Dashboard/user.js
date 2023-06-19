
//STATE
const state = ()=> ({
    firstName: "Andrew",
    lastName: "Johnston",
    balance: 5900,
    profits: 950,
    losses: 450,
    currencies: ['Bitcoin', 'Dollar', 'Yen', 'Euro']
})

//GETTERS
const getters = {
    getUserDetails: (state)=>{
        const { firstName, lastName, balance, profits, losses, currencies } = state;
        return {
            firstName,
            lastName,
            balance, 
            profits,
            losses,
            currencies
        }
    }
}
export default {
    state,
    getters
}