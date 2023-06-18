<template>
<section
    id="hero"
    class="bg-cover bg-no-repeat -mt-[120px] max-w-full min-h-[840px] max-h-[840px] text-white pl-56 pt-44 selection:bg-white selection:text-blue"
  >
    <h1 class="font-bold text-4xl max-w-md">
      Lorem Ipsum is simply dummy text of the printing and typesetting.
    </h1>
    <p class="max-w-md mt-10 font-light text-[#9ABFFF]">
      Our products are fully custom-made, built with the latest technologies and
      cloud-architectures.
    </p>
    <button
      class="text-black rounded-full w-60 h-16 mt-14 shadow-md shadow-gray-600/10 bg-white flex justify-center items-center hover:bg-slate-200"
    >
      Get Started
    </button>
  </section>
</template>

<script>
export default {
    name: 'Hero'
}
</script>