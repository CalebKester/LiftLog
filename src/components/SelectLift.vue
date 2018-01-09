<template>
  <div class="grid grid--lifts m-4">
		<div
			v-if="lifts"
			v-for="lift in lifts"
			:key="lift.name"
			class="rounded p-4 text-center shadow hover:shadow-lg"
			:class="lift.theme"
		>
			<header
				class="text-center font-bold text-lg"
			>{{lift.name}}</header>
			<div
				class="mt-2 text-5xl font-semibold"
			>{{lift.weight}}</div>
		</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["lifts"])
};
</script>
