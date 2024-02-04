import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import axios from "axios";

const BookDetails = (props) => {
    const [book, setBook] = useState({});
    const {id} = useParams();
    const navigate = useNavigate()

    const deleteHandler = (idForDeletion) => {
        axios.delete(`http://localhost:8000/api/books/${idForDeletion}`)
            .then((res)=>{
                console.log(res.data)
                navigate("/")
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
        .then((res) => {
            console.log(res.data);
            setBook(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [id])

    return(
        <>
            <NavBar pageTitle={book.bookTitle} />
            <div className="detailContainer">
                <h1>{book.bookTitle}</h1>
                <h2>{book.bookAuthor}</h2>
                <p>Page Count: {book.bookPages}</p>
                <p>Available:
                {
                    book.isAvailable? " Yes": " No"
                }
                </p>
                <button className="borrowBook" onClick={(e)=>deleteHandler(book._id)}>Borrow Book</button>
            </div>
        </>
    )
}

export default BookDetails