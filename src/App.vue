<template>
  <div id="app" class="bg-indigo-darkest h-screen font-sans text-white">
    <header class="pt-8 text-5xl text-center">
      LiftLog
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
@import "./css/main.scss";
</style>