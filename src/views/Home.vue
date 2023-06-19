<template>
  <div class="min-w-screen w-[100vw]">
    <Navbar />
    <!--HERO SECTION-->
    <Hero />
    <!--HOME - ABOUT US -->
    <AboutUs />
    <!-- OUR SERVICES -->
    <OurServices />
    <!--CORE TECHNOLOGIES-->
    <CoreTech />

    <ContactUs />

    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Home/Hero.vue";
import AboutUs from "../components/Home/AboutUs.vue";
import OurServices from "../components/Home/OurServices.vue";
import CoreTech from "../components/Home/CoreTech.vue";
import ContactUs from "../components/Home/ContactUs.vue";
import Footer from "../components/Home/Footer.vue";

export default {
  name: "Home",
  components: {
    Hero,
    AboutUs,
    OurServices,
    CoreTech,
    ContactUs,
    Footer,
    Navbar,
  },
};
</script>
