<template>
  <section
    id="contact-us"
    class="bg-cover bg-no-repeat h-screen w-screen mt-10 p-4"
  >
    <div class="flex flex-row justify-between">
      <img src="../../assets/Contact-Us-Graphic.svg" class="mt-40 w-[40vw]" />
      <div
        class="bg-white shadow-lg shadow-blue/20 rounded-md w-1/3 min-h-[50vh] mr-32"
      >
        <form class="p-14 text-xl">
          <h1 class="mb-10  font-bold">Send Us A Message</h1>
          <input
            class="border-b-[1px] mb-4 p-1 border-black w-full font-light text-sm focus:border-b-[1px] focus:border-blue focus:outline-none"
            placeholder="Your Email*"
          />
          <input
            class="border-b-[1px] p-1 mb-4 border-black w-full font-light text-sm focus:border-b-[1px] focus:border-blue focus:outline-none"
            placeholder="Your Name*"
          />
          <input
            class="border-b-[1px] p-1 mb-4 border-black w-full font-light text-sm focus:border-b-[1px] focus:border-blue focus:outline-none"
            placeholder="Your Phone Number*"
          />
          <input
            class="border-b-[1px] p-1 mb-4 border-black w-full font-light text-sm focus:border-b-[1px] focus:border-blue focus:outline-none"
            placeholder="Subject"
          />
          <textarea
            class="border-b-[1px] p-1 mb-4 border-black w-full font-light text-sm focus:border-b-[1px] focus:border-blue focus:outline-none resize-none h-32"
            placeholder="Your Message"
          />
          <div class="flex flex-row items-center space-x-2">
            <input type="checkbox" class="w-4 h-4 accent-emerald-600"/>
            <p class="text-xs">By sending this message, you confirm that you have read and agreed to our privacy-policy.</p>
          </div>
          <button
          class="text-white rounded-full w-52 h-12 mt-14 shadow-md shadow-gray-600/10 bg-blue outline outline-2 outline-blue hover:bg-blue/90 ease-in duration-300 flex justify-center items-center"
        >
          Get Started
        </button>

        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactUs"
};
</script>
