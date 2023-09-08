import React from 'react'
import './main.scss';
import { FcGoogle } from 'react-icons/fc';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';
import { signup } from '../../data/image'
import { Link } from 'react-router-dom';


function Signup() {

    return (
        <div className='signinup_main_contaier'>
            <Link to="/">
                <p>WEKNOW</p>

            </Link>
            <div className="form_main_container">
                <div className="left_container">
                    <h3 className="heading">Grow with <span>weknow</span></h3>
                    <img src={signup} alt="image" />
                    <p className='first'>99% Customer Satisfaction</p>
                    <p className='secound'>Based on paid invoices</p>
                </div>
                <div className="right_container">
                    <h3 className='heading'>Sign up</h3>
                    <div className='reverse'>
                        <form>
                            <div className='input_box'>
                                <input type="text" name='name' required />
                                <label htmlFor="name">Username</label>
                            </div>
                            <div className='input_box'>
                                <input type="email" name='email' required />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className='input_box'>
                                <input type="text" name='password' required />
                                <label htmlFor="password">Passwrod</label>
                            </div>
                            <div className='input_box'>
                                <input type="text" name='conform_password' required />
                                <label htmlFor="conform_password">Conform Password</label>
                            </div>
                            <div className="button">
                                <button>SignUp</button>
                            </div>
                        </form>
                        <h3>Or sign in with:</h3>
                        <div className="social_icons">
                            <FcGoogle className='google' />
                            <BiLogoFacebook className='facebook' />
                            <BiLogoLinkedin className='linkedin' />
                        </div>
                    </div>

                    <p>Don't have an account? <Link to="/login">Sign In</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Signup;