// El fetching de datos cambia radicalmente y como el componentes es un server component por lo tanto
// el fetchin de datos se esta haciendo en el servido ,
// por esto el componente no se esta haciendo en el cliente sino en el servidor 
// entonces el fetch se hace de la siguiente manera

import { LikeButton } from "./[id]/LikeButton";

const fetchPost = () =>{
    return fetch('http://jsonplaceholder.typicode.com/posts')
      .then(res => res.json());
  }
  
  export const ListOfPost = async({params}) => {
    const posts = await fetchPost()
  
    return posts.slice(0, 5).map(post =>(
          <article key ={post.id}>
            <h2 style ={{color: '#09f'}}>{post.title}</h2>
            <p>{post.body}</p>
            <LikeButton id ={post.id}/>
          </article>
        ))
     
  }
  
