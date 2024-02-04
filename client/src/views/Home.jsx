import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Display from "./Display";
import NavBar from "../components/NavBar";
import axios from 'axios';

const Home = (props) => {
    const pageTitle = "Book Catalog"

    return(
        <div>
            <NavBar pageTitle={pageTitle} />
            <Display />
        </div>
    )
}

export default Home