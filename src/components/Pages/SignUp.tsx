//RegistrationForm.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
// Define the shape of the form data using an interface
interface FormData {
    username: string;
    email: string;
    password: string;
    country:string;
}
function SignUp() {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        password: '',
        country: '',
    });

    // Define the handleChange function correctly with the event parameter
    // and specify the type of event as ChangeEvent<HTMLInputElement>
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Define the handleSubmit function correctly with the event parameter
    // and specify the type of event as FormEvent<HTMLFormElement>
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Add logic to handle form submission, like sending data to a server
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </label>

            <label>
                Country:
                <input
                    type="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Register</button>
        </form>
    );
}
<Link to="/SignUp">SignUp</Link>
export default SignUp;
