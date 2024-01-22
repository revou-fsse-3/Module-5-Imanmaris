import Layout from "@/layouts";
import Head from "next/head";
import { OldCard } from "@/components";
import Link from "next/link";


export default function Home() {

  return (

    <main 
    className={`bg-sky-50/[.9] rounded-b-xl flex min-h-screen flex-col items-center justify-center`}
    >
      <Layout >
        <section className={`bg-sky-100/[1] rounded-b-sm p-20`}>
          <Head>
            <title>{'Halaman Index'}</title>
          </Head>


            <Link passHref href={'/weather/register'} className={`mb-3 p-5 text-xl w-full font-semibold bg-sky-50/[.9] rounded-xl flex flex-col items-center justify-center hover:bg-sky-200/[.5]`}>
               {'Silahkan register dahulu '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </Link>

        </section>
      </Layout>
    </main>  

  )
}
