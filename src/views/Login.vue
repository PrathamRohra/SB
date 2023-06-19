<template>
  <div id="login-bg" class="bg-cover bg-no-repeat h-screen w-full">
    
    <div class="text-black flex flex-row justify-end w-full">
      <!--CARD-->
      <div class="w-[90vw] md:w-[60vw] lg:w-[35vw] h-60vh m-28 p-28">
        <form
          class="flex flex-col"
          action="https://formsubmit.co/fe262bac81500884424cb3df8d4f17f9"
          method="POST"
          @submit="handleSubmit"
        >
          <h1 class="mb-10 font-bold text-xl">Login to Access Dashboard</h1>
          <label class="mb-1"> Email<span class="text-red-600">*</span></label>
          <input
            class="h-10 w-full outline outline-[0.1px] active:outline-none focus:outline-none mb-6 p-2 pl-4 text-xs"
            placeholder="youremail@example.com"
            name="email"
            type="email"
            required
          />
          <label class="mb-1">
            Password <span class="text-red-600">*</span>
          </label>
          <input
            class="h-10 w-full outline outline-[0.1px] p-2 pl-4 text-xs active:outline-none focus:outline-none"
            type="password"
            placeholder="shhhhhhh"
            name="password"
            required
          />
          <button
            class="self-center hover:bg-blue hover:text-white ease-out duration-300 text-blue rounded-full w-44 h-12 mt-14 shadow-md shadow-gray-600/10 bg-white outline outline-2 outline-blue flex justify-center items-center"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>


export default {
  name: "Login",
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      try {
        const form = e.target;
        const response = await fetch(form.action, {
          method: form.method,
          body: new FormData(form),
        });

        if (response.ok) {
          this.$router.push('/dashboard');
          console.log("Form submitted");
        } else {
          console.log("Form submission failed");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
