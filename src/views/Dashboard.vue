<template>
  <div class="flex flex-row bg-[#FCFCFC]">
    <Sidebar />
    <div class="flex flex-col w-full pr-20 pl-20">
      <ProfileBar />
      <ProfitsLosses />
      <Countries />
      <!--For Team Members and countries comparison-->
      <div class="flex flex-row justify-between mt-5">
        <!--Team Members-->
        <div class="flex flex-col w-[35vw]">
          <div class="flex flex-row justify-between mb-4">
            <h1 class="text-lg text-[#11193C] pl-4">Team Members</h1>
            <button class="text-blue text-xs pr-4">View All</button>
          </div>
          <!--Add component here-->
          <div v-for="member in TeamMembers">
            <TeamMembers :name="member.name" :role="member.role" />
          </div>
        </div>

        <!--Countries Comparison-->
        <div class="flex flex-col w-[35vw] pl-8 pr-8">
          <!--Comparison-->
          <div class="flex flex-row justify-between mb-4">
            <h1 class="text-lg text-[#11193C] pl-4">Comparison</h1>
            <button class="text-blue text-xs pr-4">View All</button>
          </div>
          <div
            class="bg-white shadow-lg rounded-md shadow-black/10 h-full w-full"
          >
            <div v-for="(country, idx) in CountryComp" :key="idx">
              <Comparisons
                :imgSrc="country.img"
                :countryName="country.countryName"
                :progress="country.progress"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Dashboard/Sidebar.vue";
import Charts from "../components/Dashboard/Charts.vue";
import ProfileBar from "../components/Dashboard/ProfileBar.vue";
import ProfitsLosses from "../components/Dashboard/ProfitsLosses.vue";
import Countries from "../components/Dashboard/Countries.vue";
import TeamMembers from "../components/Dashboard/TeamMembers.vue";
import Comparisons from "../components/Dashboard/Comparisons.vue";
import USAFlag from "../assets/Dashboard/usa.svg";
import SpainFlag from "../assets/Dashboard/spain.svg";
import ItalyFlag from "../assets/Dashboard/italy.svg";

export default {
  name: "Dashboard",
  components: {
    Sidebar,
    Charts,
    ProfileBar,
    ProfitsLosses,
    Countries,
    TeamMembers,
    Comparisons,
  },
  data() {
    return {
      TeamMembers: [
        { name: "Andrew Johnston", role: "Top Trader" },
        { name: "Anna Atkinsons", role: "Manager" },
        { name: "Mark Atkinsons", role: "Top Trader" },
      ],

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
    };
  },
};
</script>
