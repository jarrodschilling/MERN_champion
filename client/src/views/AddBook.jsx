import NavBar from "../components/NavBar";
import Form from "./Form";

const AddBook = (props) => {
    const pageTitle = "Add a Book"
    return(
        <div>
            <NavBar pageTitle={pageTitle} />
            <Form />
        </div>
    )
}

export default AddBook