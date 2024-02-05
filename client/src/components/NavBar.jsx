import { useParams, useNavigate, Link } from "react-router-dom";

const NavBar = (props) => {
    const {pageTitle} = props

    return(
        <div className="navBar">
            <div className="navLinks">
                <button className="navButton"><Link className="contLink" to="/">Catalog</Link></button>
                <button className="navButton"><Link className="contLink" to="/create">Add Book</Link></button>
            </div>
            <h1 className="navTitle">{pageTitle}</h1>
        </div>
    )
}

export default NavBar