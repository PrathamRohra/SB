
import USAFlag from "../../../assets/Dashboard/usa.svg";
import SpainFlag from "../../../assets/Dashboard/spain.svg";
import ItalyFlag from "../../../assets/Dashboard/italy.svg";

//STATE
const state = (state)=>({
    CountryComp: [
        {
          img: USAFlag,
          countryName: "United States",
          progress: "93%",
        },
        {
          img: ItalyFlag,
          countryName: "Italy",
          progress: "73%",
        },
        {
          img: SpainFlag,
          countryName: "Spain",
          progress: "13%",
        },
      ],
})

const getters= {
    getCountryComparison: (state)=>{
        return state.CountryComp;
    }
}

export default {
    state,
    getters
}