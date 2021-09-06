import Head from 'next/head'

export default function Home() {
    const companyName = 'WatsonXYZ'
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>{ `${companyName}`}</title>
        <link rel="icon" href="/Wxyz-larger.jpg" />
      </Head>

        <header className="flex justify-end w-full h-24 border-b px-5 py-6">
            <div className="px-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">Login</button>
            </div>
            <div>
            <button className="hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
            </div>
        </header>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-transparent" href="https://watsonxyz-kelliewatson.vercel.app/">
              { `${companyName}!`}
          </a>
        </h1>




      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">

        <a
          className="flex items-center"
          href="https://watsonxyz-kelliewatson.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
            <div>Developed by &nbsp;</div>
            <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-transparent bg-clip-text">{`${companyName}`}</div>
        </a>
      </footer>
    </div>
  )
}
