import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import "./css/Login.css";

const Register = () => {
    // Creating states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!email || !password) {
            alert("Please fill in all fields");
            return;
        }

        const data = { email, password };

        try {
            const response = await axios.post("http://localhost:5000/user/add", data);

            if (response.status === 201) {
                // Registration successful
                alert("User registered successfully!");
                navigate('/login'); // Navigate to login page
            } else {
                setError(response.data.error || "Registration failed");
            }
        } catch (error) {
            if (error.response) {
                setError(error.response.data.error || "An error occurred. Please try again.");
            } else {
                setError("Server error. Please try again later.");
            }
        }
    };

    return (
        <div className="container">
            <div className="column left-column">
                <div className="form-container">
                    <img 
                        src="https://media1.tenor.com/m/zim5fA3gYI4AAAAC/love-plants.gif" 
                        alt="About Us" 
                        className="about-us-image" 
                        style={{ marginTop: '250px' }} 
                    />
                </div>
            </div>
            <div className="column right-column">
                <div className="form-container">
                    <h2 className="login-title">Sign Up</h2>
                    <Form onSubmit={handleSubmit}>
                        <div className="login-container">
                            <div className="login-content">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label><br/><br/>
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Enter email" 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        className="login-input" 
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label><br/><br/>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Password" 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        className="login-input" 
                                    />
                                </Form.Group>

                                {error && <p className="error-message">{error}</p>}

                                <br />
                                <center>
                                    <Button 
                                        size="lg" 
                                        type="submit" 
                                        style={{ background: '#004d00', width: '100%', border: 'none' }} 
                                    >
                                        Sign Up
                                    </Button>

                                    <br/><br/>
                                    <Link to="/login">
                                        <p>Already have an account? Sign In</p>
                                    </Link>
                                </center>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;
