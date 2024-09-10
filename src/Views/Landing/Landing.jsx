import { AboutMe } from "../../components/aboutme/aboutme"
import { Navbar } from "../../components/navbar/nav"
import { Services } from "../../components/services/services"
import { Tittle } from "../../components/tittle/tittle"

export const Landing = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Tittle></Tittle>
            <AboutMe></AboutMe>
            <Services></Services>
        </div>
    )
}