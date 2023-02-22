//En el presente estamos creando una ruta anidada , es decir , id es el post dentro del post
//si queremos otra ruta debemos hacer otra carpeta dentro de id con su archivo page 
//y la ruta quedaria asi localhost300/post/id/nueva-ruta

const Post = ({params}) => {
    const {id} = params;
  return (
    //Aqui estamos recuperando la id del post 
    <h1>Este es el post {id}</h1>
  )
}

export default Post
