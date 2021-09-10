import Head from "next/head";

const About =()=>{
    const companyName = 'WatsonXYZ'

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>{ `${companyName}`}</title>
                <link rel="icon" href="/Wxyz-gradient.PNG"/>
            </Head>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div>
            <h2>Subject: </h2>
            <p> Enhancing individuals' efficiency and financial prowess.
            </p>
            <h2>Company Purpose:</h2>
            <p> To help each member of our diverse communities to embrace and highlight life’s opportunities while avoiding unnecessary financial hazards.
            </p>
            <h2>Mission Statement:</h2>
            <p> To leverage advancing technologies to provide simple, actionable financial and organizational guidance.
            </p>
        </div>
            </main>
        </div>
    );
}
export default About;