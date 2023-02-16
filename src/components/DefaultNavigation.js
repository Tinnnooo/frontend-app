import React from "react";
import { Link } from "react-router-dom";

function DefaultNavigation({ authSociety }) {
        return (
            <>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
                    <div className="container">
                        <Link to="/" className="navbar-brand">Vaccination Platform</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </>
        )
}

export default DefaultNavigation;