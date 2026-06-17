import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Navbar() {

    const [showNavBar, setShowNavBar] = useState(false);

    // useLocation will return an array of two elements
    // the first element is the current URL of the browser
    // the secodn element is a function that let changes the URL
    const [location] = useLocation();

    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="#">E-Shop</a>
            <button
                className="navbar-toggler"
                type="button"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => {
                    setShowNavBar(!showNavBar);
                }}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${showNavBar ? "show" : ""}`} id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className={`nav-link ${location === "/" ? "active" : ""}`} aria-current="page" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${location === "/products" ? "active" : ""}`}
                            aria-current="page"
                            href="/products">
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${location === "/login" ? "active" : ""}`} href="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${location === "/register" ? "active" : ""}`} href="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${location === "/cart" ? "active" : ""}`} href="/cart">Cart</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}