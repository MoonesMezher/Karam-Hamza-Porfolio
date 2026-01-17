/* import CustomCursor from "../components/ui/CustomCursor" */
import LoadingSpinner from "../components/ui/LoadingSpinner" 
import ParticleBackground from "../components/ui/ParticleBackground"
import ScrollProgress from "../components/ui/ScrollProgress"
import Whatsapp from "../components/ui/Whatsapp"
import LanguageProvider from "../providers/LanguageProvider"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => {
    return (
        <LanguageProvider>
            <LoadingSpinner/> 
            <ScrollProgress/> 
            {/* <CustomCursor /> */}
            <ParticleBackground/>
            <Header/>
            <main>{ children }</main>
            <Footer/>
            <Whatsapp/>
        </LanguageProvider>
    )
}

export default Layout