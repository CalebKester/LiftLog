<template>
  <div class="absolute pin-b pin-x">
    <div class="p-4 bg-indigo-darker">
      <h1 class="text-center mt-2">{{result}} lb</h1>
    </div>
    <div class="py-4 px-8 bg-indigo">
      <input
        type="range"
        class="w-full"
        min="0"
        max="100"
        v-model="percent"
      />
      <h5 class="text-center mt-2">{{percent}}%</h5>
    </div>
    <div class="p-4 bg-indigo-light">
      <h1 class="flex w-48 mr-auto ml-auto">
        <button
          @click="handleAdjustWeight(-5)"
          class="w-1/3 text-white"
          type="button"
        >&minus;</button>
        <div
          class="w-1/3"
        >{{ weight }}</div>
        <button
          @click="handleAdjustWeight(5)"
          class="w-1/3 text-white"
          type="button"
        >+</button>
      </h1>
      <h5 class="text-center mt-2">MAX WEIGHT</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      weight: 145,
      percent: 50
    };
  },
  computed: {
    result() {
      return Math.round(this.weight * this.percent / 100);
    }
  },
  methods: {
    handleAdjustWeight(amount = 5) {
      this.weight = this.weight + amount;
    }
  }
};
</script>