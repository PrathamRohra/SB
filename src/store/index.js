import  { createStore } from 'vuex';
import OurServices from './modules/ourServices';
import Countries from './modules/Dashboard/countries';
import User from './modules/Dashboard/user';
import teamMembers from './modules/Dashboard/teamMembers';
import CountryComparison from './modules/Dashboard/getCountryComparison';

export default createStore ({
    modules: {
        OurServices,
        Countries,
        User,
        teamMembers,
        CountryComparison
    }
})
 
