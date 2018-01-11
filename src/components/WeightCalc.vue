<template>
  <main :class="`bg-${liftTheme(lift)}`" class="absolute pin pt-8">
    <header :class="$style.logo" class="pt-4 mb-8 text-center tracking-tight">
      {{liftName(lift)}}
    </header>
    <router-link class="absolute pin-l pin-t text-white no-underline font-bold uppercase border block p-2 rounded m-2" to="/">Back</router-link>
    <div class="p-4 mb-8">
      <div :class="$style.text" class="flex mr-auto ml-auto">
        <button
          @click="handleAdjustWeight(-5)"
          :class="`w-auto text-white ml-auto text-${liftTheme(lift)}-light`"
          type="button"
        >&minus;</button>
        <div
          :class="`w-1/2 text-center text-${liftTheme(lift)}-lightest`"
        >{{ liftWeight(lift) }}</div>
        <button
          @click="handleAdjustWeight(5)"
          :class="`w-auto text-white mr-auto text-${liftTheme(lift)}-light`"
          type="button"
        >+</button>
      </div>
      <div :class="$style['text-small']" class="text-center mt-2">MAX</div>
    </div>

    <div :class="`py-8 px-8 bg-${liftTheme(lift)}-darker`">
      <input
        type="range"
        class="w-full"
        min="0"
        max="100"
        v-model="percent"
      />
      <div :class="$style['text-small']"  class="text-center mt-2">{{percent}}%</div>
    </div>

    <div :class="`p-4 bg-${liftTheme(lift)}-dark`">
      <div
        :class="`${$style.text} text-center text-${liftTheme(lift)}-lightest`"
      >{{ result }}</div>
      <div :class="$style['text-small']" class="text-center mt-2">POUNDS</div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  props: {
    lift: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      weight: 225,
      percent: 50
    };
  },
  computed: {
    ...mapGetters(["liftName", "liftWeight", "liftTheme"]),
    result() {
      return Math.round(this.liftWeight(this.lift) * this.percent / 100);
    }
  },
  methods: {
    ...mapMutations(["updateWeight"]),
    handleAdjustWeight(amount = 5) {
      const newWeight = this.liftWeight(this.lift) + amount;
      this.updateWeight({
        name: this.lift,
        weight: newWeight
      });
    }
  }
};
</script>

<style module>
.text {
  font-size: 20vw;
}
.text-small {
  font-size: 5vw;
}

.logo {
  font-size: 6rem;
}

@media (orientation: portrait) {
  .logo {
    font-size: 16vw;
  }
}

@media (orientation: landscape) {
  .logo {
    font-size: 16vh;
  }
}
</style>