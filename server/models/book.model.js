import {model, Schema} from 'mongoose';
const BookSchema = new Schema(
    {
        bookTitle: {
            type: String,
            required: [true, "Book title is required!"],
            minlength: [2, "Book title must be at least 2 characters long!"],
            maxlength: [255, "Book title must be less than 255 characters long"]
        },
        bookAuthor: {
            type: String,
            required: [true, "Author name is required!"],
            minlength: [2, "Author name must be at least 5 characters long!"],
            maxlength: [255, "Author name must be less than 255 characters long"]
        },
        bookPages: {
            type: Number,
            required: [true, "Number of pages is required!"],
            min: [1, "Book must be at least 1 page long!"]
        },
        isAvailable: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);
const Book = model("Book", BookSchema);
export default Book;
