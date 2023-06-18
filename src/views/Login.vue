<template>
  <div id="login-bg" class="bg-cover bg-no-repeat h-screen">
    <div class="text-black flex flex-row justify-end">
      <!--CARD-->
      <div class="w-[35vw] h-60vh m-28 p-28">
        <form class="flex flex-col">
          <h1 class="mb-10 font-bold text-xl">Login to Access Dashboard</h1>
          <label class="mb-1"> Email<span class="text-red-600">*</span></label>
          <input
            class="h-10 w-full outline outline-[0.1px] mb-6 p-2 pl-4 text-xs"
            placeholder="youremail@example.com"
          />
          <label  class="mb-1"> Password <span class="text-red-600">*</span> </label>
          <input
            class="h-10 w-full outline outline-[0.1px] p-2 pl-4 text-xs"
            type="password" placeholder="shhhhhhh"
          />
          <button
            class="self-center hover:bg-blue hover:text-white ease-out duration-300 text-blue rounded-full w-44 h-12 mt-14 shadow-md shadow-gray-600/10 bg-white outline outline-2 outline-blue flex justify-center items-center"
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
};
</script>
