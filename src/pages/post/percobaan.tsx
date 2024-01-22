import { OldCard } from "@/components";
import Layout from "@/layouts";

  interface Resulted {
    name: string;
    url:string;
  }
  
  interface ListPokemon {
    results: Resulted[];
  }
  
  interface Props {
    results: ListPokemon;
  }
  
  const CobaPost = ({ results }: Props) => {
    return (
      
      <main 
      className={`bg-sky-50/[.9] rounded-b-xl flex min-h-screen flex-col items-center justify-center`}
      >
        <Layout>
          <OldCard direction="column">
            <section className="w-full p-5 bg-sky-100/[.9] text-black flex flex-col justify-center rounded-md">
              <h2 className="w-full p-5 text-3xl bg-sky-100/[.9] text-black flex justify-center rounded-md">
                {'Halaman Pokemon Post'}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            <OldCard direction="column">
              {results.results.map((result, index) => (
                
                <OldCard key={index} direction="column" display="flex" justifyContent="center">
                  <p key={index}>{result.name}</p>
                  <p key={index}>{result.url}</p>               
                </OldCard>

              ))}
            </OldCard>

            </section>
          </OldCard>
        </Layout>

      </main>
    );
  };
  
  export const getServerSideProps = async () => {
    const responseKedua = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15');
    const timedata: ListPokemon = await responseKedua.json();
    console.log (timedata);

    return {
      props: {
        results: timedata,
      },
    };
  };
  
  export default CobaPost;
  