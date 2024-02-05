import { useEffect, useState, useReducer } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import BookService from "../services/BookService";

// export const ACTIONS = {
//     ADD_BOOK: "add-book",
//     DELETE_BOOK: "delete-book"
// }

// const reducer = (books, action) => {
//     switch(action.type) {
//         case ACTIONS.ADD_BOOK:
//             return axios.post("http://localhost:8000/api/books/add", bookState)
//                 .then(res => {
//                 console.log(res)
//                 console.log(res.data)
//                 navigate("/")
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                     setErrors(err.response.data.errors)
//                 })
//     }
// }


const Form = (props) => {
    const [bookState, setBookState] = useState({
        bookTitle: "",
        bookAuthor: "",
        bookPages: 0,
        isAvailable: false
    })
    // const [bookTitle, setBookTitle] = useState("")
    // const [bookAuthor, setBookAuthor] = useState("")
    // const [bookPages, setBookPages] = useState(0)
    // const [isAvailable, setIsAvailable] = useState(false)

    const [errors, setErrors] = useState({})
    const [formErrors, setFormErrors] = useState({
        bookTitle: "Front-End: A book's title is required!",
        bookAuthor: "Front-End: A book's author's name is required!",
        bookPages: "Front-End: A book must have some pages!"
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        if (e.target.name === "bookTitle") {
            let newValue = e.target.value
            setBookState((prevState) => ({
                ...prevState,
                [e.target.name]: newValue
            }))
            let errorMsg = ''
            if (newValue) {
                if (newValue.length < 2) {
                    errorMsg = "Front-End: A book's title must be at least two characters long!"
                } else if (newValue.length > 255) {
                    errorMsg = "Front-End: A book's title must be less than 255 characters long"
                }
            } else {
                errorMsg = "Front-end: Book Title is required"
            }
            setFormErrors({...formErrors, bookTitle: errorMsg})
        }
        else if (e.target.name === "bookAuthor") {
            let newValue = e.target.value
            setBookState((prevState) => ({
                ...prevState,
                [e.target.name]: newValue
            }))
            let errorMsg = ''
            if (newValue) {
                if (newValue.length < 2) {
                    errorMsg = "Front-End: A book's Author's name must be at least five characters long!"
                } else if (newValue.length > 255) {
                    errorMsg = "Front-End: A book's Author's name must be less than 255 characters long"
                }
            } else {
                errorMsg = "Front-end: A book's author's name is required!"
            }
            setFormErrors({...formErrors, bookAuthor: errorMsg})
        }
        else if (e.target.name === "bookPages") {
            let newValue = e.target.value
            setBookState((prevState) => ({
                ...prevState,
                [e.target.name]: newValue
            }))
            let errorMsg = ''
            if (newValue) {
                if (newValue == 0) {
                    errorMsg = "Front-End: A book must have some pages!"
            } 
            // else {
            //     errorMsg = "Front-End: A book must have some pages!"
            // }
            setFormErrors({...formErrors, bookPages: errorMsg})
            }
        }
        else {
            let newValue = e.target.checked
            setBookState((prevState) => ({
                ...prevState,
                [e.target.name]: newValue
            }))
        }
    }

    // const handleTitle = (e) => {
    //     setBookTitle(e.target.value)
    // }

    // const handleAuthor = (e) => {
    //     setBookAuthor(e.target.value)
    // }
    // const handlePages = (e) => {
    //     setBookPages(e.target.value)
    // }
    // const handleAvailable = (e) => {
    //     setIsAvailable(e.target.checked)
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        BookService.addOneBook(bookState)
            .then(res => {
            console.log(res)
            navigate("/")
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }

    const validateForm = () => {
        return Object.values(formErrors).every(value => value === '')
    }


    return(
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <label htmlFor="bookTitle">Title</label>
                <input type="text" name="bookTitle" id="bookTitle" value={bookState.bookTitle} onChange={handleChange}/>
                {formErrors.bookTitle && <p>{formErrors.bookTitle}</p>}
                {errors.bookTitle && <p>{errors.bookTitle.message}</p>}
                
                <label htmlFor="bookAuthor">Author</label>
                <input type="text" name="bookAuthor" id="bookAuthor" value={bookState.bookAuthor} onChange={handleChange}/>
                {formErrors.bookAuthor && <p>{formErrors.bookAuthor}</p>}
                {errors.bookAuthor && <p>{errors.bookAuthor.message}</p>}
                
                <label htmlFor="bookPages">Page Count</label>
                <input type="number" name="bookPages" id="bookPages" value={bookState.bookPages} onChange={handleChange}/>
                {formErrors.bookPages && <p>{formErrors.bookPages}</p>}
                {errors.bookPages && <p>{errors.bookPages.message}</p>}
                
                <div className="available">
                    <label htmlFor="isAvailable">Is Available?     </label>
                    <input type="checkbox" name="isAvailable" id="isAvailable" checked={bookState.isAvailable} onChange={handleChange}/>
                </div>
                <button className="addBook" type="submit" disabled={!validateForm()}>Add Book</button>
            </form>
        </div>
    )
}

export default Form