/---------------------------------------  NEXT JS 3 PRACTICES  -------------------------------------------/
ES IMPORTANTE SABER DE ENTRADE que el archivo layout.js sera nuestra app y esta contendra los estilos globales , ademas de los componentes que queramos llevar en cada pagina de nuestra aplicacion.

LOS STYLES GLOBALES se declaran en el layout.js 

TAMBIEN PODEMOS DELARAR ESTILOS INDEPENDIENTES por cada modulo 

PRINCIPALMENTE  es importante considerar que el aporte mas grande que nos da next es la paginacion ademas de las rutas que pueden ser anidadas ejm :
        En la carpeta app podemos estructurar las pages, estas se crean de la siguiente manera: 
            1.) Se crea una carpeta con el nombre de la pagina y dentro de esta carpeta un file con el nombre page.js o extencion jsx 
        Tambien podemos crearlas anidadas de la siguiente manera: 
            2.) Debemos hacer otra carpeta dentro de id con su archivo page y la ruta quedaria asi localhost300/post/id/nueva-ruta, para un mejor ejmplo leer los modulos dentro de la carpeta Post alojada dentro de app
        Ademas estan pueden ser dinamicas consumiendo un servicio para pintar la pagina asi como se hace desde el modulo ListOfPost.jsx

PODEMOS CREAR LA NAVEGACION muy facilmente como lo hicimos en los documents Navigation creando un arreglo de los titulos del navbar y recorriendolos por un map




