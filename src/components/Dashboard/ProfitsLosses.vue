<template>
  <div class="flex flex-row justify-between mb-14 h-20">
    <div class="border-r-2 p-4 pr-10 justify-around">
      <h1 class="text-md text-gray-500 mb-2">BALANCE</h1>
      <p class="text-xl font-bold text-zinc-800">${{ getUserDetails.balance }}.00</p>
    </div>
    <div class="border-r-2 p-4 pr-10 justify-around">
      <h1 class="text-md text-gray-500 mb-2">PROFITS</h1>
      <p class="text-xl font-bold text-zinc-800">${{ getUserDetails.profits }}.00</p>
    </div>
    <div class="border-r-2 p-4 pr-10 justify-around">
      <h1 class="text-md text-gray-500 mb-2">LOSSES</h1>
      <p class="text-xl font-bold text-zinc-800">${{ getUserDetails.losses }}.00</p>
    </div>
    <div class="p-4 pr-10 justify-around">
      <h1 class="text-md text-gray-500 mb-2">CURRENCIES</h1>
      <div class="flex flex-row space-x-3">
        <img
          src="../../assets/Dashboard/currency-dollar.svg"
          class="h-6 w-6 rounded-full bg-[#2464FC]/20 p-1"
        />
        <img
          src="../../assets/Dashboard/currency-euro.svg"
          class="h-6 w-6 rounded-full bg-[#2464FC]/20 p-1"
        />
        <img
          src="../../assets/Dashboard/currency-yen.svg"
          class="h-6 w-6 rounded-full bg-[#2464FC]/20 p-1"
        />
        <img
          src="../../assets/Dashboard/bitcoin-2.svg"
          class="h-6 w-6 rounded-full bg-[#2464FC]/20 p-1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "ProfitsLoss",
  computed: {
    ...mapGetters(["getUserDetails"]),
  },
};
</script>
