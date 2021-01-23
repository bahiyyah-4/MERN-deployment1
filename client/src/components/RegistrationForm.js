import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from "@reach/router"

export default function RegistrationForm() {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    });


    function handleChange(e) {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        axios.post('http://localhost:8000/api/user', formState, { withCredentials: true })
            .then(() => navigate('/pirates'))
            .catch(console.log)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>{" "}
                    <input
                        name="firstName"
                        value={formState.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Last Name:</label>{" "}
                    <input
                        name="lastName"
                        value={formState.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>{" "}
                    <input
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password:</label>{" "}
                    <input
                        name="password"
                        type="password"
                        value={formState.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password Confirmation:</label>{" "}
                    <input
                        name="passwordConfirmation"
                        type="password"
                        value={formState.passwordConfirmation}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}