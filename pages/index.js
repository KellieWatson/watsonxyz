import Head from 'next/head'
import NavBar from "./NavBar";
import Link from "next/link";

export default function Home() {
    const companyName = 'WatsonXYZ'
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>{ `${companyName}`}</title>
        <link rel="icon" href="/Wxyz-larger.jpg" />
      </Head>

        <NavBar/>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-transparent hover:from-pink-500 hover:via-red-500 hover:to-purple-600" href="https://watsonxyz-kelliewatson.vercel.app/">
              { `${companyName}!`}
          </a>
        </h1>
          <pre>Learn to Produce  &rarr;  Produce to Learn</pre>




      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">

        <a
          className="flex items-center"
          href="https://watsonxyz-kelliewatson.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
            <div>Developed by &nbsp;</div>
            <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-transparent bg-clip-text hover:from-pink-500 hover:via-red-500 hover:to-purple-600">{`${companyName}`}</div>
        </a>
      </footer>
    </div>
  )
}
