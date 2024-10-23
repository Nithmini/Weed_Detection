import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import axios from 'axios'; // Make sure axios is imported
import "./css/Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!email || !password) {
            alert("Please fill in all fields");
            return;
        }

        const data = { email, password };

        try {
            const response = await axios.post("http://localhost:5000/user/log", data);

            if (response.status === 200) {
                alert("Sign in successfully");
                navigate('/dashboard'); // Modify the path based on your routing
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError("Invalid Email or Password");
            } else {
                setError("Something went wrong. Please try again.");
            }
        }
    };

    return (
        <div className="container">
            <div className="column left-column">
                <div className="form-container">
                    <h2 className="login-title">Sign In</h2>
                    <Form onSubmit={handleSubmit}>
                        <div className="login-container">
                            <div className="login-content">
                                <br /> <br />

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label><br /><br />
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Enter email" 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        className="login-input" 
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label><br /><br />
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
                                        Sign In
                                    </Button>

                                    <br /><br />
                                    <Link to="/register">
                                        <p>Don't have an account? Sign up</p>
                                    </Link>
                                </center>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
            <div className="column right-column">
                <div className="form-container">
                    <div>
                        <img 
                            src="https://res.cloudinary.com/dorcq99nr/image/upload/v1652809168/AgriProducts/sign_up_t2t08q.gif" 
                            alt="About Us" 
                            className="about-us-image" 
                            style={{ marginTop: '250px' }} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
