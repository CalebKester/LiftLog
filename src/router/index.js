import Vue from "vue";
import Router from "vue-router";
import Lifting from "@/components/Lifting";
import SelectLift from "@/components/SelectLift";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Lifting",
      component: Lifting
    },
    {
      path: "/lift",
      name: "SelectLift",
      component: SelectLift
    }
  ]
});
