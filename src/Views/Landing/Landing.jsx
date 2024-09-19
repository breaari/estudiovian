import { AboutMe } from "../../components/aboutme/aboutme"
import { Navbar } from "../../components/navbar/nav"
import { Services } from "../../components/services/services"
import { Tittle } from "../../components/tittle/tittle"
import { Why } from "../../components/why/why"
import { Clients } from "../../components/clients/clients"
import { Contact } from "../../components/contact/contact"
import { Footer } from "../../components/footer/footer"

export const Landing = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mq980:px-3">
            <Tittle></Tittle>
            <AboutMe></AboutMe>
            <Services></Services>
            <Why></Why>
            <Clients></Clients>
            <Contact></Contact>
            </div>
            <Footer></Footer>
        </div>
    )
}