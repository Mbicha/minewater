import MyLink from "./MyLink";

const NavBar = () => {
    return(
        <>
            <header className="absolute flex fle-row justify-between items-center top-0 w-screen bg-[#1ca3ec] h-28 p-1">
                {/* LOGO */}
                <img src="/media/logo.svg" alt="" className="h-24 w-24"/>
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
