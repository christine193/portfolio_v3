<template>
  <div id="app">
    <app-header></app-header>
    <transition
      name="router-anim"
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeInOut"
    >
      <router-view/>
    </transition>
  </div>
</template>

<script>
import header from "./components/Header.vue";
export default {
  components: {
    "app-header": header
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "scss/vars";

@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
body {
  font-family: $mainFont;
}
p,
h1,
h2 {
  color: $darkGrey;
}
</style>
