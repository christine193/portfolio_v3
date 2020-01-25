<template>
  <div class="holder">
    <div class="centered">
      <div class="about">
        <div id="aboutText">
          <div id="textArea">
            <h2>Christine</h2>
            <h3>Design & Web Development</h3>
            <p>I'm a passionate front-end developer and visual creator of many mediums. I enjoy challenges and finding new ways of making creative content.</p>
            <div class="socialIcons">
              <a href="https://www.instagram.com/christine.lopez.art/" target="blank">
                <i class="fab fa-instagram linking"></i>
              </a>
              <a href="https://github.com/christine193" target="blank">
                <i class="fab fa-github linking"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          class="aboutImg animate"
          v-on:mouseover="hoverIn"
          v-on:mouseout="hoverOut"
          v-bind:style="{backgroundColor:bgColor} "
        >
          <!--<lottie :options="defaultOptions"></lottie>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import * as animationData from "../assets/static.json";
export default {
  name: "aboutImg",
  components: {
    lottie: Lottie
  },
  data: function() {
    return {
      defaultOptions: { animationData: animationData.default },
      bgColor: "lightGrey"
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
    hoverIn() {
      this.bgColor = "pink";
    },
    hoverOut() {
      this.bgColor = "lightGrey";
    }
  }
};
</script>





<style lang="scss" >
@import "../scss/vars";

.animate {
  transition: all 500ms;
}
.about {
  display: grid;
}
#aboutText {
  position: relative;
  z-index: 1000;
  padding: 1em;
  height: 100%;
  display: grid;
  align-items: center;
}

.aboutImg {
  grid-row: 1;
  margin: 0 auto;
  width: 90%;
  height: 400px;
  background-image: url(../../public/images/test.png);
  background-size: cover;
  background-repeat: no-repeat;
}
h3 {
  margin-bottom: 15px;
}
.socialIcons {
  float: right;
  font-size: 1.5rem;
  .fab {
    margin: 0.5em;
  }
}
@media only screen and (min-width: 700px) {
  .about {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .aboutImg {
    grid-column: 2;
    position: relative;
  }
}
</style>
