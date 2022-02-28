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

<div class="back">
  <a href="javascript:history.back()"><img src="..\assets\pixlr-bg-result.png" height="20" width="" alt="Botón"></a>
  </div>

 <div class="container">
   
   <div class="div1">
                <h2 class="txtp1">Los mentores son socios que llevan más tiempo y que van a estar aquí para guiarte, contarte anécdotas, explicarte cosas del funcionamiento de la asociación y ser tu contacto personal durante tu iniciación.</h2>
   </div>  

   <div class="div2">
    
      <h1 >¿ Qué es un Mentor ?</h1> 
      <div class="central">
      <img class="img" src="../assets/Mentor.png" alt="img mentor" srcset="">
      </div> 
       <a href="mailto:acogida@sociedadtolkien.org">acogida@sociedadtolkien.org</a>
      
   </div>  

   <div class="div1">
         <h2 class="txtp1" >La palabra mentor proviene del personaje Méntor de la Odisea Homero. Antes de partir a la campaña de Troya, Ulises confia a su amigo Méntor la preparación de su hijo Telémaco para convertirse en el próximo monarca de Ítaca.</h2>
   </div>  
  
 </div>


</template>

<style lang="scss" scoped>

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: url("../assets/home-background.png") no-repeat center fixed;
    background-size: cover;
    overflow: hidden;
    background-size: cover;
    overflow: hidden;
    font-family: "MedievalSharp";
  
   }

    .back{
    display: flex;
    position: absolute;
    width: 100%;
    
    float: left;
    margin-top: 5px;
   
   }


a {

font-family: "MedievalSharp";
font-size: 30px;

}

     .div1 {
     display: flex;
     justify-content: center ;
     width: 100%;
     height: 100%;
     text-align: center;
     margin-top: 10px;
     

     
     }
     .txtp1 {
     display: flex;
     justify-content: center ;
     width: 70%;
     margin-top: 5%;
     color: rgb(93, 74, 36);
     }
     .div2 {
     display: flex;
     justify-content: center ;
     width: 100%;
     height: 100%;
     flex-direction: column;
     color: rgb(93, 74, 36);     
     text-align: center;
     margin-top: 50px;
     }

     .central{
      display: flex;
      position: relative;
      width: 300px;
      height: 300px;
     margin-right: auto;
     margin-left: auto;
      

  }
     .img {
       width: 100%;
       height: 100%;
     }



   @media screen and (max-width:1279px) {

.container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: url("../assets/home-background.png") no-repeat center fixed;
    background-size: cover;
    overflow: hidden;
    padding: 30px 15px;
    background-size: cover;
    overflow: hidden;
    font-family: "MedievalSharp";
  
   }
   a {

     font-family: "MedievalSharp";
     font-size:20px;
   }
     .div1 {
     display: flex;
     justify-content: center ;
     margin-top: 30px;
     width: 100%;
     height: 100%;
     text-align: center;
     
     }
     .txtp1 {
     display: flex;
     justify-content: center ;
     width: 70%;
     margin-top: 5%;
     color: rgb(93, 74, 36);
     }
     .div2 {
     display: flex;
     justify-content: center ;
     width: 100%;
     height: 100%;
     flex-direction: column;
     color: rgb(93, 74, 36);     
     text-align: center;
     margin-top: 50px;
     }

     .central{
      display: flex;
      position: relative;
      width: 300px;
      height: 300px;
     margin-right: auto;
     margin-left: auto;
      

  }
     .img {
       width: 100%;
       height: 100%;
     }





}
  
</style>