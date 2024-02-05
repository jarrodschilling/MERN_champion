import NavBar from "../components/NavBar";
import UpdateForm from "./UpdateForm";

const BookUpdate = (props) => {
    const pageTitle = "Update Book"
    return(
        <div>
            <NavBar pageTitle={pageTitle} />
            <UpdateForm />
        </div>
    )
}

export default BookUpdate