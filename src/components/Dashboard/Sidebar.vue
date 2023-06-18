<template>
  <div class="h-screen w-44 shadow-2xl shadow-black/30 p-8">

    <div class="flex flex-col items-center justify-between h-full">

      <div class="flex flex-col">
        <button class="flex flex-col justify-center items-center text-xs w-24 h-24 rounded-md shadow-2xl shadow-black/60 hover:shadow-2xl hover:shadow-black/30">
          <img src="../../assets/Dashboard/metrics.svg" class="h-8 w-8 mb-2" />
          Dashboard
        </button>
        <button class="flex flex-col justify-center items-center text-xs w-24 h-24 rounded-md hover:shadow-2xl hover:shadow-black/30">
          <img src="../../assets/Dashboard/analytics.svg" class="h-8 w-8 mb-2" />
          Analytics
        </button>
        <button class="flex flex-col justify-center items-center text-xs w-24 h-24 rounded-md hover:shadow-2xl hover:shadow-black/30">
          <img src="../../assets/Dashboard/currency-exchange-2.svg" class="h-8 w-8 mb-2" />
          Trading
        </button>
        <button class="flex flex-col justify-center items-center text-xs w-24 h-24 rounded-md hover:shadow-2xl hover:shadow-black/30">
          <img src="../../assets/Dashboard/sound-wave.svg" class="h-8 w-8 mb-2" />
          Notifications
        </button>
      </div>

      <div class="">
        <button class="flex flex-col justify-center items-center text-xs w-24 h-24 rounded-md hover:shadow-2xl hover:shadow-black/30">
          <img src="../../assets/Dashboard/logout.svg" class="h-8 w-8 mb-2" />
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>
