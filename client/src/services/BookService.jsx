import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:8000/api',
})

function getAllBooks() {
    return http.get('/books')
        .then(res => res.data)
        .catch(err => {
            throw err;
        })
}

function updateOneBook(book) {
    return http.put(`/books/${book._id}`, book)
        .then(res => res.data)
        .catch(err => {
            throw err;
        })
}

function addOneBook(book) {
    return http.post("/books/add", book)
        .then(res => res.data)
        .catch(err => {
            throw err;
        })
}

const BookService = {
    getAllBooks: getAllBooks,
    updateOneBook: updateOneBook,
    addOneBook: addOneBook
}

export default BookService