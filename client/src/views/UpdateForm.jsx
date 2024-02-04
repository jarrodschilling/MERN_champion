import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const UpdateForm = (props) => {
    
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
    const { id } = useParams()

    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then(res=> {
                console.log(res.data)
                setBookState(res.data)
            })
            .catch(err=> {
                console.log(err)
            })
    }, [id])

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

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/books/${id}`, bookState)
            .then(res => {
            console.log(res)
            console.log(res.data)
            navigate("/")
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
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
                <button className="addBook">Update Book</button>
            </form>
        </div>
    )
}

export default UpdateForm