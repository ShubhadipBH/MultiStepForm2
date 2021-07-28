import React,{useState,useEffect} from 'react'
import { Col,Row,Button,Container , Form, FormFloating } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
// import {Link} from 'react-router-dom'
import {useFormik,Field} from 'formik'
import './Registration.css'

// import RegForm1 from './RegForm1'
// import RegForm2 from './RegForm2'

import { setUserData } from '../Slices/RegSlice'
import {setTestSliceData,setReset} from '../Slices/TestSlice'
import { useDispatch ,useSelector} from 'react-redux'


export default function Registration() {
   
  // let ClickCounter=0
let history=useHistory()
  let [ClickCounter,setClickCounter]=useState(0)

const dispatch=useDispatch()
 

const validate_email=RegExp("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}");
const validate_password=RegExp("[A-Z0-9a-z._%+-]{8,64}");



  let selector=useSelector(state=>state.TestReducer)
//userdata is from Store.js . IT is a reducer name


const [inputState,setInputState]=useState({
  isError:{
    fname:"",
    lname:"",
     email:"",
    pass:"",
    phone:"",
    state:"",
    city:"",
    zip:""

}
})


const handleChange_1=(event)=>{

  //   console.log(event);
            let {name,value}=event.target;
 //2nd step of validation   
               let isErrors={...inputState.isError};
               switch(name){
                   case "fname":          
                       isErrors.fname=
                       value.length<4 ? "At least 4  characters required" : "";
                       break;
                       case "lname":
                           isErrors.lname=value.length<4 ? "At least 4  characters required" : "";
                           break;
                           case "email":
                               isErrors.email=
                              value.length==0 ? "email can not be blank" : ( validate_email.test(value)? "":"Email Pattern Does Not Match !");
                                       break; 
                               case "pass":                          
                                  isErrors.pass=
                                  value.length==0 ? "password can not be blank" :(validate_password.test(value)?"" :"Password Pattern must match!")
                                  break; 
                                  case "phone":
                                    isErrors.phone=
                                    value.length==0 ? "Phone number can not be blank" : 
                                   (value.length<9 ? "Phone Number must be more than 9 digits " : (isNaN(value) ? "Phone number must be digits" : ""))
                                   break;
                                   default:
                                       break;
               }
  
               setInputState({...inputState,[name]:value, isError:isErrors})
                // console.log(inputState);



}


let handleChange_2=(event)=>{

      let {name,value}=event.target;
      let isErrors={...inputState.isError}

      switch(name){

        case "state":
                       isErrors.state=
                       value.length==0 ? "State Name can not be blank" : 
                       (value.length<3 ? "State name Should be at least 3 characters": "") ;
                       break;
        case "city":
                    isErrors.city=
                        value.length==0 ? "City Name can not be blank" : 
                        (value.length<4 ?" City name must be at least 4 characters" :" ");
                        break;
         case "zip":
                          isErrors.zip=
                          value.length<6 ? "Provide a valid zip (6 digits minimum)" : 
                         (isNaN(value) ? "Zipcode number must be digits" : "")
                         break;

      }


      setInputState({...inputState,[name]:value, isError:isErrors})
     console.log(inputState);



}




 
let [isReadyToDisplay,setisReadyToDisplay]=useState("none")
let [BtnDisable,setBtnDisable]=useState(true)


 
let submithandler_1=(event)=>{
  event.preventDefault();
 
if(!inputState.fname && !inputState.state){
  alert("No data to submit in this section  ")
  if(!inputState.fname)
  {
    Goto(0)
  }
  else if(!inputState.state){
      Goto(1)
  }
}

 


  // dispatch(setTestSliceData(inputState))

  setisReadyToDisplay("")
  setBtnDisable(false)

}


let finalSubmit=()=>{

  dispatch(setTestSliceData(inputState))
  // console.log(selector);
  alert("Data Saved. Thank you !" + inputState.fname)
}

let reset=()=>{
    dispatch(setReset("reset"))
    Goto(0)
}   
 

 
let[AbuttonStyle,setAButtonStyle]=useState("green")
let[BbuttonStyle,setBButtonStyle]=useState("")
let[CbuttonStyle,setCButtonStyle]=useState("")

let[AloaderDiv,setAloaderDiv]=useState("transparent")
let[BloaderDiv,setBloaderDiv]=useState("transparent")
let[CloaderDiv,setCloaderDiv]=useState("transparent")


 


let Goto=(val)=>{
   setClickCounter(val)
  
//  console.log(val);

if(val==1)
{
setBButtonStyle("green")
setBloaderDiv("")
setAloaderDiv("")
setCButtonStyle(" ")
setCloaderDiv("transparent")

 
}
else if(val==2){
setCButtonStyle("green")
setCloaderDiv("")
setBButtonStyle("green")
setBloaderDiv("")
setAButtonStyle("green")
setAloaderDiv("")
  
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
    <Col><Button onClick={()=>{Goto(0)}} variant="outline-secondary" style={{backgroundColor:"", borderColor:AbuttonStyle}}>Personal Details</Button></Col>
    <Col><Button onClick={()=>{Goto(1)}} variant="outline-secondary" style={{backgroundColor:"", borderColor:BbuttonStyle}}  disabled={BtnDisable} >Address</Button></Col>
    <Col><Button onClick={()=>{Goto(2)}} variant="outline-secondary" style={{backgroundColor:"", borderColor:CbuttonStyle}}  disabled={BtnDisable}>Submit</Button></Col>
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
      
                 <Form onSubmit={submithandler_1}>  


  <Form.Group className="mb-3" controlId="fname">
    <Form.Label>Firstname</Form.Label>
    <Form.Control type="text" className="FormTextBox" placeholder=  "Enter Firstname "  onChange={handleChange_1}   name="fname"    value={inputState.fname}  />
  </Form.Group>
  <p className="errorFontSize">
  {inputState.isError.fname.length>0 && ( <span>{inputState.isError.fname}</span>)}
</p>

  <Form.Group className="mb-3" controlId="lname">
    <Form.Label>Lastname</Form.Label>
    <Form.Control type="text" className="FormTextBox" placeholder="Enter Lastname " onChange={handleChange_1}   name="lname"   value={inputState.lname} />
  </Form.Group>
  <p className="errorFontSize">
  {inputState.isError.lname.length>0 && ( <span>{inputState.isError.lname}</span>)}
</p>

  <Form.Group className="mb-3" controlId="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" className="FormTextBox" placeholder="Enter Email" onChange={handleChange_1}  name="email" value={inputState.email} />
  </Form.Group>
  <p className="errorFontSize">
  {inputState.isError.email.length>0 && ( <span>{inputState.isError.email}</span>)}
</p> 

  <Form.Group className="mb-3" controlId="phone">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="text" className="FormTextBox" placeholder= "Enter Phone "   onChange={handleChange_1}   name="phone"  value={inputState.phone} />
 
  </Form.Group>
  <p className="errorFontSize">
  {inputState.isError.phone.length>0 && ( <span>{inputState.isError.phone}</span>)}
</p>

  <Form.Group className="mb-3" controlId="pass">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" className="FormTextBox" placeholder= "Enter Password "   onChange={handleChange_1}   name="pass"  value={inputState.pass} />
  
  </Form.Group>
  <p className="errorFontSize">
  {inputState.isError.pass.length>0 && ( <span>{inputState.isError.pass}</span>)}
</p>


  <Button className="BtnSubmit" variant="outline-success" type="submit" >
    Submit
  </Button>

</Form> 

 
<Button className="BtnNext" variant="outline-dark" type="click" onClick={()=>{Goto(1)}}   disabled={BtnDisable}  >
    Next
  </Button>
  <Button className="BtnHome" variant="outline-dark" type="click" onClick={()=>{history.push('/')}}>
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
 
<Form  onSubmit={submithandler_1}>  


<Form.Group className="mb-3" controlId="state">
<Form.Label>State</Form.Label>
 
<Form.Control type="text" className="FormTextBox" placeholder="Enter State "  name="state" onChange={handleChange_2}  value={inputState.state} />
</Form.Group>
<p className="errorFontSize">
{inputState.isError.state.length>0 && ( <span>{inputState.isError.state}</span>)}
</p>

<Form.Group className="mb-3" controlId="city">
<Form.Label>City</Form.Label>
 
<Form.Control type="text" className="FormTextBox" placeholder= "Enter City "   name="city" onChange={handleChange_2}  value={inputState.city} />
</Form.Group>
<p className="errorFontSize">
{inputState.isError.city.length>0 && ( <span>{inputState.isError.city}</span>)}
</p>


<Form.Group className="mb-3" controlId="zip">
<Form.Label>Zipcode</Form.Label>
<Form.Control type="text" className="FormTextBox" placeholder= "Enter Zipcode "   name="zip"  onChange={handleChange_2} value={inputState.zip}/>
</Form.Group>
<p className="errorFontSize">
{inputState.isError.zip.length>0 && ( <span>{inputState.isError.zip}</span>)}
 
</p>

<Button className="BtnSubmit" variant="outline-success" type="submit"  >
Submit
</Button>


</Form> 
<Button className="BtnNext" variant="outline-dark" type="click" onClick={()=>{Goto(0)}} >
    Back
  </Button>
  <Button className="BtnNext" variant="outline-dark" type="click"  onClick={()=>{Goto(2)}}  >
    Next
  </Button>
  <Button className="BtnHome" variant="outline-dark" type="click" onClick={()=>{history.push('/')}}  >
Go Back To Home
</Button>  
</Row>
</Container>

</div>
 


  </div> :


  <>
 


  <div>
 
 <Container className="Registration_Container">   
 <div className="Registration_Container_ShowDetails">


  <span style={{display:isReadyToDisplay}}>Details Taken</span>

{/* <p>   <Button variant="outline-primary" onClick={()=>alert("Data Saved"+ selector.fname)}> Submit</Button>
      <Button variant="outline-primary" onClick={()=>{Goto(0)}} style={{marginLeft:"20px"}}> Reset</Button>
</p> */}
<> {!inputState.fname? <div style={{marginTop:"20px",fontSize:"30px"}}>"No Data has been Submitted yet"</div> :
<div style={{marginTop:"40px" }} style={{display:isReadyToDisplay}}>
<p> FirstName: {selector.fname}</p>
<p> LastName: {selector.lname}</p>
<p> Email: {selector.email}</p>
<p> Phone: {selector.phone}</p>
<p> City: {selector.city}</p>
<p> State: {selector.state}</p>
<p> Zipcode: {selector.zip}</p>
</div>}

</>


</div>
<span style={{display:isReadyToDisplay}}>
 
<Button className="BtnNext" variant="outline-dark" type="click" onClick={()=>{Goto(1)}} style={{marginTop: "0px" , width:"80px" }}>
    Back
  </Button>
<Button className="BtnHome" variant="outline-dark" type="click" onClick={()=>{history.push('/')}} style={{ width:"70px" }}>
 Home
</Button> 
<Button variant="outline-success" onClick={()=>finalSubmit()}> Submit</Button>

  <p>   <Button variant="outline-danger"  onClick={()=>reset()}  style={{marginLeft:"20px" ,width:"80px" }}> Reset</Button></p> 
</span>

</Container>
  </div>
  </>
  
  }

 </>

 
 }

   
  
        </div>
    )
}

