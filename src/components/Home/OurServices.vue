<template>
  <section class="flex flex-row w-full mt-20 pl-64 pr-64 pb-64">
    <div class="flex flex-col max-w-lg pt-40">
      <div class="flex flex-row items-center space-x-4 mb-2">
        <img src="../../assets/play-solid.svg" class="h-4" />
        <h1 class="text-blue font-bold text-xl drop-shadow-lg">OUR SERVICES</h1>
      </div>
      <h1 class="text-black font-extrabold text-2xl mb-10">
        Transforming your ideas into Reality
      </h1>
      <div class="flex flex-row flex-wrap w-50vw">
        <button
          v-for="service in ourServices"
          :key="service"
          @mouseover="displayServiceDetails(service)"
          class="bg-[#16B2FF17] hover:bg-blue hover:text-white hover:animate-pulse text-blue font-bold text-xl w-60 h-14 rounded-xl flex items-center justify-center mr-3 mb-6"
        >
          {{ service }}
        </button>
      </div>
    </div>

    <div
      v-if="showServiceDetails"
      class="absolute right-0 bg-blue w-4/12 h-screen rounded-md"
    >
      <div
        class="absolute p-10 bg-white right-44 top-24 h-3/4 w-11/12 rounded-md shadow-2xl"
      >
        <div class="flex flex-row space-x-6 items-center mb-10">
          <img src="../../assets/UX-Designing.svg" class="h-16" />
          <h1 class="text-3xl font-bold">{{ selectedService }}</h1>
        </div>
        <p class="text-md mb-10">
          Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex
          odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque
          habitant.
        </p>

        <div class="flex flex-row mb-2 space-x-2 items-center">
          <img src="../../assets/Check.svg" />
          <p class="text-sm">
            Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.
          </p>
        </div>

        <div class="flex flex-row mb-2 space-x-2 items-center">
          <img src="../../assets/Check.svg" />
          <p class="text-sm">Lorem ipsum dolor sit amet</p>
        </div>

        <div class="flex flex-row mb-2 space-x-2 items-center">
          <img src="../../assets/Check.svg" />
          <p class="text-sm">conse ctetur adipi scing elit.</p>
        </div>

        <div class="flex flex-row mb-2 space-x-2 items-center">
          <img src="../../assets/Check.svg" />
          <p class="text-sm">Lorem ipsum dolor sit amet, conse ctetur</p>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "OurServices",
  data() {
    return {
      ourServices: [
        "Web Development",
        "App Development",
        "UI/UX Designing",
        "Branding",
        "Cloud Technologies",
      ],
      selectedService: "UI/UX Designing",
      showServiceDetails: true,
    };
  },
  methods: {
    displayServiceDetails(service) {
      this.selectedService = service;
      this.showServiceDetails = true;
    },
  },
};
</script>
