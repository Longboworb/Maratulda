<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    backgroundImage: {
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
    class="MiniImage"
    :style="{ backgroundImage: 'url(' + props.backgroundImage + ')' }"
  >
  </div>
</template>

<style lang="scss" scoped>
  .MiniImage {
    width: 60px;
    min-height: 60px;
    border: 2px solid rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    background-size: cover;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
  }
</style>
