import React from 'react'
import './main.scss'
import { FcGoogle } from 'react-icons/fc';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';
import { login } from '../../data/image';
import { Link } from 'react-router-dom';
export default function Signin() {
    return (
        <div className='signinup_main_contaier'>
            <Link to="/">
                <p>WEKNOW</p>
            </Link>

            <div className="form_main_container">
                <div className="left_container">
                    <h3 className="heading">Grow with <span>weknow</span></h3>
                    <img src={login} alt="image" />
                    <p className='first'>99% Customer Satisfaction</p>
                    <p className='secound'>Based on paid invoices</p>
                </div>
                <div className="right_container">
                    <h3 className='heading'>Sign in</h3>
                    <form>
                        <div className='input_box'>
                            <input type="email" name='email' required />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className='input_box'>
                            <input type="text" name='password' required />
                            <label htmlFor="password">Passwrod</label>
                        </div>
                        <div className="button">
                            <button>SignIn</button>
                            <p>Forgot password?</p>
                        </div>
                    </form>
                    <hr />
                    <h3>Or sign in with:</h3>
                    <div className="social_icons">
                        <FcGoogle className='login_google google' />
                        <BiLogoFacebook className='facebook' />
                        <BiLogoLinkedin className='linkedin' />
                    </div>
                    <p>Don't have an account? <Link to="/">Sign Up</Link></p>
                </div>
            </div>
        </div >
    )
}
