
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { LayoutInterface } from "../utils/interfaces";

export default function layout({ children }: Readonly<LayoutInterface>) {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    );
};
