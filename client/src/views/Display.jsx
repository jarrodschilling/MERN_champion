import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import BookService from "../services/BookService";



const Display = (props) => {
    const [books, setBooks] = useState([]);
    const deleteHandler = (idForDeletion) => {
        axios.delete(`http://localhost:8000/api/books/${idForDeletion}`)
            .then((res)=>{
                console.log(res.data)
                const filteredList = books.filter((book) => {
                    return book._id !== idForDeletion
                })
                setBooks(filteredList)
            })
    }
    useEffect(()=> {
        BookService.getAllBooks()
            .then((res) => {
                console.log(res);
                setBooks(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])



    return(
        <div className="displayContainer">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Pages</th>
                        <th>Available</th>
                        <th>Book Detail</th>
                        <th>Borrow Book</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, index) => (
                            <tr key={index}>
                                <td><Link className="contLink" to={`/books/${book._id}/details`}>{book.bookTitle}</Link></td>
                                
                                <td>{book.bookAuthor}</td>
                                <td>{book.bookPages}</td>
                                <td>
                                    {
                                        book.isAvailable? "Yes": "No"
                                    }
                                    <Link className="contLink" to={`/books/${book._id}/update`}>/Edit</Link>
                                </td>
                                <td><button><Link className="contLink" to={`/books/${book._id}/details`}>Book Detail</Link></button></td>
                
                                <td>
                                    {
                                        book.isAvailable? <button onClick={()=>deleteHandler(book._id)}>Borrow Book</button>: ""
                                    }
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Display