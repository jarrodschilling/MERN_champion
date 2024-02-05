
const handleChange = (e) => {
    if (e.target.name === "bookTitle") {
        let newValue = e.target.value
        setBookState((prevState) => ({
            ...prevState,
            [e.target.name]: newValue
        }))
        let errorMsg = ''
        if (newValue) {
            if (newValue.length < 2) {
                errorMsg = "Front-End: A book's title must be at least two characters long!"
            } else if (newValue.length > 255) {
                errorMsg = "Front-End: A book's title must be less than 255 characters long"
            }
        } else {
            errorMsg = "Front-end: Book Title is required"
        }
        setFormErrors({...formErrors, bookTitle: errorMsg})
    }
    else if (e.target.name === "bookAuthor") {
        let newValue = e.target.value
        setBookState((prevState) => ({
            ...prevState,
            [e.target.name]: newValue
        }))
        let errorMsg = ''
        if (newValue) {
            if (newValue.length < 2) {
                errorMsg = "Front-End: A book's Author's name must be at least five characters long!"
            } else if (newValue.length > 255) {
                errorMsg = "Front-End: A book's Author's name must be less than 255 characters long"
            }
        } else {
            errorMsg = "Front-end: A book's author's name is required!"
        }
        setFormErrors({...formErrors, bookAuthor: errorMsg})
    }
    else if (e.target.name === "bookPages") {
        let newValue = e.target.value
        setBookState((prevState) => ({
            ...prevState,
            [e.target.name]: newValue
        }))
        let errorMsg = ''
        if (newValue) {
            if (newValue == 0) {
                errorMsg = "Front-End: A book must have some pages!"
        } 
        // else {
        //     errorMsg = "Front-End: A book must have some pages!"
        // }
        setFormErrors({...formErrors, bookPages: errorMsg})
        }
    }
    else {
        let newValue = e.target.checked
        setBookState((prevState) => ({
            ...prevState,
            [e.target.name]: newValue
        }))
    }
}

export default handleChange