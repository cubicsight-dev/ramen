import { useCallback, useEffect, useState } from "react"


const NavBar = () => {
    const [atTop, setAtTop] = useState(true)
    const [isOpenNav, setisOpenNav] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
        return () => {
            window.removeEventListener("scroll", onScroll, { passive: true });
        }
    },[])

    useEffect(() => {
        document.body.style.overflow = (isOpenNav ? 'hidden' : 'unset')
    },[isOpenNav])

    const onScroll = useCallback(event => {
        const { pageYOffset, scrollY } = window;

        setAtTop(scrollY <= 100 ? true : false)
    }, []);

    const onToggleNav = () => {
        console.log()

        if (window.innerWidth < 640) {
            setisOpenNav(p => !p)
        }
    }

    return (
        <header className={`
            fixed top-0 left-0 py-4 w-full z-10 transition ease-in-out duration-300 delay-100
            ${!atTop ? 'bg-black/90 shadow-md border-b-4 border-b-red-700' : 'bg-transparent border-b-0 border-b-transparent'}
            `}>
            <div className="custom-container flex justify-between" onClick={onToggleNav}>
                <a href="#hero" className="z-30">Your Logo</a>
                <div id="mobile_menu_button" className="w-[33px] z-20 border-2 border-red-700 p-1 visible s sm:hidden">
                    <div className={`w-full bg-red-700 h-[3px] transition ease-in-out duration-300 delay-300 ${isOpenNav ? 'rotate-[42deg] translate-y-[7px]': ''}`}></div>
                    <div className={`w-full bg-red-700 h-[3px] transition ease-in-out duration-300 delay-300 my-1 ${isOpenNav ? 'opacity-0' : 'opacity-100'}`}></div>
                    <div className={`w-full bg-red-700 h-[3px] transition ease-in-out duration-300 delay-300 ${isOpenNav ? '-rotate-[42deg] -translate-y-[7px]' : 'rotate-0 translate-y-0'}`}></div>
                </div>
                <nav className={`flex gap-5 z-10 flex-col items-center justify-center fixed w-screen h-screen bg-black/95 ${!isOpenNav ? 'translate-x-full' : ''} sm:items-end sm:static sm:w-auto sm:flex-row sm:h-full sm:bg-transparent sm:justify-end sm:translate-x-0 right-0 top-0 transition ease-in-out duration-300 delay-100`}>
                    <a className={`font-semibold border-b-2 border-transparent text-2xl w-full text-center sm:text-sm sm:w-auto transition ease-in-out duration-200 delay-100 ${!atTop ? 'hover:border-white' : 'hover:border-red-700'}`} href="#about"
                    >About Us</a>
                    <a className={`font-semibold border-b-2 border-transparent text-2xl w-full text-center sm:text-sm sm:w-auto transition ease-in-out duration-200 delay-100 ${!atTop ? 'hover:border-white' : 'hover:border-red-700'}`} href="#menu">Menu</a>
                    <a className={`font-semibold border-b-2 border-transparent text-2xl w-full text-center sm:text-sm sm:w-auto transition ease-in-out duration-200 delay-100 ${!atTop ? 'hover:border-white' : 'hover:border-red-700'}`} href="#contact">Contact Us</a>
                </nav>
            </div>
        </header>
    )
}

export default NavBar