import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

/* eslint-disable no-shadow */

Vue.use(Vuex);

const state = {
  lifts: {
    "floor-press": {
      name: "Floor Press",
      weight: 150,
      percent: 50,
      theme: "teal"
    },
    "dead-lift": {
      name: "Dead Lift",
      weight: 150,
      percent: 50,
      theme: "red"
    },
    squat: {
      name: "Squat",
      weight: 150,
      percent: 50,
      theme: "blue"
    }
  }
};
/* eslint-disable no-param-reassign */
const mutations = {
  updateWeight(state, lift) {
    state.lifts[lift.name].weight = lift.weight;
  }
};
/* eslint-enable no-param-reassign */

const actions = {};

const getters = {
  liftName: state => lift => state.lifts[lift].name,
  liftWeight: state => lift => state.lifts[lift].weight,
  liftTheme: state => lift => state.lifts[lift].theme
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [createPersistedState()]
});

export default store;
