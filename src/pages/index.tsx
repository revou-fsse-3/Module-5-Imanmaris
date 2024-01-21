
// import Layout from "@/layouts";
// import {NextPageWithLayout} from "./_app";
// import Head from "next/head";
// import { Card } from "@/components";


// const HomePage: NextPageWithLayout = () => {

//   return (
//     <section className={`bg-sky-100/[.9] rounded-b-sm p-24`}>
//       <Head>
//         <title>{'Halaman Index'}</title>
//       </Head>

//       <Card>
//         <h2 className={`mb-3 text-2xl font-semibold`}>
//           Halaman Depan {' '}
//           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//             -&gt;
//           </span>
//         </h2>
//       </Card>

//     </section>
//   )
// }

// HomePage.getlayout = function getlayout(page) {
//   return (
//     <main className={`bg-sky-50/[.9] rounded-b-xl flex min-h-screen flex-col items-center justify-center`}
//     >
//       <Layout>{page}</Layout>
//     </main>
//   )

// }

// export default HomePage



import Layout from "@/layouts";
import Head from "next/head";
import { Card } from "@/components";
import Link from "next/link";


export default function Home() {

  return (

    <main 
    className={`bg-sky-50/[.9] rounded-b-xl flex min-h-screen flex-col items-center justify-center`}
    >
      <Layout >
        <section className={`bg-sky-100/[1] rounded-b-sm p-24`}>
          <Head>
            <title>{'Halaman Index'}</title>
          </Head>

          <Card>
            <Link passHref href={'/weather/register'} className={`mb-3 text-2xl font-semibold`}>
              Silahkan register dahulu {' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </Link>
          </Card>
        </section>
      </Layout>
    </main>  

  )
}
