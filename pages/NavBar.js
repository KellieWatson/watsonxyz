import Link from 'next/link'


function NavBar(props) {
    const companyName = props.companyName;
    const login = "Login";
    const register = "Register"
    const onClickHandler = () => {console.log("Button pushed")};
    return (
    <header className="grid grid-cols-2  w-full h-24 border-b px-5 py-6">
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
    </header>);
}

export default NavBar;