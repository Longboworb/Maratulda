<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Card',

  props: {
    backgroundImage: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    return {
      props,
    };
  },
});
</script>

<template>
  <div
    class="Card"
    :style="{ backgroundImage: 'url(' + props.backgroundImage + ')' }"
  >
    <span class="Card__text">
      {{ props.text }}
    </span>

    <div class="Card__shadow"></div>
  </div>
</template>

<style lang="scss" scoped>
  .Card {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 25%;
    height: 80%;
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    background-size: cover;
    background-position: center;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    transition: all 1s;
    cursor: pointer;

    &__text {
      position: relative;
      z-index: 1;
      padding-bottom: 15px;
      font-family: "MedievalSharp";
      font-size: 36px;
      color: white;
      opacity: 0.7;
      transition: all 1s;
    }

    &__shadow {
      position: absolute;
      bottom: 0;
      height: 120px;
      width: 100%;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
    }

    &:hover {
      transform: scale(1.05) !important;
    }

    &:hover &__text {
      opacity: 1;
    }
  }

  
  
  @media screen and (max-width:720px) {
.Card {
    position: relative;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: center;
    width: 25%;
    height: 80%;
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    background-size: cover;
    background-position: center;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    transition: all 1s;
    cursor: pointer;
   

    &__text {
      position: relative;
      z-index: 1;
      padding-bottom: 15px;
      font-family: "MedievalSharp";
      font-size: 15px;
      color: white;
      opacity: 0.7;
      transition: all 1s;
      margin-left: auto;
      margin-right: auto;
    }

    &__shadow {
      position: absolute;
      bottom: 0;
      height: 120px;
      width: 100%;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
    }

    &:hover {
      transform: scale(1.05) !important;
    }

    &:hover &__text {
      opacity: 1;
    }
  }


  }
</style>
