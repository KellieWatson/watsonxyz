import Link from 'next/link'
import {useState} from "react";

function NavBar({companyName}) {
    const[menuView, setMenuView]=useState(false);
    const login = "Login";
    const register = "Register"
    const menuClicked = () => {setMenuView(!menuView); console.log(`Button Pressed: ${menuView}`);};
    const linkCLicked = () =>{(menuView)? setMenuView(!menuView) : setMenuView(menuView)};
    return (
        <nav className="flex items-center flex-wrap border-b p-6">
            <Link href="/">
                <a onClick={linkCLicked}>
                   <span className="font-bold text-xl bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-transparent hover:from-pink-500 hover:via-red-500 hover:to-purple-600 lg:text-4xl lg:font-bold lg:mr-8 lg:ml-4">{companyName}</span></a>
            </Link>
            <div className="inline-flex ml-auto lg:hidden">
                <button onClick={menuClicked} className="hover:outline-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </button>
            </div>
            <div className={`${menuView ? '':'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
                <div className="w-full lg:inline-flex lg:flex-grow lg:w-auto">
                    <div className="px-2 py-2 text-xl font-semibold">
                        <Link href="/dashboard"><a onClick={linkCLicked}>Dashboard</a>
                        </Link></div>
                    <div className=" px-2 py-2 text-xl font-semibold">
                        <Link href="/finance"><a onClick={linkCLicked}>Finance</a></Link></div>
                    <div className=" px-2 py-2 text-xl font-semibold"><Link href="/technology"><a onClick={linkCLicked}>Technology</a></Link>
                    </div>
                    <div className="px-2 py-2 text-xl font-semibold"><Link href="/about"><a onClick={linkCLicked}>About</a></Link></div>
                    <div className="ml-auto flex justify-end">
                        <div className="px-2">
                            <Link href="/login" passHref>
                                <button onClick={linkCLicked} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded ">Login</button>
                            </Link>
                        </div>
                        <div>
                            <Link href="/register" passHref>
                                <button
                                    onClick={linkCLicked}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;