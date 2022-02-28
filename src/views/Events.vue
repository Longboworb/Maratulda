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

 <div class="back">
  <a href="javascript:history.back()"><img src="..\assets\pixlr-bg-result.png" height="20" width="" alt="Botón"></a>
  </div>


 <div class="div1">
       <h1 class="margen">Mereth Aderthad</h1> 
       <iframe  width="100%" height="35%"  src="https://www.youtube.com/embed/mdrjt0px6Lg?controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
       <h4 class="margen" >Durante una mereth es habitual que se desarrollen talleres de todo tipo, representaciones, conferencias, juegos de rol, miniaturismo y un buen número de actividades, todas ellas relacionadas con el fin de la difusión del conocimiento de la vida y la obra de J. R. R. Tolkien. Hay dos cosas que no suelen faltar en estos encuentros. Una es la cena de gala, en la que se invita a los comensales a asistir ataviados al uso de la tierra media y donde no faltan las canciones enanas, los brindis y los mathoms. Otra es la lectura de cuentos, momento en que los asistentes a la mereth leen en voz alta o recrean fragmentos cortos de las obras de J. R. R. Tolkien o de otros autores relacionados con la fantasía, incluidos poemas y cuentos escritos por los propios invitados. </H4>
 </div>

 <div class="div1"> 
      
       <h1 class="margen" >Meren Palantírion</h1><br>
       <img class="palantirion"   src="..\assets\palantirionlogotrans.png" alt="Palantirion">
         <h4 class="margen" >La Meren Palantírion (“Festival de las Piedras Videntes” en idioma quenya) se concibe como unas jornadas en línea para poder disfrutar de la obra y el universo Tolkien desde casa. Aspiramos a generar un espacio de encuentro donde se llevarán a cabo distintas actividades como talleres, charlas, juegos y mesas redondas, entre otras.
         Queremos transportar el espíritu del Profesor a través de las plataformas online y aprovechar esta ocasión para invitar a todas aquellas personas que quieran unirse al festival y disfrutar como un ent viajando hacia el sur.</h4>
      
   </div> 
 

   <div class="div1">
      <h1 class="margen">Premios</h1>
      <img class="premios" src="..\assets\Premios.png" alt="img premios" srcset="">
      <h4 class="margen"> La Sociedad Tolkien Española convoca y organiza premios con los objetivos de promover el conocimiento y estudio de la vida y obra de J.R.R. Tolkien y dar a conocer y estimular la elaboración de ensayos y trabajos de investigación de calidad encuadrados en el ámbito de la no-ficción. </H4>
      
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
   
    background-size: cover;
    overflow: hidden;

    .back{
    display: flex;
    position: absolute;
    width: 100%;
    float: left;
    margin-top: 5px;
    }
  
  .div1 {
       font-size: 100%;
       display: flex;
       flex-direction: column;
       justify-content: center;
       font-family: "MedievalSharp";
       width: 35%;
       color: rgb(93, 74, 36);
       text-align: center;
       margin-top: 50px;
       margin-left:4%;
       }
    .palantirion{
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }

    .premios{
      margin-left: AUTO;
      margin-right: AUTO;
      width: 30%;

    }
    .margen{
      margin: 30px;
    }
    
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
    background-size: cover;
    overflow: hidden;

  
     .div1 {
     display: flex;
     justify-content: center ;
     margin-left: auto;
     margin-right: auto;
     position: relative;
     width: 80%;
   
     }
   
     .video{
      display: flex;
      width: 100%;
      height: auto;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      
      }
     
    .premios{
      margin-left: AUTO;
      margin-right: AUTO;
      width: 50%;

    }
   
  }

  }
  
</style>