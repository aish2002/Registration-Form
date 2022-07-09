import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import {Form, Button,Row,Col} from 'react-bootstrap';

function App() {
  const [credentials, setCredentials] = useState({
    name: "",
    college: "",
    year:"",
    email: "",
    phone:"",
  });
  const[error,seterror]=useState("");
  const [validated, setValidated] = useState(false);
  const handleChange =(e)=>{
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  }

  const handleSignIn=(event)=>{
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }

  return (
    
     
    <Row className="justify-content-center align-items-center login-signup  mt-5 pt-5 ml-0">
    <span className="text-center ml-5 pl-5 head f-style">Register here to avail student discount</span>

    <Col md="4" xs="6" className="align-items-center column" >
        
          <Form  noValidate className="mt-4 input"  validated={validated} onSubmit={handleSignIn}>
            <Form.Group controlId="valid1" >
          <Form.Control className="input"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              required
            />
             <Form.Control.Feedback type="invalid">
            Please enter your name.
          </Form.Control.Feedback>
             </Form.Group>
            <br />
            <Form.Group controlId="valid2">
            <Form.Control className="input"
              placeholder="College Name"
              name="College"
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
            Please enter your college name.
          </Form.Control.Feedback>
             </Form.Group>
            <br />
            <Form.Group controlId="valid3">
            <Form.Control className="input"
              placeholder="Year of Passing"
              name="year"
              
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
            Please enter valid year of passing.
          </Form.Control.Feedback>
             </Form.Group>

            <br />
            <Form.Group controlId="valid4">
            <Form.Control className="input"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              required
            />
            
            <Form.Control.Feedback type="invalid">
            Please provide a valid email id.
          </Form.Control.Feedback>
          </Form.Group>
          <br/>
          
          <Form.Group controlId="valid5">
            <Form.Control
              placeholder="Phone number"
              name="phone"
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
            Please enter valid phone number.
          </Form.Control.Feedback>
             </Form.Group>
            <br />
           
            <div className="d-grid ">
            <Button   variant="primary" type="submit" block>
              Sign Up ➜
            </Button>
          
            <div className="d-flex justify-content-center fin mt-3 pt-3">Already a member? 
               <a href="" className="ml-3 "> Sign in</a> 
            </div>
            </div>
          </Form>
          </Col>
      </Row>
      
      
  );
}

export default App;
