import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formInput, setFormInput] = useState({
        credentials: {username: '',
        password: ''}
    });

    const handleChanges = (e) => {
        setFormInput({
            ...formInput, 
                credentials: {
                    ...formInput.credentials,
            [e.target.name]: e.target.value
        }
    })

    };

    const login = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/login', formInput.credentials)
            .then((res) => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/friendslist');
            })
            .catch((err) => {
                console.log(err);
            })
    };

    console.log(formInput)

    return (
        <form>
            <h1>Login Here</h1>
            <label htmlFor='username'>
            username:
                <input id='username'
                name='username'
                value={formInput.credentials.username}
                onChange={handleChanges}></input>
            </label>
            <br/>
            <label htmlFor="password">
            password:
                <input id='password'
                name='password'
                value={formInput.credentials.password}
                onChange={handleChanges}>
                </input>
            </label>
            <br/>
            <button type='submit'>Submit</button>
        </form>)
}

export default Login;