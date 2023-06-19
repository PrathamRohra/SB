<template>
  <nav
    id="navbar"
    class="bg-blue text-white flex flex-row items-center justify-between pl-10 md:pl-16 md:pr-16 lg:pl-[140px] xl:pl-[281px] xl:pr-[281px] pt-[40px] md:pt-[67px] pb-6 selection:bg-white selection:text-blue"
  >
    <div>
      <h1>Logo</h1>
    </div>
    <div id="nav--contents" class="md:flex lg:pr-10 flex-row md:space-x-[20px] items-center h-14 hidden">
      <p>About</p>
      <p>Services</p>
      <p>Case Studies</p>
      <p>Testimonials</p>
      <p>Contact</p>
      <RouterLink to="/login">
        <button
          class="bg-white hover:bg-slate-200 text-black rounded-md h-10 w-36 shadow-md shadow-gray-600/10 flex items-center justify-center"
        >
          LOGIN
        </button>
      </RouterLink>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "Navbar",
  components: { RouterLink },
};
</script>
