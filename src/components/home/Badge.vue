<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<template>
  <div>
  <a href="https://www.sociedadtolkien.org/"><img div class="Badge"></a>
  </div>
</template>

<style lang="scss" scoped>
  .Badge {
    min-width: 300px;
    min-height: 300px;
    border-radius: 1000px;
    background: url("../../assets/home-badge.png") no-repeat center;
    background-size: cover;
    z-index: 1;
    cursor: pointer;
  
  }

   @media screen and (max-width:720px) {
.Badge {
    min-width: 100px;
    min-height: 100px;
    border-radius: 1000px;
    background: url("../../assets/home-badge.png") no-repeat center;
    background-size: cover;
    z-index: 1;
  }

   }
</style>
