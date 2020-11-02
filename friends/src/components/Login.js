import React, { useState } from 'react';

const Login = () => {
    const [formInput, setFormInput] = useState({
        username: '',
        password: ''
    });

    const handleChanges = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
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
                value={formInput.name}
                onChange={handleChanges}></input>
            </label>
            <br/>
            <label htmlFor="password">
            password:
                <input id='password'
                name='password'
                value={formInput.password}
                onChange={handleChanges}>
                </input>
            </label>
            <br/>
            <button type='submit'>Submit</button>
        </form>)
}

export default Login;