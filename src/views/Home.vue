<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import gsap from 'gsap';

import Card from '@/components/home/Card.vue';
import Badge from '@/components/home/Badge.vue';
import cards from '@/fixtures/home/cards.json';

export default defineComponent({
  name: 'Home',

  components: {
    Card,
    Badge,
  },

  setup() {
    onMounted(() => {
      const tl = gsap.timeline();

      gsap.set('.Home__Card', {
        opacity: 0,
        y: 60,
      });

      gsap.set('.Home__Badge', {
        opacity: 0,
        rotate: -180,
      });

      tl.to('.Home__shadow', {
        opacity: 1,
        duration: 1,
      });

      tl.to('.Home__shadow', {
        opacity: 0,
        duration: 2,
        onComplete: () => {
          gsap.set('.Home__shadow', { zIndex: -1 });
        },
      });

      tl.to('.Home__Badge', {
        opacity: 1,
        rotate: 0,
        duration: 1,
        delay: -1,
      });

      tl.to('.Home__Card', {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        ease: 'Power1.inOut',
        delay: -1,
      });
    });

    return { cards };
  },
});
</script>

<template>
  <div class="Home d-flex">
    <div class="Home__shadow"></div>

    <Card
      class="Home__Card"
      backgroundImage="https://i.imgur.com/CtPS78j.png"
      :text="cards.smials"
      @click="$router.push({ path: 'smials' })"
    />

    <Card
      class="Home__Card"
      backgroundImage="https://i.imgur.com/Po53SbY.png"
      :text="cards.Mentor"
      @click="$router.push({ path: 'Mentor' })"
    />

    <Badge 
    class="Home__Badge" 
     
    />

    <Card
      class="Home__Card"
      backgroundImage="https://i.imgur.com/Fq499PH.png"
      :text="cards.events"
       @click="$router.push({ path: 'Events' })"
    />

    <Card
      class="Home__Card"
      backgroundImage="https://i.imgur.com/hpsAnc3.png"
      :text="cards.commissions"
      @click="$router.push({ path: 'Comisiones' })"
    />
  </div>
</template>

<style lang="scss" scoped>
  .Home {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    padding: 30px 15px;
    background: url("../assets/home-background.png") no-repeat center fixed;
    background-size: cover;

    &__shadow {
      position: absolute;
      width: 100%;
      height: 100%;
      background: black;
      z-index: 1;
    }

    &__Card {
      margin: 0 15px;
    }
  }

   @media screen and (max-width:1279px) {
 .Home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 30px 15px;
    background: url("../assets/home-background.png") no-repeat center fixed;
    background-size: cover;
   

    &__shadow {
      position: absolute;
      width: 100%;
      height: 100%;
      background: black;
      z-index: 1;
    }

    &__Card {
      margin: 0 15px;
    }
  }

   }
</style>
