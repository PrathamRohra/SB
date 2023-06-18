<template>
    <section class="w-full mt-20">
    <div
      id="about-us"
      class="flex justify-end bg-cover bg-no-repeat pr-64 min-h-[840px] max-h-[840px] text-black pl-56 pt-44"
    >
      <div class="flex flex-col max-w-lg">
        <div class="flex flex-row items-center space-x-4 mb-2">
          <img src="../../assets/play-solid.svg" class="h-4" />
          <h1 class="text-blue font-bold text-xl drop-shadow-lg">ABOUT US</h1>
        </div>
        <h1 class="text-black font-extrabold text-2xl mb-10">
          Great Digital Agency
        </h1>
        <p class="text-black mb-7">
          Our products are fully custom-made, built with the latest technologies
          and cloud-architectures.
        </p>
        <p class="text-gray-600 font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex
          odio, turpis accumsan congue. Quisque blandit dui Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. In convallis porta mauris non aliquam.
        </p>
        <button
          class="text-blue rounded-full w-60 h-16 mt-14 shadow-md shadow-gray-600/10 bg-white outline outline-2 outline-blue flex justify-center items-center"
        >
          Get Started
        </button>
      </div>
    </div>
  </section>
</template>

<script>
 export default {
    name: "AboutUs"
 }
</script>