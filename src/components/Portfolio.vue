<template>
  <div class="centered fix">
    <PortfolioB />
    <Lightbox
      :thumbnails="lightbox.images.thumbnails"
      :largeImages="lightbox.images.large"
      :thumbnailsPath="lightbox.thumbnailsPath"
      :largePath="lightbox.largePath"
      class="lightBox"
    />
  </div>
</template>


<script>
import Lightbox from "@/components/Lightbox.vue";
import PortfolioB from "@/components/PortfolioB.vue";
export default {
  // name: "app",
  data() {
    return {
      lightbox: {
        images: {
          thumbnails: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.jpg",
            "6.jpg",
            "7.jpg",
            "8.jpg"
          ],
          large: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.jpg",
            "6.jpg",
            "7.jpg",
            "8.jpg"
          ]
        },

        thumbnailsPath: "../images/Thumb/",
        largePath: "../images/Large/"
      }
    };
  },
  components: {
    Lightbox,
    PortfolioB
  }
};
</script>

<style lang="scss">
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";

img {
  max-width: 100%;
}

.fix {
  margin-top: 10%;
}

.portTitle {
  text-align: center;
  margin: 1.5em;
}
</style>

