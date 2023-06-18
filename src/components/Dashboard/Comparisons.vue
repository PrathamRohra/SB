<template>
  <div class="flex flex-col pl-6 pr-6 h-14 rounded-2xl mb-3 mt-3">
    <div class="flex flex-row justify-between">
      <div class="flex flex-row items-center space-x-3 mb-2">
        <img :src="imgSrc" class="h-4 w-4" />
        <p class="text-xs text-gray-900">{{ countryName }}</p>
      </div>
      <p class="text-xs">{{ progress }}</p>
    </div>
    <div class="h-1 w-full rounded-full bg-neutral-200">
      <div class="h-1 bg-blue rounded-full" :style="{ width:progress }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comparisons",
  props: ["imgSrc", "countryName", "progress"]
};
</script>
