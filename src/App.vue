<template>
  <div id="app">
    <app-header></app-header>
    <transition
      name="router-anim"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <!--leave-active-class="animated slideInUp"-->
      <router-view />
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from "./components/Header.vue";
import footer from "./components/Footer.vue";

export default {
  components: {
    "app-header": header,
    "app-footer": footer
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
p {
  color: $darkGrey;
  font-family: $font;
  line-height: 20px;
  font-size: 0.8em;
}

h2 {
  color: $pink;
  //margin: 0.5em;
}
h1,
h2 {
  font-size: 2.5em;
  font-weight: bold;
}
h3 {
  color: white;
}

.linking:hover {
  transition: 500ms;
  color: $pink;
}

.fab {
  border-radius: 50%;
}

a:visited {
  color: $darkGrey;
}
</style>
