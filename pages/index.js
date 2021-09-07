import Head from 'next/head'

export default function Home() {
    const companyName = 'WatsonXYZ'
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>{ `${companyName}`}</title>
        <link rel="icon" href="/Wxyz-larger.jpg" />
      </Head>

        <header className="grid grid-cols-2  w-full h-24 border-b px-5 py-6">
            <div className="flex justify-start text-xl font-semibold">
            <div className="px-4 text-3xl font-bold bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-transparent bg-clip-text hover:from-pink-500 hover:via-red-500 hover:to-purple-600">WatsonXYZ</div>
                <div className="px-2 py-2">Dashboard</div>
            <div className=" px-2 py-2">Finance</div>
            <div className=" px-2 py-2">Technology</div>
            <div className="px-2 py-2">About</div>
            </div>
            <div className="flex justify-end">
            <div className="px-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded ">Login</button>
            </div>
            <div>
            <button className="hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
            </div>
            </div>
        </header>
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
