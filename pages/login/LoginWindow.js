import React from 'react';
import GoogleIcon from '../../assets/Google_G.svg';
import { compose } from 'recompose';
import { connect } from 'react-redux';

const LoginWindow = ({ handleLogin }) => {

    return (
        <div className='login-window'>
            <button className='login-google-button' type='button' onClick={handleLogin}>
                <img src={GoogleIcon} alt='Google G'/>
                <span>Login With Google</span>
            </button>
        </div>
    )   
}

const enhance = compose(
    connect()
);

export default enhance(LoginWindow);