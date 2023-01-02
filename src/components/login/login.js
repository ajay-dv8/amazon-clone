import React from 'react'
import './login.css'
import lLogo from '../../img/lLogo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import { signup, signin, useAuth } from '../../firebase'


const Login = () => {
    const [ loading, setLoading ] = useState(false);

    const currentUser = useAuth();
    const navigate = useNavigate();
    const emailRef  = useRef();
    const  passwordRef = useRef();

    async function handleSignUp() {
        setLoading(true);
        try {
            await signup (emailRef.current.value, passwordRef.current.value);
        } catch {
            alert("You already have an account, login !")
        }
        setLoading(false);
    }

    async function handleSignIn(){
        setLoading(true);
        try {
            await signin (emailRef.current.value, passwordRef.current.value);
            navigate('/');
        } catch {
            alert("Error !");
        }
        setLoading(false);
    }

  return (
    <div className='login'>
        <Link to='/'>
        <img className='loginLogo' src={lLogo} alt='' />
        </Link>
        <p>{currentUser?.email} Your account has been created successfully</p>
        <div className='loginCon'>
            <h1>Sign-in</h1>

            <form>
                <h5>email</h5>
                <input type='text' 
                    ref={emailRef}          
                 />

                <h5>password</h5>
                <input type='password' 
                    ref={passwordRef} 
                />

                <button className='loginSignIn'
                    type='submit'
                    onClick={handleSignIn}
                    disabled={ loading || currentUser }
                    >
                        Sign In
                </button>
            </form>

            <p>
                By Signing-in you agree to fake amazon's clones condition of use 
                & sale. Please our privacy notice, our cookie notice 
                and our interest-based ads notice
            </p>

            <button className='loginReg'
                disabled={ loading || currentUser }
                onClick={handleSignUp}>
                    Create your amazon account
            </button>
        </div>

    </div>
  )
}

export default Login;