<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import gsap from 'gsap';



export default defineComponent({
  name: 'container',

 

  setup() {
    onMounted(() => {
      const tl = gsap.timeline();

      gsap.set('.container', {
        opacity: 0,
        
      });
      gsap.set('.div1', {
        opacity: 0,
        
      });
      gsap.set('.div3', {
        opacity: 0,
        
      });
      gsap.set('.central', {
        opacity: 0,
        rotate: -180,
      });

      tl.to('.container', {
        opacity: 1,
        duration: 2,
      });
      tl.to('.central', {
        opacity: 1,
        rotate: 0,
        duration: 1,
        delay: -1,
      });
      tl.to('.div1', {
        opacity: 1,
        duration: 2,
        });
      tl.to('.div3', {
        opacity: 1,
        duration: 2,
        });
      

     
    });

    return ;
  },
});
</script>

<template>

 <div class="container">
   <H1>11111111111111111111</H1>
   
  


</template>

<style lang="scss" scoped>

  
  
</style>