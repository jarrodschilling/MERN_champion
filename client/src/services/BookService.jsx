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

function updateOneBook(id, bookState) {
    return http.put(`/books/${id}`, bookState)
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

function getOneBook(id) {
    return http.get(`/books/${id}`)
        .then(res => res.data)
        .catch(err => {
            throw err;
        })
}

function deleteOneBook(id) {
    return http.delete(`/books/${id}`)
        .then(res => res.data)
        .catch(err => {
            throw err;
        })
}

const BookService = {
    getAllBooks: getAllBooks,
    updateOneBook: updateOneBook,
    addOneBook: addOneBook,
    getOneBook: getOneBook,
    deleteOneBook: deleteOneBook
}

export default BookService