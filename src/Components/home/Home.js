 
import React, { Component ,useState,useEffect} from 'react'
import Registration from '../Registration/Registration'
import './home.css'
 
import { Col,Row,Button,Container , Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import {Link} from 'react-router-dom'
 import Footer from '../Layout/Footer/Footer'
import { useFormik } from 'formik'

import { setUserData } from '../Slices/RegSlice'
import { useSelector} from 'react-redux'


export default function Home() {

    const validate_email=RegExp("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}");
    const validate_password=RegExp("[A-Z0-9a-z._%+-]{8,64}");

        
const history=useHistory();

const selector=useSelector(state=>state.userdata)
 

const redirectToReg=()=>{
history.push('/Registration')
}


let [UserData,setUserData]=useState({});

const validateSubmit=(ContactData)=>{

    const errors={};
 if (!ContactData.email)
 {
        errors.email="Email Can not be blank"
 }
 else if( !validate_email.test(ContactData.email))
 {
     errors.email="REGEXP ERR"
 
 }
 if (!ContactData.pass)
 {
        errors.pass="Password Can not be blank"
 }
 else if( ContactData.pass.length<5)
 {
     errors.pass="password too short. should be at least 5 characters"
 
 }



 return errors
}




const formik=useFormik({
    initialValues:{
            email:"",
            pass:""

    },
    validate:validateSubmit,
    onSubmit:(values)=>{
            console.log(values);
 


    }


});
 





 



    return (
        <div style={{width:"100%"}}>
 
 
            <Row className="Home_Row">
<Col className="Home_Row_col1" sm={12} lg={4} md={4} > </Col>
<Col className="Home_Row_col2" sm={12} lg={8} md={8}>
<Container className="Home_Row_col2_Container" >  <h2> Welcome Back</h2>
<p><span className="Home_Row_col2_Container_span">Sign in to your account</span></p>
<Form onSubmit={formik.handleSubmit}>
<Form.Group className="mb-3" controlId="email">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="name@example.com" style={{height:"60px"}} onChange={formik.handleChange}/>
</Form.Group>
<p>
    {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : ""}
</p>
<Form.Group className="mb-3" controlId="pass">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" style={{height:"60px"}} onChange={formik.handleChange}/>
</Form.Group>
<p>
    {formik.touched.pass && formik.errors.pass ? <span>{formik.errors.pass}</span> : ""}
</p>


<Button variant="outline-success" type="submit" className="Home_Row_col2_Container_Form_ButtonSubmit">
Submit
</Button>
{/* <p/> <span onClick={redirectToReg}> Or, Sign up here </span>  */}
{/* <p/> Or, <Link to='/Registration' style={{textDecoration:"none"}}> Sign up here </Link>  */}
<p/> Or, <Link to='/RegForm1' style={{textDecoration:"none"}}> Sign up here </Link> 
</Form>

</Container>
</Col>

</Row>
<Footer/>
        </div>
    )
}
