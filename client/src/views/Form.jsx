import { useEffect, useState, useReducer } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from 'axios';

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
    const navigate = useNavigate()

    const handleChange = (e) => {
        if (e.target.name !== "isAvailable") {
            let newValue = e.target.value
            setBookState((prevState) => ({
                ...prevState,
                [e.target.name]: newValue
            }))
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
        axios.post("http://localhost:8000/api/books/add", bookState)
            .then(res => {
            console.log(res)
            console.log(res.data)
            navigate("/")
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }


    return(
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <label htmlFor="bookTitle">Title</label>
                <input type="text" name="bookTitle" id="bookTitle" value={bookState.bookTitle} onChange={handleChange}/>
                {errors.bookTitle && <p>{errors.bookTitle.message}</p>}
                <label htmlFor="bookAuthor">Author</label>
                <input type="text" name="bookAuthor" id="bookAuthor" value={bookState.bookAuthor} onChange={handleChange}/>
                {errors.bookAuthor && <p>{errors.bookAuthor.message}</p>}
                <label htmlFor="bookPages">Page Count</label>
                <input type="number" name="bookPages" id="bookPages" value={bookState.bookPages} onChange={handleChange}/>
                {errors.bookPages && <p>{errors.bookPages.message}</p>}
                <div className="available">
                    <label htmlFor="isAvailable">Is Available?     </label>
                    <input type="checkbox" name="isAvailable" id="isAvailable" checked={bookState.isAvailable} onChange={handleChange}/>
                </div>
                <button className="addBook">Add Book</button>
            </form>
        </div>
    )
}

export default Form