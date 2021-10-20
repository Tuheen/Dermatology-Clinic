import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';

const Login = () => {
    const { setIsLoading, signInUsingGoogle, handleEmailChange, handlePasswordChange, handleRegistration, toggleLogin, isLogIn } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .finally(() => setIsLoading(false));
        }

    return (
        <div>
            <div>
                <form onSubmit={handleRegistration}>
                    <h3 className="text-primary">Please {isLogIn ? 'Login' : 'Register'}</h3>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder="Email" required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" placeholder="Password" required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-2">Checkbox</div>
                        <div className="col-sm-10">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                            Already Registerd?
                            </label>
                        </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">{ isLogIn ? 'Login' : "Register"}</button>
                        </div>
                    </div>
                </form>
            </div>
            
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign-in</button>
        </div>
    );
};

export default Login;