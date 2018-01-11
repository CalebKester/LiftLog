import Vue from "vue";
import Router from "vue-router";
import WeightCalc from "@/components/WeightCalc";
import SelectLift from "@/components/SelectLift";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "SelectLift",
      component: SelectLift
    },
    {
      path: "/:lift",
      name: "WeightCalc",
      component: WeightCalc,
      props: true
    }
  ]
});
