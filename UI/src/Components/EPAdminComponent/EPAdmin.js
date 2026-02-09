import './EPAdmin.css';
import axios from 'axios';
import { useState , useEffect } from 'react';
import { __userapiurl } from '../../Api.url';
import { useNavigate } from 'react-router-dom';

function EPAdmin() {

  const navigate = useNavigate();
  const [ name , setName ] = useState();    
  const [ email , setEmail ] = useState(localStorage.getItem("email"));
  const [ mobile , setMobile ] = useState();    
  const [ address , setAddress ] = useState();
  const [ city , setCity ] = useState();
  const [ gender , setGender ] = useState();
  
  useEffect(()=>{
    axios.get(__userapiurl+"fetch",{
      params :  {"email":email} 
    }).then((response)=>{
      const userDetails=response.data[0];
      setName(userDetails.name);
      setMobile(userDetails.mobile);
      setAddress(userDetails.address);
      setCity(userDetails.city);      
    }).catch((error)=>{
      console.log(error);        
    });        
  },[]);

  const handleSubmit=()=>{
    var update_details={"condition_obj":{"email":email} ,"content_obj":{"name":name,"mobile":mobile,"address":address,"city":city,"gender":gender}};
    axios.patch(__userapiurl+"update",update_details).then((response)=>{
        alert("User updated successfully....");
        navigate("/epadmin");
    });  
  };

  return (
  <>  
  <div id="tooplate_content">

<div class="content_box content_box_last">

<h2>Register Here!!!</h2>

<form>
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" class="form-control" onChange={ e => setName(e.target.value) } value={name} />
  </div>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input readOnly type="email" class="form-control" onChange={ e => setEmail(e.target.value) } value={email} />
  </div>
  <div class="form-group">
    <label for="mobile">Mobile:</label>
    <input type="text" class="form-control" onChange={ e => setMobile(e.target.value) } value={mobile} />
  </div>
  <div class="form-group">
    <label for="address">Address:</label>
    <textarea class="form-control" onChange={ e => setAddress(e.target.value) } value={address} ></textarea>
  </div>
  <div class="form-group">
    <label for="city">City:</label>
    <select class="form-control" onChange={ e => setCity(e.target.value) } value={city}>
      <option>{city}</option>
      <option>Indore</option>
      <option>Bhopal</option>
      <option>Ujjain</option>
    </select>
  </div>
  <div class="form-group">
    <label for="gender">Gender:</label>
    &nbsp;&nbsp;
    <input type="radio" value="male"checked={gender==="male"} onChange={ e => setGender(e.target.value) }  /> {" "}Male
    &nbsp;&nbsp;
    <input type="radio" valuelue="female"checked={gender==="female"}onChange={ e => setGender(e.target.value) }  /> {" "}Female
  </div>
  <button type="button" class="btn btn-default" onClick={handleSubmit} >Submit</button>
</form>

</div>

<div class="cleaner"></div>
</div>
  </>
  );
}

export default EPAdmin;



