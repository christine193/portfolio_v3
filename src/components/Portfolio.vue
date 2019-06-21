<template>
  <div class="holder">
    <div class="centered">
      <lightbox :thumbnail="images[0]" :images="images"/>
      <lightbox :thumbnail="images[1]" :images="images"/>
    </div>
  </div>
</template>

<script>
import lightbox from "./Lightbox.vue";
export default {
  name: "app",
  components: {
    lightbox
  },

  data() {
    return {
      images: ["../images/wip.jpg", "../images/weird.jpg"]
    };
  }
};
</script>

<style lang="scss">
</style>

