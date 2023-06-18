<template>
  <section id="core-tech" class="bg-cover h-screen w-screen bg-no-repeat flex flex-col items-center justify-center text-center">
    <h1 class="text-3xl font-extrabold -mt-32">Core Technologies</h1>
    <p class="font-light mt-10 w-1/2">Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.</p>
    <div class="mt-14 flex flex-row w-1/4 h-14 space-x-8 justify-center items-center bg-white shadow-2xl shadow-[#0E77FF26]/50 rounded-full">
      <button class="hover:text-blue">Design</button>
      <button class="hover:text-blue">Development</button>
      <button class="hover:text-blue">Marketing</button>
    </div>

    <div class="flex flex-row flex-wrap mt-32 space-x-8 max-w-5xl justify-center ">
      <div v-for="tech in developmentTechs" :key="tech" class="w-32 h-32 outline outline-[1.7px] outline-blue rounded-md flex justify-center items-center mb-8">
        <img :src="getTechImagePath(tech)" class="h-20 w-20" />
      </div>
    </div>
  </section>
</template>

<script>
import AmazonWebServicesLogo from '../../assets/logos/Amazon_Web_Services_Logo-1.svg';
import FirebaseLogo from '../../assets/logos/Firebase-Logo.svg';
import JSLogo from '../../assets/logos/JS-Logo.svg';
import NodeLogo from '../../assets/logos/Node-Logo.svg';
import ReactIcon from '../../assets/logos/React-icon-1.svg';
import ReduxLogo from '../../assets/logos/redux-logo.svg';

export default {
  name: "CoreTech",
  data() {
    return {
      developmentTechs: [
        { name: "Amazon_Web_Services_Logo", image: AmazonWebServicesLogo },
        { name: "Firebase-Logo", image: FirebaseLogo },
        { name: "JS-Logo", image: JSLogo },
        { name: "Node-Logo", image: NodeLogo },
        { name: "React-icon-1", image: ReactIcon },
        { name: "redux-logo", image: ReduxLogo },
        { name: "JS-Logo", image: JSLogo },
        { name: "Node-Logo", image: NodeLogo },
        { name: "Amazon_Web_Services_Logo", image: AmazonWebServicesLogo },
        { name: "Firebase-Logo", image: FirebaseLogo },
      ],
    };
  },
  methods: {
    getTechImagePath(tech) {
      return tech.image;
    },
  },
};
</script>
