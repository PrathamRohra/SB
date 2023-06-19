<template>
  <div class="flex flex-row justify-between w-full h-32 items-center">
    <div>
      <h1 class="text-2xl font-bold">Dashboard</h1>
      <p class="text-xs text-gray-400">Welcome back, {{ getUserDetails.firstName }}</p>
    </div>
    <div class="flex flex-row justify-center items-center space-x-4">
        <button class="flex flex-row items-center justify-around p-2 w-32 h-10 bg-blue rounded-md">
            <img src="../../assets/Dashboard/e-add.svg" class=" w-4 h-4"/>
            <p class="text-white h-6 text-opacity-80" >Add Unit</p>
        </button>
        <img src="../../assets/Dashboard/Avatar1.jpeg" class="rounded-full h-10 w-12"/>
        <p class="text-sm text-gray-500">{{ getUserDetails.firstName }} {{ getUserDetails.lastName }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "ProfileBar",

  computed:{
    ...mapGetters(['getUserDetails'])
  },

  mounted(){
    console.log(this.getUserDetails.firstName);
  }
};
</script>
