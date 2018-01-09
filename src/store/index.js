import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  lifts: [
    {
      id: "pressFloor",
      name: "Floor Press",
      weight: 150
    },
    {
      id: "deadLift",
      name: "Dead Lift",
      weight: 150
    },
    {
      id: "squatBack",
      name: "Squat",
      weight: 150
    }
  ]
};

const mutations = {};

const actions = {};

const getters = {};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;
