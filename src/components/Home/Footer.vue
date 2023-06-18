<template>
  <footer class="selection:bg-white selection:text-blue">
    <div
      id="footer"
      class="bg-cover bg-no-repeat w-full h-[720px] -mt-[610px]"
    ></div>
    <div class="flex flex-row text-white bg-blue p-20 justify-between items-center">
        <!--Tagline or description-->
        <div class="flex flex-col max-w-lg">
            <p class="mb-6">Lorem Finaldream rure dolor in reprehenderit in voluptate velit esse cillum dolore e uis nostrud exercitation isi ut aliquip ex ea commodo consequat.</p>
            <div class="flex flex-row items-center space-x-3">
                <img src="../../assets/FB-Logo.svg"/>
                <img src="../../assets/FB-Logo.svg"/>
                <img src="../../assets/FB-Logo.svg"/>
            </div>
        </div>

        <!--Our Services-->
        <div class="flex flex-col max-w-xs">
            <h1 class="mb-3 underline decoration-[3px] decoration-[#21B3FF]">Our Services</h1>
            <p>Web Development</p>
            <p>Mobile Development</p>
            <p>UX Designing</p>
            <p>Cloud Technologies</p>
        </div>

        <!--Our Links-->
        <div class="flex flex-col  max-w-xs">
            <h1 class="mb-3 underline decoration-4 decoration-[#21B3FF] decoration">Our Links</h1>
            <p>Web Development</p>
            <p>Mobile Development</p>
            <p>UX Designing</p>
            <p>Cloud Technologies</p>
        </div>

        <!--Contact US-->
        <div class="flex flex-col  max-w-xs space-y-3">
            <h1 class="mb-3 underline decoration-4 decoration-[#21B3FF] decoration">Contact Us</h1>
            <div class="flex flex-row items-center space-x-3">
              <img src="../../assets/Location.svg" class="h-6"/>
              <p>Al. Dummyodl 124/23 floor 123 Banswara Street, 02-577 India.</p>
            </div>
            <div class="flex flex-row items-center space-x-3">
              <img src="../../assets/Call.svg" class="h-5"/>
              <p>00 1800 245 453</p>
            </div>
            <div class="flex flex-row items-center space-x-3">
              <img src="../../assets/Email.svg" class="h-4"/>
              <p>hello@inkyy.com</p>
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
