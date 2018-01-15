<template>
  <main :class="[$style.grid, `bg-${liftTheme(lift)}`, 'h-full']">
    <header class="header">
      <router-link class="back" to="/">
        <svg class="fill-current" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" xml:space="preserve" width="32" height="32"><g class="nc-icon-wrapper"><path d="M17.4,16L27.7,5.7c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L16,14.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4 L14.6,16L4.3,26.3c-0.4,0.4-0.4,1,0,1.4C4.5,27.9,4.7,28,5,28s0.5-0.1,0.7-0.3L16,17.4l10.3,10.3c0.2,0.2,0.5,0.3,0.7,0.3 s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L17.4,16z"></path></g></svg>
      </router-link>
      <div class="title">
        {{liftName(lift)}}
      </div>
      <div class="back">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" xml:space="preserve" width="32" height="32"></svg>
      </div>
    </header>
    <div class="py-2 flex flex-col justify-center items-center">
      <div :class="$style.text" class="w-full flex landscape:flex-col items-center justify-center">
        <button
          @click="handleAdjustWeight(-5)"
          :class="`text-${liftTheme(lift)}-light leading-none`"
          type="button"
        >&minus;</button>
        <div
          :class="`w-1/2 text-${liftTheme(lift)}-lightest text-center leading-none`"
        >
          {{ liftWeight(lift) }}
        </div>
        <button
          @click="handleAdjustWeight(5)"
          :class="`text-${liftTheme(lift)}-light leading-none`"
          type="button"
        >&plus;</button>
      </div>
      <div :class="$style['text-small']" class="leading-none">MAX</div>
    </div>

    <div :class="`py-2 flex flex-col justify-center px-8 bg-${liftTheme(lift)}-dark`">
      <input
        type="range"
        class="w-full"
        min="0"
        max="100"
        v-model="percent"
      />
      <div :class="$style['text-small']"  class="text-center mt-2">{{percent}}%</div>
    </div>

    <div :class="`py-2 flex flex-col justify-center bg-${liftTheme(lift)}-darker`">
      <div
        :class="`${$style.text} leading-none text-center text-${liftTheme(lift)}-lightest`"
      >{{ result }}</div>
      <div :class="$style['text-small']" class="text-center leading-none">POUNDS</div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

import { backgroundColors } from "../../tailwind.js";

export default {
  props: {
    lift: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      prevThemeColor: null,
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
  mounted() {
    const newColor = backgroundColors[`${this.liftTheme(this.lift)}-dark`];
    this.changeMetaColor(newColor);
  },
  beforeDestroy() {
    this.changeMetaColor(this.prevThemeColor);
  },
  methods: {
    ...mapMutations(["updateWeight"]),
    handleAdjustWeight(amount = 5) {
      const newWeight = this.liftWeight(this.lift) + amount;
      this.updateWeight({
        name: this.lift,
        weight: newWeight
      });
    },
    changeMetaColor(color) {
      const meta = document.querySelector('meta[name="theme-color"]');
      this.prevThemeColor = meta.getAttribute("content");
      meta.setAttribute("content", color);
    }
  }
};
</script>

<style module>
@media (orientation: portrait) {
  .grid {
    display: grid;
    grid-template-rows: max-content;
  }

  .text {
    font-size: 20vw;
  }

  .text-small {
    font-size: 5vw;
  }
}

@media (orientation: landscape) {
  .grid {
    display: grid;
    grid-template-columns: min-content repeat(3, minmax(max-content, 1fr));
  }
  .text {
    font-size: 16vh;
  }
  .text-small {
    font-size: 5vh;
  }
}
</style>