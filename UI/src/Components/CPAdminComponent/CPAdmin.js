import './CPAdmin.css';
import axios from 'axios';
import { useState } from 'react';
import { __userapiurl } from '../../Api.url';
import { useNavigate } from 'react-router-dom';

function CPAdmin() {

  const navigate = useNavigate();
  const [ email , setEmail ] = useState(localStorage.getItem("email"));
  const [ opassword , setOldPassword ] = useState();
  const [ npassword , setNewPassword ] = useState();
  const [ cnpassword , setConfirmNewPassword ] = useState();
  const [ output , setOutput ] = useState();

  const handleSubmit=()=>{
    axios.get(__userapiurl+"fetch",{
      params :  {"email":email,"password":opassword} 
    }).then((response)=>{
      if(npassword==cnpassword)
        {
          var update_details={"condition_obj":{"email":email} ,"content_obj":{"password":cnpassword}};
          axios.patch(__userapiurl+"update",update_details).then((response)=>{
            alert("Password changed successfully....");
            navigate("/logout");
          });  
        } 
      else
      {
        setOutput("New & Confirm New Password Mismatch....");
        setNewPassword("");
        setConfirmNewPassword("");
      }     
    }).catch((error)=>{
      setOutput("Invalid Old Password....");        
      setOldPassword("");
    });;        
  }

  return (
  <>  
  <div id="tooplate_content">

<div class="content_box content_box_last">
  <h2>Change Password Here!!!</h2>
  <font color={"blue"} >{output}</font>
  <form>
    <div class="form-group">
      <label for="opwd">Old Password:</label>
      <input type="password" class="form-control" onChange={ e => setOldPassword(e.target.value) } value={opassword} />
    </div>
    <div class="form-group">
      <label for="npwd">New Password:</label>
      <input type="password" class="form-control" onChange={ e => setNewPassword(e.target.value) } value={npassword} />
    </div>
    <div class="form-group">
      <label for="cnpwd">Confirm New Password:</label>
      <input type="password" class="form-control" onChange={ e => setConfirmNewPassword(e.target.value) } value={cnpassword} />
    </div>
    <button type="button" class="btn btn-default" onClick={handleSubmit} >Submit</button>
  </form>
</div>

<div class="cleaner"></div>
</div>
  </>
  );
}

export default CPAdmin;



