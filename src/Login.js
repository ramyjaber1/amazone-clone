import { Link ,useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { auth  } from './firebase';
import './Login.css';

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        //some fancy firebase login ... 
        auth.signInWithEmailAndPassword(email,password).then(auth => {
            history.push('/')
        })
        .catch(error =>alert(error.message))
    }
    const register = e => {
        e.preventDefault();
        //some fancy firebase register 
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            //if successfully created a user with email and password
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error =>alert(error.message))
        //do some fancy firebase Register
    }
    return (
        <div className="login">
            <Link to ='/'>
               <img 
                    className="login__logo"
                    src= "https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?resize=740%2C204" 
                    alt="" 
                />
            </Link>
            <div className="login__container" >
                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input 
                        type="text"
                        value={email}
                        onChange = {e =>setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input 
                        type="password"
                        value={password}
                        onChange = {e =>setPassword(e.target.value)}
                     />
                     <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
                     <p>
                         By singing-in you agree to Amazon's Conditions
                         Of use & Sale . Please see our Privacy Notice , our Cookies
                         Notice and our interest-Based Ads Notice.

                     </p>
                     <button type="submit" onClick={register} className="login__registerButton"> Create you Amazon Accout</button>
                </form>
            </div>
        </div>
    )
}

export default Login
