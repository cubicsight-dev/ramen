import Footer from "./layout/Footer";
import NavBar from "./layout/NavBar";
import { poppins } from "./variables/fonts";

export default function layout({children}) {
    return (
        <>
            <NavBar/>
                <main className={`${poppins.variable} font-poppins bg-black menu`}>
                    {children}
                </main>
            <Footer/>
        </>
    )
}
