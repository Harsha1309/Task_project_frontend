import React from 'react'
import { useNavigate } from 'react-router-dom';

import './index.css'

function IndexPage() {
    const navigate = useNavigate();

    const handleClickSignup = () => {
        navigate('/signup');
    };

    const handleClickLogin = () => {
        navigate('/login');
    };
  return (
    <div className='page'>
        <button className='my-button' onClick={handleClickLogin}>Login</button>
        <button className='my-button'onClick={handleClickSignup}>SignUp</button>
    </div>
  )
}

export default IndexPage
