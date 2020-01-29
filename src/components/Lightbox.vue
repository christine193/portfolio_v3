<template>
  <div class="lightBox">
    <div class="portTitle centered">
      <h2>Gallery Coming Soon</h2>
      <!--  <p>A Collection of illustrations done on Adobe Photoshop, Illustrator and Cinema 4D.</p>-->
    </div>
    <!-- <div id="thumbBox">
      <img
        @click="lightboxEffect(index)"
        @mouseover="hoverIn()"
        @mouseout="hoverOut()"
        v-for="(thumbnail, index) in thumbnails"
        :key="thumbnail"
        :src="thumbnailsPath + thumbnail"
        class="thumb"
      />
      <transition
        name="fade"
        mode="out-in"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div @click.stop="bg = !bg" class="lightBoxBg" v-if="bg"></div>
      </transition>
    </div>

    <div v-if="bg">
      <div class="btn close" @click.stop="bg = !bg">
        <i class="fas fa-times"></i>
      </div>

      <div class="navigate">
        <div @click="prev" class="btn prev">
          <i class="fas fa-angle-left"></i>
        </div>
        <div @click="next" class="btn next">
          <i class="fas fa-angle-right"></i>
        </div>
      </div>

      <div v-if="bg" class="lightboxContainer">
        <transition
          name="fade"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <img
            class="page"
            id="currentImg"
            :key="currentImage"
            :src="largePath + [currentImage + 1] +'.jpg'"
          />
        </transition>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  mix: "#eee",
  data() {
    return {
      mix: "#eee",
      bg: false,

      currentImage: 0,
      count: true
    };
  },
  props: {
    thumbnails: {
      type: Array,
      required: true
    },
    largeImages: {
      type: Array,
      required: true
    },
    thumbnailsPath: {
      type: String,
      required: true
    },
    largePath: {
      type: String,
      required: true
    }
  },
  methods: {
    hoverIn() {
      this.mix = "black";
    },
    hoverOut() {
      this.mix = "#eee";
    },
    lightboxEffect(curr) {
      this.currentImage = curr;
      this.bg = !this.bg;
    },
    next() {
      if (this.currentImage < this.largeImages.length - 1) {
        this.currentImage++;
      } else {
        this.currentImage = 0;
      }
    },
    prev() {
      if (this.currentImage > 0) {
        this.currentImage--;
      } else {
        this.currentImage = this.largeImages.length - 1;
      }
    },
    onKeydown(e) {
      if (this.largeImages) {
        switch (e.key) {
          case "ArrowRight":
            this.next();
            break;
          case "ArrowLeft":
            this.prev();
            break;
          case "ArrowDown":
          case "ArrowUp":
          case " ":
            e.preventDefault();
            break;
          case "Escape":
            this.hide();
            break;
        }
      }
    }
  },
  mounted() {
    window.addEventListener("keydown", this.onKeydown);
  },
  destroyed() {
    window.removeEventListener("keydown", this.onKeydown);
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

#thumbBox {
  display: flex;
  flex-wrap: wrap !important;
  justify-content: center;
  margin: 5px;
  margin-bottom: 50px;
}

.thumb {
  height: 150px;
  width: 150px;
  cursor: pointer;
  margin: 5px;
}

.thumb:hover {
  transition: all 0.3s;
  opacity: 0.5;
}

.lightboxContainer {
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: 90vh;
  }
}

.page {
  position: fixed;
}

.lightBoxBg {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.88);
  z-index: 100;
}
.btn {
  position: relative;
  margin: 5%;
  z-index: 1000;
  cursor: pointer;
  font-size: 3em;
  color: $darkGrey;
  opacity: 0.7;
  transition: all 500ms;
}
.btn:hover {
  opacity: 1;
  color: $pink;
}

.close {
  position: fixed;
  top: 0;
  left: 0;
  font-size: 2em;
  z-index: 5000;
}

.navigate {
  left: 0;
  height: 100vh;
  top: 40vh;
  width: 100%;
  position: fixed;
  display: flex;
  z-index: 5000;
}

.next {
  position: absolute;
  right: 0;
}
.invisible {
  visibility: hidden;
}
@media only screen and (min-width: 650px) {
  .thumb {
    height: 200px;
    width: 200px;
  }
}

@media only screen and (min-width: 750px) {
  .lightboxContainer {
    padding: 30px;
  }
}
</style>