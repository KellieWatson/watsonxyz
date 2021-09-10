import NavBar from "../NavBar";
import Footer from "../Footer";
import Head from "next/head";

export default function Layout({children}){
    const companyName = "WatsonXYZ";
    return(<>
        <Head>
            <title>{ `${companyName}`}</title>
            <link rel="icon" href="../Wxyz-gradient.png"/>
        </Head>
        <NavBar companyName={companyName}/>
        <main>{children}</main>
        <Footer companyName={companyName}/>
        </>);
}