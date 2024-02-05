import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import BookService from "../services/BookService";

const BookDetails = (props) => {
    const [book, setBook] = useState({});
    const {id} = useParams();
    const navigate = useNavigate()

    const deleteHandler = (idForDeletion) => {
        BookService.deleteOneBook(idForDeletion)
            .then((res)=>{
                console.log(res)
                navigate("/")
            })
    }

    useEffect(() => {
        BookService.getOneBook(id)
        .then((res) => {
            console.log(res);
            setBook(res)
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