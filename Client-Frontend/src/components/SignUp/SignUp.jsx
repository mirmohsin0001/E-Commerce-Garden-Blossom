import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router';


const SignUp = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '', // Optional: For password confirmation
    });
    const [errors, setErrors] = useState({});
    const [submissionMessage, setSubmissionMessage] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: null }); // Clear error on change
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({}); // Clear previous errors

        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        if(!formData.confirmPassword){
            newErrors.confirmPassword='Confirm Password';
        }
        if (formData.confirmPassword && formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Simulate API call or form submission
        setTimeout(() => {
            setSubmissionMessage('Sign up successful!');
            setFormData({ email: '', password: '', confirmPassword: '' }); // Clear form
        }, 500); //Simulate a delay


        console.log('Form submitted:', formData);
        // Here you would typically make an API call to your backend
    };

    return (
        <>
            <div className="container">


                <h1>Sign Up</h1>
                <form className='signup-form' onSubmit={handleSubmit}>
                    <div>
                        {submissionMessage && <p className='.success-message' >{submissionMessage}</p>}
                    </div>

                    <div>
                        <label className='label' htmlFor="email">Email</label><br />
                        <input
                            type="email"
                            id="signupEmail"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error-message" >{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label><br />
                        <input
                            type="password"
                            id="signupPassword"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="error-message">{errors.password}</p>}
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label><br />
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        {errors.confirmPassword && (<p className="error-message" >{errors.confirmPassword}</p>)}
                    </div>
                    <button type="submit">Sign Up</button>
                    <p>Already a user? <Link to="/Login">Login</Link></p>
                </form>
            </div>
        </>
    );
};

export default SignUp;