<template>
  <div class="portfolioPage">
    <a href="#" @click.prevent="show" class="full">
      <div id="thumbnails">
        <img :src="thumbnail" class="thumb">
      </div>
    </a>

    <div v-if="visible" @click="hide">
      <div class="lightboxContainer">
        <div class="exitBtn" @click.stop="hide">Exit</div>

        <div @click.stop="prev" class="arrow" :class="{'invisible': ! hasPrev()}">Prev</div>
        <div class="centered lightboxImg" @click.stop>
          <img :src="images[index]">
        </div>
        <div @click.stop="next" class="arrow" :class="{'invisible': ! hasNext()}">Next</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thumbnail: {
      type: String
      // required: true
    },
    images: {
      type: Array,

      default: () => []
    }
  },
  data() {
    return {
      visible: false,
      index: 0
    };
  },
  methods: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
      this.index = 0;
    },
    hasNext() {
      return this.index + 1 < this.images.length;
    },
    hasPrev() {
      return this.index - 1 >= 0;
    },
    prev() {
      if (this.hasPrev()) {
        this.index -= 1;
      }
    },
    next() {
      if (this.hasNext()) {
        this.index += 1;
      }
    },
    onKeydown(e) {
      if (this.visible) {
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

<style lang="scss">
.thumb {
  height: 200px;
}
.thumbnails {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
}

.lightboxContainer {
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.163);
  display: flex;
  //background: red;
  align-items: center;
  justify-content: center;
}
.lightboxContainer img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: calc(100vh - 90px);
}

.arrow {
  background: Red;
  width: 35px;
  height: 20px;
}

.exitBtn {
  position: absolute;
  top: 0;
  left: 0;
}

.invisible {
  visibility: hidden;
}
</style>

