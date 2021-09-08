import NavBar from "../NavBar";
import Footer from "../Footer";

export default function Layout({children}){
    const companyName = "WatsonXYZ";
    return(<>
        <NavBar companyName={companyName}/>
        <main>{children}</main>
        <Footer companyName={companyName}/>
        </>);
}