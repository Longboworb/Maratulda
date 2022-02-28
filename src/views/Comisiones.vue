<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import gsap from 'gsap';
import App from '@/App.vue';



export default defineComponent({
  components: { App },
  name: 'container',

 

  setup() {
    onMounted(() => {
      const tl = gsap.timeline();

      gsap.set('.container', {
        opacity: 0,
        
      });
      
      
      gsap.set('.title', {
        opacity: 1,
        
      });

      gsap.set('.div1', {
        opacity: 0,
        
      });
      gsap.set('.div3', {
        opacity: 0,
        
      });
      gsap.set('.div1-2', {
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
      tl.to('.div1-2', {
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

<div class="back">
  <a href="javascript:history.back()"><img src="..\assets\pixlr-bg-result.png" height="20" width="" alt="Botón"></a>
  </div>


   <div class="titulooff">
     
         <h1 class="separacion1" >Comisiones<br> & <br>Equipos de Trabajo</h1>
           <h1 class="separacion"   >Las comisiones de trabajo son grupos de interés sobre un conjunto de materias que permiten a socios y socias de la STE disponer de un foro específico para tratarlas.</h1>
           <h1 >Si pasas el puntero del ratón por encima de cada icono surgirá una brave explicación de cada comisión y al hacer clic te deriva a su enlace. En caso de móviles o tablets, dejalo pulsado. </h1>
   </div>

   <div class="div1">


         <img class="sombra"  src="..\assets\Comisiones\artesania.jpg" alt="artesania" title="La comisión de Artesanía nació para dar cabida a todos aquellos a los que les gusta el arte, las manualidades, la costura, escultura o pintura y siempre están buscando nuevos socios que quieran enseñar o aprender. Son la comisión organizadora de los premios Niggle.">
         <h3 class="a">Artesanía</h3>
         <a class="a" href="mailto:artesania@sociedadtolkien.org">artesania@sociedadtolkien.org</a>
         <img class="sombra" src="..\assets\Comisiones\bienvenida_y_acogida.jpg" alt="bienvenida" title=" Estos chicos están más que dispuestos a hacerte sentir como en casa. ¿Quizá buscas un seudónimo? Ellos te pueden ayudar. ¿Quieres conocer nuestras canciones o que te expliquen algo más sobre las otras comisiones? ¿Qué es eso de Estelcon? ¿Estás un poco perdido? No dudes en pedirles ayuda (por supuesto siempre podéis recurrir a este email desde el que te escribo para resolver dudas). Sus miembros te recibirán con los brazos abiertos.">
         <h3 class="a" >Bienvenida y acogida</h3>
         <a class="a" href="mailto:acogida@sociedadtolkien.org">acogida@sociedadtolkien.org</a>
         <img class="sombra" src="..\assets\Comisiones\humanidades.jpg" alt="Humanidades" title="La comisión de Humanidades es un lugar para aquellos que quieran saber más. Hay eruditos y aprendices, curiosas y sabias. Es un lugar para estudiar en profundidad la obra del profesor desde un punto de vista académico. Hay traducciones, creación de artículos, debates… Incluso algunos se presentan a los famosos premios de ensayo Ælfwine.">
         <h3 a class="a">Humanidades</h3>
         <a class="a" href="mailto:comisionhumanidades@sociedadtolkien.org">comisionhumanidades@sociedadtolkien.org</a>
         <img class="sombra" src="..\assets\Comisiones\juegos.jpg" alt="juegos" title="Juegos de tablero y videojuegos">
         <h3 class="a" >Juegos</h3>
         <a class="a" href="mailto:juegos@sociedadtolkien.org">juegos@sociedadtolkien.org</a>
         <img class="sombra" src="..\assets\Comisiones\montana.jpg" alt="naturaleza" title="Esta comisión nace del deseo de respirar aires mas puros, descubrir lagos y montañas ocultos, recorrer esos caminos que salen de nuestras puertas y no sabemos donde nos llevarán.">
         <a href="https://www.facebook.com/Comisión-de-Montaña-y-Naturaleza-STE-108042131708773/">
         <h3 class="a" >Naturaleza y montaña</h3></a>
         <a class="a" href="mailto:naturaleza@sociedadtolkien.org">naturaleza@sociedadtolkien.org</a>
         <img class="sombra" src="..\assets\Comisiones\musica.jpg" alt="Musica" title="Cuando hablamos de la comisión de Música y Baile pensamos en fiesta. Es la música y los bailes las que animan nuestras reuniones. Son nuestras versiones las que coreamos en las cenas de gala y lecturas de cuentos. Todos los creadores están en esta comisión, pero también aquellos que sienten amor por la música. Concursos propios, musicales, discos… La comisión de música aúna a un grupo de gente variopinta con ganas de pasarlo bien. Puedes encontrar todas las canciones en http://ainulindale.sociedadtolkien.org/ poniendo la contraseña “soy ainulindrim” sin las comillas">
         <a class="a" href="http://ainulindale.sociedadtolkien.org">
         <h3 class="a" >Musica y bailes</h3></a>
         <a class="a" href="mailto:musica-bailes@sociedadtolkien.org">musica-bailes@sociedadtolkien.org</a>
         <img class="sombra" src="..\assets\Comisiones\lenguas.jpg" alt="lenguas" title="Puedes escribir para poder entrar en su grupo de trabajo en el que exploran las lenguas creadas por El Profesor: quenya, tengwar, khuzdul y hasta inglés antiguo.">
         <a href="http://lambendili.sociedadtolkien.org/">
         <h3 class="a" >Lenguas</h3></a>
         <a class="a" href="mailto:lenguas@sociedadtolkien.org">lenguas@sociedadtolkien.org</a>
         <img class="sombra" src="..\assets\Comisiones\literatura.jpg" alt="literatura" title=" Un lugar donde dar rienda suelta a tus instintos literarios. Incluso puedes pedir ayuda para los Gandalf, nuestros premios de literatura, en los que te animo a que participes en próximas ediciones.">
         <h3 class="a">Literatura</h3>
         <a class="a" href="mailto:literatura@sociedadtolkien.org">literatura@sociedadtolkien.org</a>
         <img class="sombra" src="..\assets\Comisiones\biblioteca.png" alt="biblioteca" title=" ¿Sabes qué más tiene la asociación? Una impresionante biblioteca a la que todo socio puede solicitar libros. El bibliotecario y la bibliotecaria están para aconsejarte y guiarte mientras descubres todo lo que hay en ella. Escríbelos ante cualquier duda. Allí se guardan copias de los premios de relato Gandalf de los que hablamos antes.">
         <a class="a" href="https://www.sociedadtolkien.org/blog/category/biblioteca/">
         <h3 a class="a" >Biblioteca</h3></a>
         <a a class="a" href="mailto:biblioteca@sociedadtolkien.org">biblioteca@sociedadtolkien.org</a>
         <img class="sombra" src="..\assets\Comisiones\regreso_a_hobbiton.jpeg" alt="RAH" title="En la STE tenemos la suerte de contar con un Podcast… ¡Y bastante exitoso! Regreso a Hobbiton lleva ya seis temporadas hablando de temas muy diversos y entretenidos. Cualquiera que pase una hora con Elia, Erendis, Balin, Nai, Eleder y todos sus invitados sabe que es una hora aprovechada.">
         <a a class="a" href="https://www.ivoox.com/podcast-regreso-a-hobbiton_sq_f1153534_1.html">
         <h3 a class="a" >Regreso a Hobbiton</h3>
         <h4 a class="a" >Regreso a Hobbiton podcast</h4></a>
         <a a class="a" href="https://www.youtube.com/watch?v=vUSOeTDdaR0&t=5007s">
         <h4 a class="a" >Regreso a Hobbiton YouTube</h4></a>
         <img class="sombra" src="..\assets\Comisiones\Web.jpg" alt="Web" title="Un grupo para desarrollo Web">
         <h3 a class="a" >Recursos Web</h3>
         <img class="sombra" src="..\assets\Comisiones\Twich.png" alt="Twich" title="Canal de Twitch de la Sociedad Tolkien Española. Visítalo para vernos jugar, comentar cartas o textos de Tolkien, preguntarnos dudas…¡Y anímate tú también a participar!">
         <h3 a class="a">Twich</h3>
         <a a class="a" href="https://www.twitch.tv/sociedadtolkienes"><h4 a class="a" >Twich</h4></a>
         <a a class="a" href="mailto:twich@sociedadtolkien.org">twich@sociedadtolkien.org</a>
         <img class="sombra" src="..\assets\Comisiones\poptolkien.jpg" alt="POP Tolkien" title="Hemos creado este grupo para buscar y analizar la influencia de la obra de Tolkien en ámbitos variados de la cultura actual. 
Nuestra idea es materializar este análisis en artículos de la Estel, charlas en la EstelCon, directos de Twitch, publicaciones en las redes sociales de la asociación... 
Si quieres participar con nosotras, puedes escribirnos a poptolkien@sociedadtolkien.org 

¡Anímate a participar!
">
         <h3 a class="a" >POP Tolkien</h3>
         <a a class="a" href="mailto:poptolkien@sociedadtolkien.org">poptolkien@sociedadtolkien.org</a>
         <img class="sombra" src="..\assets\Comisiones\estel.jpg" alt="Estel" title="Nuestra maravillosa revista">
         <a a class="a" href="https://www.sociedadtolkien.org/blog/category/publicaciones/revista-estel/">
         <h3 a class="a">Revista Estel</h3></a>
         <a a class="a" href="mailto:estel@sociedadtolkien.org">estel@sociedadtolkien.org</a>
         </div>
   
</div>
</template>

<style lang="scss" scoped>

  .container {
    display: flex;
    width: 100%;
    height: 100vh;
    background: url("../assets/home-background.png") no-repeat center fixed;
    background-size: cover;
    overflow: hidden;
    background-size: cover;
    text-align: center;
    background-color: rgba(31,31,31,0.9);
  }

  .back{
    display: flex;
    position: absolute;
    width: 100%;
    float: left;
    margin-top: 5px;
    
   
   }

    .sombra {
      display: flex;
      justify-content: center;
      flex-direction: column;
      border-radius: 8px;
      box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.50);
      width: 8%;
      height: 13%;
      margin-left: 0px;
      margin-top: 10px;
      
      
}

      

  .titulooff {
    display: flex;
     justify-content: center;
     flex-direction: column;
     width: 25%;
     height: 80%;
     margin-left: auto;
     margin-right: auto;
     position: relative;
     text-align: center;
     font-family: "MedievalSharp";
     font-size: 10px;
     padding: 50px;
     margin-top: 30px;
    
   
    color: rgb(93, 74, 36);
   
    
  }
  .separacion {
    padding: 20px;
  }
  .separacion1 {
    padding: 20px;
    font-size: 40px;
  }
     .div1 {
     display: flex;
      flex-direction: column;
      position: relative;
      flex-wrap: wrap;
      width:100%;
      height: 93%;                                                                                                                                                               
      margin-top: 1%;
      overflow: hidden;
      padding: 20px;
      text-align: left;
     color: rgb(93, 74, 36);
    margin-left: auto;
     }
    
       .sombra:hover  {
      width: 180px;
      height: 180px;
      background-color: rgba(31,31,31,0.9);
      justify-content: centers;
      position: relative;
      color: rgb(93, 74, 36);
      transition-duration:1s;
 
    }




     @media (max-width:1279px) {

      
     .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: url("../assets/home-background.png") no-repeat center fixed;
    background-size: cover;
    overflow: hidden;
    background-size: cover;
    background-color: rgba(31,31,31,0.9);
  }
    .sombra {
      display: flex;
      flex-direction: column;
      border-radius: 8px;
      box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.50);
      width:30%;
      height: 30%;
      margin: auto;
      padding: 10px;
      margin-top: 30px ;
     
     
     
     

}


      

  .titulooff {
    display: flex;
     width: 100%;
     height: 99%;
     margin-left: auto;
     margin-right: auto;
     position: relative;
     text-align: center;
     font-family: "MedievalSharp";
     font-size: 10px;
     margin-top: 10%;
   
    color: rgb(93, 74, 36);
    padding: 20px;
    
  }
  .separacion {
    padding: 50px;
  }
  .separacion1 {
    padding: 20px;
    font-size: 40px;
  }
    
    
       .sombra:hover  {
      width: 180px;
      height: 180px;
      background-color: rgba(31,31,31,0.9);
      justify-content: centers;
      position: relative;
      color: rgb(93, 74, 36);
 
    }
    
     .a{
       text-align: center;
       margin-top: 10px;
     }
    

    }
</style>