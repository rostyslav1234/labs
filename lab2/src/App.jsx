import React, {useEffect, useState} from 'react';
import './App.css';
const App = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState('');
    const [passwordDirty, setPasswordDirty] = useState('');
    const [emailError, setEmailError] = useState('Email can`t be empty');
    const [passwordError, setPasswordError] = useState('Password can`t be empty');
    const [formValid, setFormValid] = useState(false);


    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError("Incorrect password")
            if (!e.target.value) {
                setPasswordError("Password can`t be empty")
            }
        } else {
            setPasswordError("")
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Incorrect email')
        }
        else {
            setEmailError("")
        }

    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break;
            case 'password':
                setPasswordDirty(true)
                break;
        }
    }

    return (

        <div className='app' >
            <form>
                <center><h1>Registration</h1></center>

                {(emailDirty && emailError) && <div style={{color: 'black'}}>{emailError}</div>}
                <input onChange={e => emailHandler(e)}
                       value={email}
                       onBlur={e => blurHandler(e)}
                       name="email"
                       type="text"
                       placeholder='Enter your email'/>

                {(passwordDirty && passwordError) && <div style={{color: 'black'}}>{passwordError}</div>}
                <input onChange={e => passwordHandler(e)}
                       value={password}
                       onBlur={e => blurHandler(e)}
                       name="password"
                       type="password"
                       placeholder='Enter your password'/>
                <center><button
                    disabled={!formValid}
                    type="submit"
                >Register</button></center>
            </form>
        </div>

    );
};

export default App;