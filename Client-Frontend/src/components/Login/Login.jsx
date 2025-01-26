import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [submissionMessage, setSubmissionMessage] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: null }); // Clear error on change
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});
        let newErrors = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Simulate API call or login logic
        setTimeout(() => {
            //In real application you will check if the user is valid or not
            setSubmissionMessage('Login successful!');
            setFormData({ email: '', password: '' });
        }, 500);

        console.log('Login submitted:', formData);
        // Here you'd typically make an API call to your backend
    };

    return (
        <>
            <div className="container">
                <h1>Login</h1>
                <form className="form" onSubmit={handleSubmit}>
                    {submissionMessage && <p className="success-message">{submissionMessage}</p>}
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="loginEmail"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="loginPassword"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="error-message">{errors.password}</p>}
                    </div>
                    <button type="submit">Login</button>
                    <p>Not a user? <Link to ="/SignUp">Sign Up</Link> </p>
                </form>
            </div>
        </>
    );
};

export default Login;