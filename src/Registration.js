import React, { Component, useState } from 'react'
import {Container, Form, Card, Button} from 'react-bootstrap';
import styled from 'styled-components'


const Styles = styled.div`
    .cards{
        margin : 5px;
        padding : 28px;
    }
    .hideshow{
        font-size: 12px;
        font-weight: 900;
        cursor: pointer;
        color: white;
        padding: 4px 8px;
        background: grey;
        border-radius: 4px;
        
    }
    .err{
        color:red;
    }
`



export default class Registration extends Component {
    constructor(props){
        super(props);
        this.state={
            type:'input',
            firstname:"",
            lastname:"",
            email:"",
            password:"",
            confirmpassword:"",
            agree: false 
            
            
        }
        
     
    }

    showHide=(e)=>{
        e.preventDefault();
        e.stopPropagation();
        this.setState({
          type: this.state.type === 'input' ? 'password' : 'input'
        })  
      }

    handleFirstName = (e) =>{
        this.setState({
            firstname:e.target.value
        });

    }

    handleLastName = (e) => {
        this.setState({
            lastname:e.target.value
        })
    }

    handleEmail = (e) => {
        this.setState({
            email:e.target.value
        })

    }

    handlePassword = (e) => {
        this.setState({
            password:e.target.value
        })
    }
    handleConfirmPassword = (e) => {
        this.setState({
            confirmpassword:e.target.value
        })
    }

    //onCheckedChange = (e) => {
    //   this.setState({
    //        [e.target.name] : e.target.checked  
    //    })
   // }
   onCheckedChange =() => {
        this.setState({agree: !this.state.agree});
        
   } 
   

   validate = ()=>{
    let firstnameError = "";
    let lastnameError = "";
    let emailError = "";
    let passwordError = "";
    let confirmpasswordError = "";
    let agreeError = "";

    if(! this.state.firstname){
        firstnameError = "First name cannot be blank !"
    }
    if (! this.state.lastname){
        lastnameError = "Last name cannot be blank !"
    }
    if (!this.state.email){
        emailError = "Email cannot be blank !"
    }
    if (!this.state.password){
        passwordError = "Password cannot be blank !"
    }
    
    if (this.state.password != this.state.confirmpassword) {
        confirmpasswordError = "Password doesnot match !"
    }
    
    if (!this.state.agree){
        agreeError = "Please agree our terms and conditions !"
    }

    if (firstnameError || lastnameError || emailError || passwordError || agreeError || confirmpasswordError ){
        this.setState({firstnameError, lastnameError, emailError, passwordError, agreeError, confirmpasswordError})
        return false;
    }
    return true;
    
}
    

    handleSubmit = (e) => {
        e.preventDefault();

       const Valid = this.validate();
     
       
       if (Valid){
           console.log(this.state);
        alert (JSON.stringify(this.state))
       }
        
    }
    
    
    

    render() {
        return (
            <Styles>
            <Container>
                <h1 className="text-center m-5">Registration form</h1>
                <Card className="cards">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label>First Name :</Form.Label>
                            <Form.Control type="text" 
                            name="firstname" 
                            placeholder="Your FirstName"
                            onChange={this.handleFirstName}
                            /> 
                            <Form.Text className="err">{ this.state.firstnameError }</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last Name :</Form.Label>
                            <Form.Control type="text" 
                            name="lastname" 
                            placeholder="Your LastName"
                            onChange={this.handleLastName}
                            /> 
                            <Form.Text className="err">{ this.state.lastnameError }</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email Address :</Form.Label>
                            <Form.Control type="email" 
                            name="email" 
                            placeholder="Your Email Address"
                            onChange={this.handleEmail}
                            /> 
                            <Form.Text className="err">{ this.state.emailError }</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password :</Form.Label>
                            <Form.Control type={this.state.type} 
                            name="password" 
                            placeholder="******"
                            onChange={this.handlePassword}
                            /> 
                            <span className="hideshow" onClick={this.showHide}>
                                {this.state.type === 'input' ? 'HIDE' : 'SHOW'}
                            </span>
                            <Form.Text className="err">{ this.state.passwordError}  {this.state.confirmpasswordError } </Form.Text>
                            
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm Password :</Form.Label>
                            <Form.Control type="password" 
                            name="password" 
                            placeholder="******"
                            onChange={this.handleConfirmPassword}
                            /> 
                            <Form.Text className="err">{ this.state.passwordError}   {this.state.confirmpasswordError}</Form.Text>
                        </Form.Group>
                        <Form.Group>
                        <Form.Check type="checkbox" label="I agree your terms and condition" 
                        
                        checked={this.state.agree}
                        onChange={this.onCheckedChange}
                        />
                        <Form.Text className="err">{this.state.agreeError }</Form.Text>
                        </Form.Group>
                        <Form.Group className="text-center">
                            <Button type="submit" className="btn btn-success">Submit</Button> 
                        </Form.Group>
                    </Form>

                </Card>
                
            </Container>
            </Styles>
        )
    }
}



