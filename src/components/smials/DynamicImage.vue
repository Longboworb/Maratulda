<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    return { props };
  },
});
</script>

<template>
  <div
    class="DynamicImage"
    :style="{ backgroundImage: 'url(' + props.imageUrl + ')' }"
  >
  </div>
</template>

<style lang="scss" scoped>
  .DynamicImage {
    height: 420px;
    background-size: cover;
    background-repeat: no-repeat;
    border: 2px solid rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
  }
</style>
