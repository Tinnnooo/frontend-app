import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LoginInput from "../components/LoginInput";
import { asyncSetAuthSociety } from "../states/authSociety/action";

function LoginPage() {
    const dispatch = useDispatch();

    const onLogin = ({id_card_number, password}) => {
            dispatch(asyncSetAuthSociety({id_card_number, password}));
    };

    return (
        <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <LoginInput login={onLogin}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default LoginPage;