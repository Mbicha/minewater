import MyLink from "./MyLink";

const NavBar = () => {
    return(
        <>
            <header className="flex fle-row justify-between items-center top-0 w-screen bg-[#1ca3ec] h-1/5 p-1">
                {/* LOGO */}
                <img src="/media/logo.svg" alt="" className="h-20 w-20"/>
                {/* NAVARAV */}
                <nav className="flex flex-row">
                    <MyLink path={`/`} value={'Home'} />
                    <MyLink path={`/about-us`} value={'About Us'} />
                </nav>
            </header>
        </>
    )
}

export default NavBar;
