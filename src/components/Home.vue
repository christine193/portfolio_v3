
<template>
  <div id="enter" class="centered">
    <div id="enterAnim">
      <lottie :options="defaultOptions" v-on:animCreated="handleAnimation" />
    </div>
  </div>
</template> 



<script>
import Lottie from "vue-lottie";
import * as animationData from "../assets/lines.json";
export default {
  name: "enterAnim",
  components: {
    lottie: Lottie
  },
  data() {
    return {
      defaultOptions: { animationData: animationData.default },

      animationSpeed: 1
    };
  },
  created() {
    setTimeout(() => this.$router.push({ path: "/About" }), 3900);
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/vars";

#enter {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #eeeeee;
  z-index: 5000;
}

#enterBtn {
  color: $darkGrey;
  font-size: 2em;
  border: none;
  background: transparent;
  transition: 500ms;
  padding: 0.5em;
  z-index: 1000;
  cursor: pointer;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  top: 50%;
  margin-top: -50px;
}
#enterAnim {
  z-index: 500;
  //position: relative;
  height: 500px;
}

#enterBtn:hover {
  color: $primary;
}
#enterBtn:active {
  border-color: $primary;
}
</style>
