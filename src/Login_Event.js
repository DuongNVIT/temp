import React from 'react'
import imgLogin from "./login-image.png";

function Login_Event() {
    return (
        <React.Fragment>
            <div className="frame-1">
                <div className="frame-1-content">
                    <p className="content-heading">We’ve missed you!</p>
                    <p className="content-heading-text">More than 150 questions are waiting for your wise suggestions!</p>
                    <div className="content-login">
                        <div className="login-input">
                            <div className="login-input-field">
                                <label for="username-input">Username</label>
                                <input type="text" name="username" id="username-input" />
                            </div>
                            <div className="login-username-validation login-input-validation login-input-validation--checked">
                                <i className="fas fa-check"></i>
                            </div>
                        </div>
                        <div className="login-input">
                            <div className="login-input-field">
                                <label for="password-input">Password</label>
                                <input type="password" name="password" id="password-input" />
                            </div>
                            <div className="login-password-validation login-input-validation login-input-validation--unchecked">
                                <i className="fal fa-times-circle"></i>
                            </div>
                        </div>
                        <div className="login-password-validation-text login-input--error">Wrong password!</div>
                        <button type="button" className="login-button">Login</button>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={imgLogin} alt="Login image" />
            </div>
        </React.Fragment>
    )
}

export default Login_Event