<script lang="ts">
import { defineComponent } from 'vue';
import MiniImage from '@/components/smials/MiniImage.vue';
import DynamicImage from '@/components/smials/DynamicImage.vue';
import gsap from 'gsap';
export default defineComponent({
  components: {
    MiniImage,
    DynamicImage,
  },

    setup() {

    
    const miniImages = [
      'https://i.imgur.com/P9voSss.jpg',
      'https://i.imgur.com/2JOignG.jpg',
      'https://i.imgur.com/XwxnvOt.jpg',
      'https://i.imgur.com/L1ed70P.jpg',
      'https://i.imgur.com/3Dl4Ris.jpg',
      'https://i.imgur.com/e1izYX3.jpg',
      'https://i.imgur.com/2Lx7X4J.jpg',
      'https://i.imgur.com/jYW1L5d.jpg',
      'https://i.imgur.com/GI7ZDbG.jpg',
      'https://i.imgur.com/Sol0rBN.jpg',
      'https://i.imgur.com/dzcemO6.jpg',
      'https://i.imgur.com/6blNBk9.jpg',
      'https://i.imgur.com/Cbx9qD1.jpg',
      'https://i.imgur.com/PUgk43y.jpg',
      'https://i.imgur.com/n1NEkCC.jpg',
      'https://i.imgur.com/TSjlSaT.jpg',
      'https://i.imgur.com/JRVBfzf.jpg',
      'https://i.imgur.com/ExJlQxe.jpg',
      'https://i.imgur.com/956FI8L.jpg',
      'https://i.imgur.com/UEHtqPA.jpg',
      'https://i.imgur.com/4NUw6nP.jpg',
      'https://i.imgur.com/RCjEBFW.jpg',
    ];

    

    return { miniImages };
  },
});
</script>

<template>
  <div class="Smials">
     <div class="title">
     <h1>De los Smials</h1>
     </div>
     <div class="Smials__column">
      <MiniImage
        class="Smials__column__MiniImage"
        v-for="imageUrl in miniImages"
        :key="imageUrl"
        :backgroundImage="imageUrl"
      />
     </div>
   <div class="map">
   <img class="sombra" src="..\assets\mapa_smials.jpg" alt="Map">
  
   <div class="txt">
   <h3>Un Smial, es una delegación territorial, con el ámbito geográfico mínimo de un municipio.
Dentro de la gran comunidad que es la STE, el smial que elijas será tu casa. Será el lugar donde forjes tus primeras amistades.
Pero, ¿puedo cambiar de smial si me mudo, si me siento más cómodo en otro, si surge uno nuevo....? Por supuesto, eres libre de pertenecer al que quieras, sea un smial del lugar donde vivas o no, vivas en España o no, la elección es tuya en todo momento.
Pero, ¿Eso significa que solo voy a hablar, quedar o relacionarme con mi smial?  ¡Para nada! Existen muchas, muchísimas interacciones entre Smials y cada día queremos que sean más. Existen muchos miembros que participan en las quedadas de smiales a los que no pertenecen, que están en grupos donde estén personas de múltiples smiales, las comisiones son grupos temáticos que trascienden el smial de pertenencia del socio y un sinfín de posibilidades más.
En resumen, el Smial será tu casa, pero puedes ir a casa de tus amigos a jugar cuando quieras y mudarte si así lo prefieres. <br>
   
   </h3>
  
></div>
</div>
    <div class="Smials__column">
      <DynamicImage
        class="Smials__large-column__DynamicImage"
      />
       <h3 class="txt2">"En un agujero en el suelo, vivía un hobbit. No un agujero húmedo, sucio, repugnante, con restos de gusanos y olor a fango, ni tampoco un agujero seco, desnudo y arenoso, sin nada en que sentarse o que comer: era un agujero-hobbit, y eso significa comodidad".
   J.R.R. Tolkien </h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .Smials {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    padding: 30px 15px;
    background: url("../assets/home-background.png") no-repeat center fixed;
    background-size: cover;
    overflow: hidden;
    .map {
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      padding-left: 80px;
      margin-top: 50px;
   
    }
    .sombra {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-left: 24%;
      height: 50%;
      width: 50%;
     border-radius: 8px;
     box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.50);
    }
    .txt {
    display: flex ;
    justify-content: center;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 30px;
    text-align: center;
    }
    .txt2 {
    display: flex ;
    justify-content: center;
    margin-left: 80px;
    margin-right: 80px;
    margin-top: 120px;
    text-align: center;
    font-style: italic;
    font-style: oblique;

    }

    .title {
       
       display: flex;
       position: absolute;
       justify-content: center;
       font-family: "MedievalSharp";
       width: 99%;
       margin-top: 10%;
       color: rgb(93, 74, 36);
       align-items: center;
       flex-direction: column;
       margin-top: 20PX;
       font-size: 30px;
    }

    &__column {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
      margin-left: 30px;
      

      &:first-child {
        max-width: 245px;
        margin-right: 30px;
        
      }

      &:last-child {
        margin: 25px;
        
      }

      &__MiniImage {
        margin: 10px;
        
      }
    }
  }
</style>
