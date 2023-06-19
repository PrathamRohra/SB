<template>
  <section id="our-services" class="w-full h-full flex flex-row items-center mt-32 lg:mt-40 pl-6 sm:pl-10 lg:pl-64 md:pl-32 md:pr-32 md:pb-32 lg:pr-64 lg:pb-64 mb-52">
    <div class="flex flex-col max-w-[140px] lg:max-w-md xl:max-w-2xl pl-4 pt-20 lg:pt-40">
      <div class="flex flex-row items-center space-x-4 mb-2">
        <img src="../../assets/play-solid.svg" class="h-4" />
        <h1 class="text-blue font-bold text-sm md:text-xl drop-shadow-lg">OUR SERVICES</h1>
      </div>
      <h1 class="text-black font-extrabold text-sm lg:text-lg xl:text-2xl mb-10">
        Transforming your ideas into Reality
      </h1>
      <div class="flex flex-row flex-wrap lg:w-50vw">
        <button
          v-for="service in ourServices"
          :key="service"
          @mouseover="displayServiceDetails(service)"
          class="bg-[#16B2FF17] hover:bg-blue hover:text-white hover:animate-pulse text-blue font-bold text-sm p-1 md:text-xl w-52 lg:w-60 h-14 rounded-xl flex items-center justify-center mr-3 mb-6"
        >
          {{ service }}
        </button>
      </div>
    </div>

    <div
      v-if="showServiceDetails"
      class="absolute  -right-1/2 sm:right-0 bg-blue w-1/2 h-3/4 md:h-4/5  lg:w-4/12 lg:h-[80vh] xl:h-screen rounded-md"
    >
      <div
        class="absolute p-4 lg:p-10 bg-white right-28 md:right-20 md:p-6 lg:right-44 top-24 h-3/4 w-11/12 rounded-md shadow-2xl overflow-hidden"
      >
        <div class="flex flex-row md:space-x-6 items-center mb-10">
          <img src="../../assets/UX-Designing.svg" class="h-8 md:h-10 lg:h-16" />
          <h1 class="text-xs md:text-lg lg:text-3xl font-bold">{{ selectedService }}</h1>
        </div>
        <p class="text-[10px] md:text-sm mb-10">
          Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex
          odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque
          habitant.
        </p>

        <div class="flex flex-row mb-2 space-x-2 items-center">
          <img src="../../assets/Check.svg" class="h-5 w-5 md:h-8 md:w-8"/>
          <p class="text-[10px] md:text-sm">
            Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.
          </p>
        </div>

        <div class="flex flex-row mb-2 space-x-2 items-center">
          <img src="../../assets/Check.svg" class="h-5 w-5 md:h-8 md:w-8"/>
          <p class="text-[10px] md:text-sm">Lorem ipsum dolor sit amet</p>
        </div>

        <div class="flex flex-row mb-2 space-x-2 items-center">
          <img src="../../assets/Check.svg" class="h-5 w-5 md:h-8 md:w-8"/>
          <p class="text-[10px] md:text-sm">conse ctetur adipi scing elit.</p>
        </div>

        <div class="flex flex-row mb-2 space-x-2 items-center">
          <img src="../../assets/Check.svg" class="h-5 w-5 md:h-8 md:w-8"/>
          <p class="text-[10px] md:text-sm">Lorem ipsum dolor sit amet, conse ctetur</p>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: "OurServices",
  computed: {
    ...mapGetters([
      'ourServices',
      'selectedService',
      'showServiceDetails'
    ])
  },
  methods: {
    ...mapMutations([
      'displayServiceDetails'
    ])
  },
};
</script>
