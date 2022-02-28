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
      gsap.set('.video', {
        opacity: 0,
        
      });


      tl.to('.container', {
        opacity: 1,
        duration: 2,
      });
      tl.to('.div1', {
        opacity: 1,
        duration: 2,
        });
      tl.to('.div3', {
        opacity: 1,
        duration: 2,
        });
        tl.to('.video', {
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
 <div class="title">
       <h1>XXV Mereth Aderthad</h1>
        <a href="javascript:history.back()"><img class="return" src="..\assets\puertaHobbit.png" height="100" width="100" alt="Botón"></a>
         <p class="returntxt">Menu</p>
       </div>  
   <div class="div1">
       <img class="papiro" src="..\assets\Palantir.png" alt="img papiro" srcset="">
   </div>  

   <div class="video">
       <iframe width="560" height="315"  src="https://www.youtube.com/embed/mdrjt0px6Lg?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
 
   </div>  
   

   <div class="div3">
       <img class="premios" src="..\assets\Premios.png" alt="img premios" srcset="">
   </div>  
  
 </div>


</template>

<style lang="scss" scoped>

  .container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    background: url("../assets/home-background.png") no-repeat center fixed;
    background-size: cover;
    overflow: hidden;
    padding: 30px 15px;
    background-size: cover;
    overflow: hidden;
  
  
     .div1 {
     display: flex;
     justify-content: center ;
     width: 25%;
     height: 100%;
     margin-left: 10px;
     position: relative;
     }

     .div2 {
     display: flex;
     justify-content: center ;
     width: 25%;
     height: 100%;
     
     
     }

     .div3 {
     display: flex;
     justify-content: center ;
     width: 25%;
     height: 100%;
     margin-left: 10px;

     }
     .video{
      display: flex;
      width: 1000px;
      justify-content: center;
      margin-top: 16%;
      
      }
     .text {
       display: flex;
       position: absolute;
       justify-content: center;
       font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
       width: 50%;
       margin-top: 10%;
       color: rgb(93, 74, 36);
       align-items: center;
      
      }
     
     .title {
       font-size: 30px;
       display: flex;
       position: absolute;
       justify-content: center;
       font-family: "MedievalSharp";
       width: 99%;
       color: rgb(93, 74, 36);
       padding-top: 30px;
       margin-top: 10%;
       
       
       }
      .return {
        display: flex;
        position: absolute;
        margin-top: -130px;
        margin-left: -355px;

        
        
      }
      .returntxt {
        display: flex;
        position: absolute;
        margin-top:-160px;
        color: rgb(93, 74, 36);
        align-items: center;
        font-size: 30px;
        font-family: "MedievalSharp";
        margin-right: 15px;
       
      }
    
    
  }
  
</style>