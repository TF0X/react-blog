const Navbar = () => {

    return(
        <nav className="bg-neutral-950 w-full py-5  text-xl justify-around text-slate-50 sm:flex ">
                <span className="text-3xl mx-5 sm:mx-0">My<span className="text-purple-600">Blog</span></span>
                <ul className="sm:inline-flex hidden pt-2 ">
                    <li className="text-purple-500 semi-bold underline mx-3 px-2">Home</li>
                    <li className="mx-3 px-2">Services</li>
                    <li className="mx-3 px-2">About</li>
                    <li className="mx-3 px-2">Categories</li>
                </ul>
                <button className="bg-purple-500 p-2 px-4 m-5 sm:block hidden sm:m-0 rounded bold text-slate-200 text-xl">Login</button>
        </nav>
    )
}
export default Navbar;