import { useEffect, useState } from "react";

interface ForecastDay {
    date : string;
}

interface Forecast {
    forecastday : ForecastDay;
}

interface Location{
    name: string;
    country: string;
}

interface Post {
    forecast : Forecast;
    name: string;
    title: string;
    location: Location;
}

const Post = ()=>{

    const [post, setPost] = useState<Post[]>([]);

    const fetchPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
        const data: Post[] = await response.json();
        setPost (data);
    }

    useEffect(
        () => {

            fetchPosts()
        },[]
    )

    return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24`}
    >
      <div>
        <h2 className="text-lg font-bold">
            {'Halaman Post dengan Client Side Fetch '}            
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
        </h2>

        {post.map((post, index) => (
            <p key={index}>{post.title}</p>
        ))}

      </div>

    </main>
    )
}

export default Post