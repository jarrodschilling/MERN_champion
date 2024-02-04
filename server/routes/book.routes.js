import { Router } from "express";
import BookController from "../controllers/book.controller.js";
const router = Router();

router.route('/books/add')
// CREATE NEW BOOK
    .post(BookController.createBook)

router.route('/books')
// GET ALL BOOKS
    .get(BookController.getAllBooks)

router.route('/books/:id')
// GET BOOK BY ID
    .get(BookController.getOneBook)
// DELETE BOOK BY ID
    .delete(BookController.deleteOneBook)
// UPDATING BOOK
    .put(BookController.updateOneBook)



export default router;