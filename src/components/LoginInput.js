import React from "react";
import useInput from '../hooks/useInput';

const handleSubmit = (event) => {
    event.preventDefault();
}

function LoginInput({ login, error }) {
    const [id_card_number, onId_card_numberChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    

    return (
        <form className="card card-default" onSubmit={handleSubmit}>
            <div className="card-header">
                <h4 className="mb-0">Login</h4>
            </div>

            

            <div className="card-body">
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
                <div className="form-group row align-items-center">
                    <div className="col-4 text-right">ID Card Number</div>
                    <div className="col-8"><input type="text" value={id_card_number} className="form-control" onChange={onId_card_numberChange}/></div>
            </div>

            <div className="form-group row align-items-center">
                <div className="col-4 text-right">Password</div>
                <div className="col-8"><input type="password" value={password} className="form-control" onChange={onPasswordChange}/></div>
            </div>

            <div className="form-group row align-items-center mt-4">
                <div className="col-4"></div>
                <div className="col-8"><button className="btn btn-primary" onClick={() => login({id_card_number, password})}>Login</button></div>
             </div>
            </div>
        </form>
    )
}

export default LoginInput;