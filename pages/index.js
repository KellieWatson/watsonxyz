import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>WatsonXYZ</title>
        <link rel="icon" href="/Wxyz-larger.jpg" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-900" href="https://watsonxyz-kelliewatson.vercel.app/">
            WatsonXYZ!
          </a>
        </h1>




      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t text-blue-800">
        <a
          className="flex items-center justify-center"
          href="https://watsonxyz-kelliewatson.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by{' WatsonXYZ'}
        </a>
      </footer>
    </div>
  )
}
