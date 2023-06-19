<template>
  <section
    id="hero"
    class=" bg-cover bg-no-repeat -mt-[60px] md:-mt-[120px] h-[50vh] lg:min-h-[840px] lg:max-h-[840px] text-white pl-10 md:pl-20 pt-14 lg:pl-56 md:pt-44 selection:bg-white selection:text-blue"
  >
    <h1 class="font-bold lg:text-4xl md:text-3xl text-2xl mt-10 sm:text-xl max-w-xs md:max-w-md">
      Lorem Ipsum is simply dummy text of the printing and typesetting.
    </h1>
    <p
      class="max-w-[190px] md:max-w-md mt-10 font-light md:text-[#9ABFFF] text-xs md:text-md sm:text-sm sm:drop-shadow-lg sm:shadow-blue/25"
    >
      Our products are fully custom-made, built with the latest technologies and
      cloud-architectures.
    </p>
    <button
      class="md:text-black rounded-full w-40 h-12 md:w-60 md:h-16 mt-14 shadow-md shadow-gray-600/10 bg-blue text-white md:bg-white flex justify-center items-center hover:bg-slate-200"
    >
      Get Started
    </button>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>
