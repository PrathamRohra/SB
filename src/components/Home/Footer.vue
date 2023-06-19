<template>
  <footer class="selection:bg-white w-[580px] sm:w-full selection:text-blue -mt-[520px]">
    <div
      id="footer"
      class="bg-cover bg-no-repeat w-full h-[720px]"
    ></div>
    <div class="flex flex-col md:flex-row md:space-x-2 text-white bg-blue p-20 justify-evenly items-start">
        <!--Tagline or description-->
        <div class="flex flex-col max-w-[80vw] sm:max-w-[140px] lg:max-w-lg mb-10">
            <p class="mb-6 text-xs lg:text-lg">Lorem Finaldream rure dolor in reprehenderit in voluptate velit esse cillum dolore e uis nostrud exercitation isi ut aliquip ex ea commodo consequat.</p>
            <div class="flex flex-row items-center space-x-3">
                <img src="../../assets/FB-Logo.svg" class="h-4 w-4"/>
                <img src="../../assets/FB-Logo.svg" class="h-4 w-4"/>
                <img src="../../assets/FB-Logo.svg" class="h-4 w-4"/>
            </div>
        </div>

        <!--Our Services-->
        <div class="flex flex-col max-w-[70vw] md:max-w-[140px] mb-10 lg:max-w-lg space-y-1 md:space-y-2">
            <h1 class="mb-3 underline text-xs decoration-[3px] decoration-[#21B3FF]">Our Services</h1>
            <p class="text-[8px] font-extralight">Web Development</p>
            <p class="text-[8px] font-extralight">Mobile Development</p>
            <p class="text-[8px] font-extralight">UX Designing</p>
            <p class="text-[8px] font-extralight">Cloud Technologies</p>
        </div>

        <!--Our Links-->
        <div class="flex flex-col max-w-[70vw] md:max-w-[140px] mb-10 lg:max-w-lg space-y-1 md:space-y-2">
            <h1 class="mb-3 underline text-xs decoration-[3px] decoration-[#21B3FF]">Our Links</h1>
            <p class="text-[8px] font-extralight">Web Development</p>
            <p class="text-[8px] font-extralight">Mobile Development</p>
            <p class="text-[8px] font-extralight">UX Designing</p>
            <p class="text-[8px] font-extralight">Cloud Technologies</p>
        </div>

        <!--Contact US-->
        <div class="flex flex-col max-w-[70vw] md:max-w-[140px] mb-10 lg:max-w-lg space-y-1 md:space-y-2">
            <h1 class="mb-3 underline text-xs decoration-[3px] decoration-[#21B3FF]">Contact Us</h1>
            <div class="flex flex-row items-center space-x-3">
              <img src="../../assets/Location.svg" class="h-3"/>
              <p class="text-[8px] font-extralight">Al. Dummyodl 124/23 floor 123 Banswara Street, 02-577 India.</p>
            </div>
            <div class="flex flex-row items-center space-x-3">
              <img src="../../assets/Call.svg" class="h-3"/>
              <p class="text-[8px] font-extralight">00 1800 245 453</p>
            </div>
            <div class="flex flex-row items-center space-x-3">
              <img src="../../assets/Email.svg" class="h-3"/>
              <p class="text-[8px] font-extralight">hello@inkyy.com</p>
            </div>            
        </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
