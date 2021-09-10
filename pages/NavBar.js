import Link from 'next/link'
import {useState} from "react";

function NavBar({companyName}) {
    const[menuView, setMenuView]=useState(false);
    const login = "Login";
    const register = "Register"
    const menuClicked = () => {setMenuView(!menuView); console.log(`Button Pressed: ${menuView}`);};
    const linkCLicked = () =>{(menuView)? setMenuView(!menuView) : setMenuView(menuView)};
    return (
        <nav className="flex items-center flex-wrap border-b p-4">
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
                    <div className="px-1 py-1 text-sm lg:px-2 lg:py-2 lg:mt-2 lg:text-xl font-semibold">
                        <Link href="/dashboard"><a onClick={linkCLicked}>Dashboard</a>
                        </Link></div>
                    <div className="px-1 py-1 text-sm lg:px-2 lg:py-2 lg:mt-2 lg:text-xl font-semibold">
                        <Link href="/finance"><a onClick={linkCLicked}>Finance</a></Link></div>
                    <div className="px-1 py-1 text-sm lg:px-2 lg:py-2 lg:mt-2 lg:text-xl font-semibold"><Link href="/technology"><a onClick={linkCLicked}>Technology</a></Link>
                    </div>
                    <div className="px-1 py-1 mb-3 text-sm lg:px-2 lg:py-2 lg:mt-2 lg:text-xl font-semibold"><Link href="/about"><a onClick={linkCLicked}>About</a></Link></div>
                    <div className="lg:ml-auto flex lg:justify-end mr-3">
                        <div className="px-2">
                            <Link href="/login" passHref>
                                <button onClick={linkCLicked} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 lg:px-8 lg:mt-3 rounded ">Login</button>
                            </Link>
                        </div>
                        <div className="">
                            <Link href="/register" passHref>
                                <button
                                    onClick={linkCLicked}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 lg:mt-3 rounded">Register
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