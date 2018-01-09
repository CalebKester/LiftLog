import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  lifts: [
    {
      name: "Floor Press",
      weight: 150,
      theme: "bg-teal"
    },
    {
      name: "Dead Lift",
      weight: 150,
      theme: "bg-red"
    },
    {
      name: "Squat",
      weight: 150,
      theme: "bg-blue"
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
