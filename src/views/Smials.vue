<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import gsap from 'gsap';



export default defineComponent({
  name: 'smials',

 

  setup() {
    onMounted(() => {
      const tl = gsap.timeline();

      gsap.set('.Smials', {
        opacity: 0,
        
      });
      tl.to('.Smials', {
        opacity: 1,
        duration: 3,
      });
      gsap.set('.Smialscolumn', {
        opacity: 0,
        
      });
      gsap.set('.title', {
        opacity: 0,
        
      });
      gsap.set('.sombra', {
        opacity: 0,
        
      });


      tl.to('.title', {
        opacity: 1,
        duration: 2,
      });
      tl.to('.Smialscolumn', {
        opacity: 1,
        duration: 2,
        });

      
      tl.to('.sombra', {
        opacity: 1,
        duration: 2,
      });
    
      
     
    });

    return ;
  },
});
</script>


<template>

  <div class="Smials">

  <div class="back">
  <a href="javascript:history.back()"><img src="..\assets\pixlr-bg-result.png" height="20" width="" alt="Botón"></a>
  </div>

    <div class="title">
         
      <h1 class="delossmials">Sobre los Smials</h1>
     
      <img class="imgmap" src="..\assets\mapa_smials.jpg" alt="Map">
     
      
      <h3 class="txt">Un Smial, en la Sociedad Tolkien Española, es una delegación territorial, con el ámbito geográfico mínimo de un municipio.
         Dentro de la gran comunidad que es la STE, el smial que elijas será tu casa. Será el lugar donde forjes tus primeras amistades.
         Pero, ¿puedo cambiar de smial si me mudo, si me siento más cómodo en otro, si surge uno nuevo....? Por supuesto, eres libre de pertenecer al que quieras, sea un smial del lugar donde vivas o no, vivas en España o no, la elección es tuya en todo momento.
         Pero, ¿Eso significa que solo voy a hablar, quedar o relacionarme con mi smial?  ¡Para nada! Existen muchas, muchísimas interacciones entre Smials y cada día queremos que sean más. Existen muchos miembros que participan en las quedadas de smiales a los que no pertenecen, que están en grupos donde estén personas de múltiples smiales, las comisiones son grupos temáticos que trascienden el smial de pertenencia del socio y un sinfín de posibilidades más.
         En resumen, el Smial será tu casa, pero puedes ir a casa de tus amigos a jugar cuando quieras y mudarte si así lo prefieres.</h3>
      
    </div>
 
    <div class="Smialscolumn">
        
         <img class="sombra" src="..\assets\Smials\osgiliath.jpg" alt="Osgiliath">
         <h3>Osgiliath</h3>
         <img class="sombra" src="..\assets\Smials\amon_hen.jpg" alt="Amon">
         <h3>Amon Hen</h3>
         <img class="sombra" src="..\assets\Smials\arnor.jpg" alt="Arnor">
         <h3>Àrnor</h3>
         <img class="sombra" src="..\assets\Smials\bolson_cerrado.jpg" alt="Bolson Cerrado">
         <h3>Bolsón Cerrado</h3>
         <img class="sombra" src="..\assets\Smials\brandivino.jpg" alt="Brandivino">
         <h3>Brandivino</h3>
         <img class="sombra" src="..\assets\Smials\cuernavilla.jpg" alt="Cuernavilla">
         <h3>Cuernavilla</h3>
         <img class="sombra" src="..\assets\Smials\dragon_verde.jpg" alt="Dragon Verde">
         <h3>Dragón Verde</h3>
         <img class="sombra" src="..\assets\Smials\edhellond.jpg" alt="Edhellond">
         <h3>Edhellond</h3>
         <img class="sombra" src="..\assets\Smials\el_pony_pisador.jpg" alt="El Pony Pisador">
         <h3>El Poney Pisador</h3>
         <img class="sombra" src="..\assets\Smials\ered_luin.jpg" alt="Ered luin">
         <h3>Ered Luin</h3>
         <img class="sombra" src="..\assets\Smials\gondolin.jpg" alt="Gondolin">
         <h3>Gondolin</h3>
         <img class="sombra" src="..\assets\Smials\hammo.png" alt="Hammo">
         <h3>Hammo</h3>
         <img class="sombra" src="..\assets\Smials\imladris.jpg" alt="Imladris">
         <h3>Imladris</h3>
         <img class="sombra" src="..\assets\Smials\TE.png" alt="tol_eressea">
         <h3>Tol Eressëa</h3>
         <img class="sombra" src="..\assets\Smials\umbar.jpg" alt="Umbar">
         <h3>Umbar</h3>
         <img class="sombra" src="..\assets\Smials\khazad_dum.jpg" alt="Khazad Dum">
         <h3>Khazad-dûm</h3>
         <img class="sombra" src="..\assets\Smials\lorien.jpg" alt="Lorien">
         <h3>Lórien</h3>
         <img class="sombra" src="..\assets\Smials\mithlon.jpg" alt="Mithlon">
         <h3>Mithlond</h3>
         <img class="sombra" src="..\assets\Smials\montaraz.jpg" alt="Montaraz">
         <h3>Montaraz</h3>
         <img class="sombra" src="..\assets\Smials\mordor.jpg" alt="Mordor">
         <h3>Mordor</h3>
         <img class="sombra" src="..\assets\Smials\numenor.png" alt="Numenor">
         <h3>Númenor</h3>
         <img class="sombra" src="..\assets\Smials\pelagir.jpg" alt="Pelargir">
         <h3>Pelargir</h3>
      
 
    </div>
    

    
  </div>
</template>

<style lang="scss" scoped>

   .back{
    display: flex;
    position: absolute;
    width: 100%;
    float: left;
    margin-top: 5px;
   
   }
  .Smials {
    display: flex;
    width: 100%;
    height: 100vh;
    background: url(".././assets/home-background.png") no-repeat center fixed;
    background-size: cover;
    overflow: hidden;
    background-size: cover;
    text-align: center;
    

    .Smialscolumn {
      display: flex;
      flex-direction: column;
      position: relative;
      flex-wrap: wrap;
      width:50%;
      height: 90%;                                                                                                                                                               
      margin-top: 1%;
      overflow: hidden;
      padding: 20px;
      text-align: left;
      margin-left: 10%;
     
      
    } 
   
    .title { 
       display: flex;
       position: relative;
       font-family: "MedievalSharp";
       width: 40%;
       color: rgb(93, 74, 36);
       margin-left: 3%;
       flex-direction: column;
       margin-top: 20px;
      
      


    }
    .delossmials {
      display: flex;
      position: relative;
      font-family: "MedievalSharp";
      font-size: 50px;
      justify-content: center;
      margin-top: 10%;
      

    }
    .imgmap {
      display: flex;
      position: relative;
      justify-content: center;
      border-radius: 8px;
      box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.50);
      margin-top: 30%;
      margin: 10px;
      width: 80%;
      height: 40%;
      margin-left: auto;
      margin-right: auto;
      border: 1px solid rgb(136, 87, 31);
    }
   
    .sombra {
      display: flex;
      justify-content: center;
      flex-direction: column;
      border-radius: 8px;
      box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.50);
      width: 15%;
      height: 15%;
      margin-left: 0px;
      margin: 5px
      
    }

  
    .txt {
    display: flex ;
    justify-content: center;
    margin: 10px;
    text-align: center;
    color: rgb(93, 74, 36);
    
 
    
    }
    
    .sombra:hover  {
      width: 20%;
      height: 20%;
      background-color: rgba(31,31,31,0.9);
      justify-content: centers;
      position: relative;
      transition-duration:1s;
      
    }


     .imgmap:hover  {
      width: 150%;
      height: auto;
      background-color: rgba(31,31,31,0.9);
      justify-content: centers;
      position: relative;
      z-index: 1;
      transition-duration:3s;
      
      
      
    }
    

  }
 @media screen and (max-width:1279px) {



    .Smials {
    
    width: 100%;
    height: 100%;
    background: url(".././assets/home-background.png") no-repeat center fixed;
    background-size: cover;
    overflow: hidden;
    background-size: cover;
    text-align: center;
    border: 1px solid rgb(242, 241, 243);
    
   
    .imgmap{
    width: 100%;
    height: 10%;
    }
    .sombra:hover{
      width: 200% ;
      
      background-color: rgba(31,31,31,0.9);
      justify-content: centers;
      position: relative;
      
      
    }
     .title { 
       display: flex;
       position: relative;
       font-family: "MedievalSharp";
       width: 40%;
       color: rgb(93, 74, 36);
       margin-left: 3%;
       flex-direction: column;
       margin-top: 20%;
       margin-left: 50px;
     }
   
    .sombra {
     width: 75px;
     height: 75px;
    }
    .Smialscolumn {
      margin-top: 20%;
    }
    .txt{
     margin: 10px; 
    }
 }
 }

 @media screen and (max-width:1279px) {



    .Smials {
    
    width: 100%;
    height: 100%;
    background: url(".././assets/home-background.png") no-repeat center fixed;
    background-size: cover;
    overflow: hidden;
    background-size: cover;
    text-align: center;
    border: 1px solid rgb(242, 241, 243);
   
    .sombra:hover{
      width: 130px;
      height: 130px;
      background-color: rgba(31,31,31,0.9);
      justify-content: centers;
      position: relative;
      
      
    }
     .title { 
       display: flex;
       position: relative;
       font-family: "MedievalSharp";
       width: 40%;
       color: rgb(93, 74, 36);
       margin-left: 3%;
       flex-direction: column;
       margin-top: 20%;
     }
   
    .sombra {
     width: 75px;
     height: 75px;
    }
    .Smialscolumn {
      margin-top: 20%;
    }
    .txt{
     margin: 10px; 
    }
    .imgmap{
    width: 100%;
    height: auto;
    }

    .imgmap:hover  {
      width: 220%;
      height: auto;
      background-color: rgba(31,31,31,0.9);
      justify-content: centers;
      position: relative;
      z-index: 1;
      
      
    }
 }
 }





</style>
