



interface Post{
    title: string;
}

interface Todo{
    title: string;
}

interface Props {
    posts: Post[];
    todos: Todo[];
}

const PostServer = ({posts, todos}: Props) => {

    return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24`}
    >
      <div >
        <h2 className="text-lg font-bold p-12">
            {'Halaman Post dengan Server Side Fetch '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
        </h2>

        {posts.map((post, index) => (
            <p key={index}>{post.title}</p>
        ))}
        <h2 className="text-lg font-bold p-12">
            {'Halaman Post dengan Server Side Fetch ke-2 '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
        </h2>
        {todos.map((todo, index) => (
            <p key={index}>{todo.title}</p>
        ))}

      </div>

    </main>
    )
}

export const getServerSideProps = ( async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
    const data: Post[] = await response.json();

    const responseKedua = await fetch('https://jsonplaceholder.typicode.com/todos'); 
    const dataTodo: Todo[] = await responseKedua.json();

    return{
        props: {
            posts: data,
            todos: dataTodo
        }
    }
})

export default PostServer