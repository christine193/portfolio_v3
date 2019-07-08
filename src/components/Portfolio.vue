<template>
  <div class="holder">
    <div class="centered">
      <Lightbox
        :thumbnails="lightbox.images.thumbnails"
        :largeImages="lightbox.images.large"
        :thumbnailsPath="lightbox.thumbnailsPath"
        :largePath="lightbox.largePath"
        class="lightBox"
      />
    </div>
  </div>
</template>

<script>
import Lightbox from "@/components/Lightbox.vue";
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
    Lightbox
  }
};
</script>

<style lang="scss">
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
img {
  max-width: 100%;
}
</style>

