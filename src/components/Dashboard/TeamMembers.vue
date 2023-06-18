<template>
    <div class="flex flex-row justify-between items-center pl-6 pr-6 h-14 rounded-2xl shadow-sm shadow-black/10 mb-4">
        <p class="text-sm text-[#0B2257]">{{ name }}</p>
        <div class="bg-blue/10 pt-1 pb-1 pl-4 pr-4 rounded-full">
            <p class="text-blue text-xs">{{ role }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "Team Members",
  props: ["name", "role"]
};
</script>
