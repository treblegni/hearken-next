import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { login } from '../../flux/actions/authActions';
import { isEmpty } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { withLastLocation } from 'react-router-last-location';
import LoginWindow from './LoginWindow';

const LoginPage = ({auth, error, lastLocation, handleLogin}) => {
    // Check if users is authenticated, if not redirect to previous location or home
    if (!isEmpty(auth)) {
        const redirectPath = lastLocation ? lastLocation : '/';
        return <Redirect to={redirectPath}/>
    }

    return (
        <div className="login">
            <LoginWindow handleLogin={handleLogin}/>
        </div>
    )   
}

const enhance = compose(
    connect(
        state => ({
            auth: state.firebase.auth,
        }), 
        dispatch => ({
            handleLogin: () => dispatch(login()),
        })
    ),
    withLastLocation
);

export default enhance(LoginPage);