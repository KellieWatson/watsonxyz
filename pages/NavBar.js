import Link from 'next/link'
import {useState} from "react";

function NavBar({companyName}) {
    const[menuView, setMenuView]=useState(false);
    const login = "Login";
    const register = "Register"
    const menuClicked = () => {setMenuView(!menuView); console.log(`Button Pressed: ${menuView}`);};
    return (
        <nav className="flex items-center flex-wrap border-b p-6">
            <Link href="/">
                <a onClick={menuClicked}>
                   <span className="inline-flex items-center mr-4 px-4 text-3xl font-bold bg-gradient-to-r from-green-500 via-blue-500 to-purple-600
                text-transparent bg-clip-text hover:from-pink-500 hover:via-red-500 hover:to-purple-600"> {companyName}</span></a>
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
                        <Link href="/dashboard"><a onClick={menuClicked}>Dashboard</a>
                        </Link></div>
                    <div className=" px-2 py-2 text-xl font-semibold">
                        <Link href="/finance"><a onClick={menuClicked}>Finance</a></Link></div>
                    <div className=" px-2 py-2 text-xl font-semibold"><Link href="/technology"><a onClick={menuClicked}>Technology</a></Link>
                    </div>
                    <div className="px-2 py-2 text-xl font-semibold"><Link href="/about"><a onClick={menuClicked}>About</a></Link></div>
                    <div className="ml-auto flex justify-end">
                        <div className="px-2">
                            <Link href="/login" passHref>
                                <button onClick={menuClicked} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded ">Login</button>
                            </Link>
                        </div>
                        <div>
                            <Link href="/register" passHref>
                                <button
                                    onClick={menuClicked}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        </nav>
   /* <header className="grid grid-cols-2  w-full h-24 border-b px-5 py-6">
        <div className="flex justify-start text-xl font-semibold">
            <div
                className="px-4 text-3xl font-bold bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-transparent bg-clip-text hover:from-pink-500 hover:via-red-500 hover:to-purple-600">
                <Link href="/"><a>{companyName}</a></Link>
            </div>
            <div className="px-2 py-2">
                <Link href="/dashboard"><a>Dashboard</a>
                </Link></div>
            <div className=" px-2 py-2">
                <Link href="/finance"><a>Finance</a></Link></div>
            <div className=" px-2 py-2"><Link href="/technology"><a>Technology</a></Link>
                </div>
            <div className="px-2 py-2"><Link href="/about"><a>About</a></Link></div>
        </div>
        <div className="flex justify-end">
            <div className="px-2">
                <Link href="/login" passHref>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded ">Login</button>
                </Link>
            </div>
            <div>
                <Link href="/register" passHref>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register
                </button>
                </Link>
            </div>
        </div>
    </header>*/

    );
}

export default NavBar;