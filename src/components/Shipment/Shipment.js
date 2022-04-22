import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }
    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = { name, email, address, phone }
        console.log(shipping);
    }
    return (
        <div className='form-container p-3'>
            <div>
                <h2 className='form-title mt-4 mb-4'>Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input className='text-slate-400' value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="number" name="number" id="" required />
                    </div>

                    {/* Error message */}
                    <p style={{ color: 'red' }}>{error}</p>

                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
                <p>
                    Already have an account? <Link className='form-link' to={'/login'}>Login</Link>
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

export default Shipment;