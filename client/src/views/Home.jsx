import Display from "./Display";
import NavBar from "../components/NavBar";

const Home = (props) => {
    const pageTitle = "Book Catalog"

    return(
        <div>
            <NavBar pageTitle={pageTitle} />
            <Display />
        </div>
    )
}

export default Home