import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container p-3'>
            <div>
                <h2 className='form-title mt-4'>Login</h2>
                <form action="" onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="Email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p className='text-red-600'>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <br />
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to EmaJohn? <Link className='form-link' to={'/signup'}>Create an account</Link>
                </p>
                <div className='or-flex'>
                    <div>━━━━━━━━━━━</div>
                    <div>or</div>
                    <div>━━━━━━━━━━</div>
                </div>
            </div>

        </div>
    );
};

export default Login;