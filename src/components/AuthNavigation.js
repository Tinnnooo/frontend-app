import React from "react";
import { Link } from "react-router-dom";

function AuthNavigation({ authSociety, signOut }) {

    const {name} = authSociety;

        return (
            <>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
                    <div className="container">
                        <Link to="/" className="navbar-brand">Vaccination Platform</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">{name}</Link>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-link text-secondary" type="button" onClick={signOut}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
}

export default AuthNavigation;