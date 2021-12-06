# App de Harry Potter hecha en React 17 usando Flexbox, SASS y Redux

Las instrucciones para levantar el proyecto son:
* Descargar o clonar este repositorio 
* Dentro del proyecto abrir una consola y ejecutar el comando yarn install para recontruir node_modules
* Una vez instaladas las dependencias ejecutar el script `yarn fake-api` para levantar la API de json-server en el puerto 5000
* Ejecutar el script `yarn start` para iniciar la app de React

### ¿Qué es lo que más te gustó de tu desarrollo?

La parte que más disfruto del desarrollo web del lado del frontend es sin duda la maquetación, me gusta mucha la parte de
replicar diseños y pasarlos de una mockup a una maqueta en HTML y CSS, ya que me es muy entretenido la parte de meter estilos y darle forma a los componentes UI. De igual manera este desarrollo me sirvio para poner a prueba mis conocimientos en React con el manejo de las props entre componentes padres, hijos y hermanos. Otra de las cosas que mas me gusto fue el poder usar Redux y haber podido lograr el manejo del estado global esta parte me gusto mucho por que casi no habia tenido la oportunidad de usar Redux en los proyectos donde he estado colaborando. Por ultimo otra parte que me gusta fue la forma en que acomode mi sistema de carpetas del proyecto ya que siento que la deje bastante ordenada.

### Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?

Sin duda las pruebas unitarias es una parte importante que no me di tiempo de implementar y en las cuales tampoco soy muy diestro y es por eso que me hubiera llevado más tiempo el aprender a aplicarlas correctamente. Otra cosa que me hubiera gustado implementar es hacer la aplicación más robusta es decir meter más validaciones, por ejemplo que no se puedan repetir los personajes dos veces en la seccion de favoritos, tal vez eliminar de la interfaz el personaje marcado como favorito. Otra cosa que no me dio tiempo de aplicar fue poder convertir la foto que se sube en el formulario a base64 para poder subirla a algun servicio de almacenamiento y asi poder tener la imagen por medio de una URL. Otra cosa muy importante que me hubiera gustado implementar en la app son las microinteracciones con el usuario y que le dan retroalimentacion de lo que esta pasando con app con esto me refiero a mandar mensajes de "Exito", "Error", "Loaders" que si bien si deje los actions de Redux preparado para que estas microinteracciones se puedan implementar ya no me dio tiempo de hacerlo. Y por ultimo me hubiera gustado hacer los estilos moviles mejor si bien la deje lo mas parecido a como el mockup indicaba siento que pude hacerlo un poco mejor pero los estilos moviles llevan siempre un poco más de tiempo.


### Descríbenos un pain point o bug con el que te hayas encontrado y como lo solucionaste

En la parte de cambiar la barra de favoritos y agregar personaje que en desktop esta arriba y en moviles esta abajo y fija fue un parte bastante retadora y que solucione haciendo dos barras y con ayuda de las media queries indicaba cuando mostrar una u otra barra. Me hubiera gustado hacerlo con una sola barra pero siento que barra si cambia bastante una de otra ademas de que ya se tiene demasiada logica de Redux dentro de ella.
Otro punto de fue la parte de Redux que al principio no se podia lograr que se modificara el State y lo solucione volviendo a repasar todo el flujo de trabajo de Redux para al final descubrir que estaba llamando de forma erronea mi Action en el Reducer. De igual manera el mismo uso de Redux fue bastante retador ya que como mencione no he tenido muchas oportunidades de implementarlo o trbajar con él.
Otro punto y que considero bastante importante es que en desarrollo los personajes se pueden agregar y eliminar de mis favoritos sin problema, sin embargo en produccion para poder eliminar de mis favoritos hace falta recargar la página para que la interfaz detecte que tiene personajes almacenados en favoritos y el boton de eliminar pueda hacer su funcion, quiero aclarar que los datos no se pierden al recargar la pagina, los datos permanecen. Estos es algo que "arregle" usando `window.location.reload(true)` sin embargo decido comertar esa linea de codigo ya que considero debe existir una solucion más optima pero que ya no me dio tiempo de buscar.


## Deplor del Proyecto en Netlify

Mi aplicación de esta prueba decidi hacerle deploy en el siguiente link [Netlify](https://nostalgic-hopper-244f47.netlify.app/).

