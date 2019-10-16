import React from "react"
import { Link } from "gatsby"


import SEO from "../components/seo";
import Navbar from "../components/heading/Navbar.js";
import Footer from '../components/footer/Footer.js';

import './style.scss';

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <Navbar />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Footer />
  </>
)

export default SecondPage
