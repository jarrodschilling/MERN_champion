import Book from "../models/book.model.js";

async function createBook(req, res) {
    try {
        const newBook = await Book.create(req.body);
        const book = await newBook.save()
        res.json(newBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function getAllBooks(req, res) {
    try {
        const allBooks = await Book.find(); 
        res.json(allBooks);
    } catch (error) {
        console.log(error);
        res.status(400).json(error); 
    }
}

async function getOneBook(req, res) {
    try {
        const foundBook = await Book.findById(req.params.id);
        res.json(foundBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function updateOneBook(req, res) {
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
async function deleteOneBook(req, res) {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        res.json(deletedBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}


const BookController = {
    createBook: createBook,
    getAllBooks: getAllBooks,
    getOneBook: getOneBook,
    updateOneBook: updateOneBook,
    deleteOneBook:deleteOneBook
}

export default BookController