<template>
	<div>
    <header :class="$style.logo" class="pt-8 mb-8 text-center tracking-tight">
      LiftLog
    </header>

		<main class="grid grid--lifts m-4">
			<router-link
				v-if="lifts"
				v-for="(lift, key) in lifts"
				:key="lift.name"
				class="rounded p-4 text-center shadow text-white no-underline"
				:class="`bg-${lift.theme}`"
				:to="{
					name: 'WeightCalc',
					params: {
						lift: key
					}
				}"
			>
				<header
					class="text-center font-bold text-lg"
				>{{lift.name}}</header>
				<div
					class="mt-2 text-5xl font-semibold"
				>{{lift.weight}}</div>
			</router-link>
		</main>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["lifts"])
};
</script>

<style module>
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