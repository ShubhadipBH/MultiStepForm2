import React,{useState,useEffect} from 'react'
import { Col,Row,Button,Container , Form, FormFloating } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
// import {Link} from 'react-router-dom'
import {useFormik,Field} from 'formik'
import './Registration.css'

// import RegForm1 from './RegForm1'
// import RegForm2 from './RegForm2'

import { setUserData } from '../Slices/RegSlice'
import {setTestSliceData} from '../Slices/TestSlice'
import { useDispatch ,useSelector} from 'react-redux'


export default function Registration() {
   
  // let ClickCounter=0
let history=useHistory()
  let [ClickCounter,setClickCounter]=useState(0)

const dispatch=useDispatch()
 
  let [localData,setlocalData]=useState({
  
  })
  
 
 
let validateData=(ContactData)=>{
  // console.log(ContactData);
  
  const errors={};
  if(!ContactData.fname){
    errors.fname="Name Can Not be Blank!"
  }
  if(!ContactData.lname){
    errors.lname="Name Can Not be Blank!"
  }

  if (!ContactData.email)
  {
         errors.email="Email Can not be blank"
  }
  
  if (!ContactData.pass)
  {
         errors.pass="Password Can not be blank"
  }
  else if( ContactData.pass.length<5)
  {
      errors.pass="password too short. should be at least 5 characters"
  
  }

  if(isNaN(ContactData.phone)){
    errors.phone="Phone number must be numerical"
  }
 else if(ContactData.phone.length<10)
 {
  errors.phone="Phone number must at least 10 digits"
 }


 ///////////////////////////////////////////////////////////
// if(!ContactData.state)
// {
//   errors.state="State Name Can not be blank"
// }
// if(!ContactData.city)
// {
//   errors.city="City Name Can not be blank"
// }
// if(!ContactData.zip)
// {
//   errors.zip="Zipcode Can not be blank"
// }
// else if(isNaN(ContactData.zip)==true)
// {
//   errors.zip="Zipcode must be a number"
// }
////////////////////////////////////////////////////////////////
 
 
  return errors
}

 


  let selector=useSelector(state=>state.TestReducer)
//userdata is from Store.js . IT is a reducer name








 




 
  const formik=useFormik({
    initialValues:{
            fname:"",
            lname:"",
            email:"",
            phone:"",
            pass:"",
            state:"",
            city:"",
            zip:"",
            formCounter:"1"
           
    },
    validate:validateData, 
    onSubmit:(values)=>{
  //  console.log("value");
    
 
  
      // dispatch(setUserData(values))
      dispatch(setTestSliceData(values))
      
    }
});
 

 
let[AbuttonStyle,setAButtonStyle]=useState("green")
let[BbuttonStyle,setBButtonStyle]=useState("")
let[CbuttonStyle,setCButtonStyle]=useState("")

let[AloaderDiv,setAloaderDiv]=useState("transparent")
let[BloaderDiv,setBloaderDiv]=useState("transparent")
let[CloaderDiv,setCloaderDiv]=useState("transparent")


let [DisabledTrue,setDisabledTrue]=useState("false")
let Goto=(val)=>{
   setClickCounter(val)
  
//  console.log(val);
  formik.setErrors({})
if(val==1)
{
setBButtonStyle("green")
setBloaderDiv("")
setAloaderDiv("")
setCButtonStyle(" ")
setCloaderDiv("transparent")
setDisabledTrue("false")
}
else if(val==2){
setCButtonStyle("green")
setCloaderDiv("")

}
else if (val==0){
setAButtonStyle("green")
setAloaderDiv("")
setBButtonStyle("")
setBloaderDiv("transparent")
setCButtonStyle("")
setCloaderDiv("transparent")
} 

}


  return (
    
        <div className="Registration"> 
<Container style={{marginBottom:"0%"}}>
  <Row style={{marginTop:"50px", padding:"0px"}}>
    <Col><Button onClick={()=>{Goto(0)}} variant="outline-secondary" style={{backgroundColor:"", borderColor:AbuttonStyle}}>Step 1</Button></Col>
    <Col><Button onClick={()=>{Goto(1)}} variant="outline-secondary" style={{backgroundColor:"", borderColor:BbuttonStyle}}>Step 2</Button></Col>
    <Col><Button onClick={()=>{Goto(3)}} variant="outline-secondary" style={{backgroundColor:"", borderColor:CbuttonStyle}}>Step 3</Button></Col>
  </Row>
  <Row>
<Col><div className="Step2Step" style={{backgroundColor:AloaderDiv}}> </div></Col>
<Col><div className="Step2Step" style={{backgroundColor:BloaderDiv}}> </div></Col>
<Col><div className="Step2Step" style={{backgroundColor:CloaderDiv}}> </div></Col>
</Row>

</Container>
    {ClickCounter==0? 
  
    <Container className="Registration_Container"> 
            <Row className="Registration_Container_Row">
      
                 <Form onSubmit={formik.handleSubmit}>  


  <Form.Group className="mb-3" controlId="fname">
    <Form.Label>Firstname</Form.Label>
    <Form.Control type="text" placeholder="Enter Firstname" onChange={formik.handleChange} value={selector.fname}   />
  </Form.Group>
  <p className="errorFontSize">
    {formik.touched.fname && formik.errors.fname ? <span>{formik.errors.fname}</span> : ""}
</p>

  <Form.Group className="mb-3" controlId="lname">
    <Form.Label>Lastname</Form.Label>
    <Form.Control type="text" placeholder="Enter Lastname" onChange={formik.handleChange} value={selector.lname}  />
  </Form.Group>
  <p className="errorFontSize">
    {formik.touched.lname && formik.errors.lname ? <span>{formik.errors.lname}</span> : ""}
</p>

  <Form.Group className="mb-3" controlId="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" onChange={formik.handleChange} value={selector.email}  />
  </Form.Group>
  <p className="errorFontSize">
    {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : ""}
</p> 

  <Form.Group className="mb-3" controlId="phone">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="text" placeholder="Enter Phone number"  onChange={formik.handleChange} value={selector.phone} />
 
  </Form.Group>
  <p className="errorFontSize">
    {formik.touched.phone && formik.errors.phone ? <span>{formik.errors.phone}</span> : ""}
</p>

  <Form.Group className="mb-3" controlId="pass">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={formik.handleChange}  value={selector.pass} />
  
  </Form.Group>
  <p className="errorFontSize">
    {formik.touched.pass && formik.errors.pass ? <span>{formik.errors.pass}</span> : ""} 
</p>


  <Button className="BtnSubmit" variant="outline-success" type="submit" >
    Submit
  </Button>

</Form> 

 
<Button className="BtnNext" variant="outline-primary" type="click" onClick={()=>{Goto(1)}}     >
    Next
  </Button>
  <Button className="BtnHome" variant="outline-warning" type="click" onClick={()=>{history.push('/')}}>
    Go Back To Home
  </Button>  
            </Row>

            </Container>
 

            
  : 
<>
{ClickCounter==1 ? 

<div> 
    <div >

                
<Container className="Registration_Container"> 
<Row className="Registration_Container_Row">
<h1>Step 2</h1>
<Form onSubmit={formik.handleSubmit}>  


<Form.Group className="mb-3" controlId="state">
<Form.Label>State</Form.Label>
{/* <Form.Control type="text" placeholder="Enter State" onChange={formik.handleChange} value={selector.state}/> */}
<Form.Control type="text" placeholder="Enter State" onChange={formik.handleChange}  />
</Form.Group>
<p className="errorFontSize">
    {formik.touched.state && formik.errors.state ? <span>{formik.errors.state}</span> : ""}
</p>

<Form.Group className="mb-3" controlId="city">
<Form.Label>City</Form.Label>
{/* <Form.Control type="text" placeholder="Enter City" onChange={formik.handleChange}  value={selector.city}/> */}
<Form.Control type="text" placeholder="Enter City" onChange={formik.handleChange}  />
</Form.Group>
<p className="errorFontSize">
    {formik.touched.city && formik.errors.city ? <span>{formik.errors.city}</span> : ""}
</p>


<Form.Group className="mb-3" controlId="zip">
<Form.Label>Zipcode</Form.Label>
{/* <Form.Control type="text" placeholder="Enter Zipcode" onChange={formik.handleChange}  value={selector.zip} /> */}
<Form.Control type="text" placeholder="Enter Zipcode" onChange={formik.handleChange}  />
</Form.Group>
<p className="errorFontSize">
    {formik.touched.zip && formik.errors.zip ? <span>{formik.errors.zip}</span> : ""}
</p>

<Button className="BtnSubmit" variant="outline-success" type="submit"  >
Submit
</Button>


</Form> 
<Button className="BtnNext" variant="outline-primary" type="click" onClick={()=>{Goto(0)}} >
    Prev
  </Button>
  <Button className="BtnNext" variant="outline-primary" type="click" onClick={()=>{Goto(2)}} >
    Next
  </Button>
  <Button className="BtnHome" variant="outline-warning" type="click" onClick={()=>{history.push('/')}}  >
Go Back To Home
</Button>  
</Row>
</Container>

</div>
 


  </div> :
  
  <div>
 
 <Container className="Registration_Container">   
 <div className="Registration_Container_ShowDetails">


  <span>Details Taken</span>

<p/>   <Button variant="outline-primary" onClick={()=>alert("Data Saved"+ selector.fname)}> Submit</Button>

<div style={{marginTop:"40px" }}>
<p> FirstName: {selector.fname}</p>
<p> LastName: {selector.lname}</p>
<p> Email: {selector.email}</p>
<p> Phone: {selector.phone}</p>
<p> City: {selector.city}</p>
<p> State: {selector.state}</p>
<p> Zipcode: {selector.zip}</p>
</div>



</div>
<Button className="BtnNext" variant="outline-primary" type="click" onClick={()=>{Goto(1)}} >
    Prev
  </Button>
<Button className="BtnHome" variant="outline-warning" type="click" onClick={()=>{history.push('/')}}>
Go Back To Home
</Button> 
</Container>
  </div>}

 </>

 
 }

   
  
        </div>
    )
}

