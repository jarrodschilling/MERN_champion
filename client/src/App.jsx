import{BrowserRouter, Routes, Route, useParams} from "react-router-dom"
import Home from './views/Home'
import Error from './views/Error'
import BookDetails from './views/BookDetails'
import AddBook from "./views/AddBook"
import BookUpdate from "./views/BookUpdate"
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/:id/details" element={<BookDetails />} />
          <Route path="/create" element={<AddBook />} />
          <Route path="/books/:id/update" element={<BookUpdate />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
