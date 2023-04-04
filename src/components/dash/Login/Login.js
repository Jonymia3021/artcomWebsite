import React from 'react';
import login from './login.css';

const Login = () => {
    return (
        <section id="login">
            <div className="container">
                <form>
                    <p><strong>Log In as an Admin</strong></p>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" name='email' />
                    <br /><br />
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name='password' />
                    <br /><br />
                    <input type="checkbox" name="remember" id="" />
                    <label htmlFor="remember">Remember me</label>
                    <br /><br />
                    <input type="submit" value="Log In" />
                </form>
            </div>
        </section>
    );
};

export default Login;