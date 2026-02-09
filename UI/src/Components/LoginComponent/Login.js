import './Login.css';
import axios from 'axios';
import { useState } from 'react';
import { __userapiurl } from '../../Api.url.js';
import { useNavigate} from 'react-router-dom';

function Login() {

  const navigate = useNavigate();
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  const [ output , setOutput ] = useState();

  const handleSubmit=()=>{
    const userDetails={"email":email,"password":password};
    axios.post(__userapiurl+"login",userDetails).then((response)=>{
      //console.log(response.data);
      const userDetails=response.data.userDetails;
            
      localStorage.setItem("token",response.data.token);
      localStorage.setItem("name",userDetails.name);
      localStorage.setItem("email",userDetails.email);
      localStorage.setItem("mobile",userDetails.mobile);
      localStorage.setItem("address",userDetails.address);
      localStorage.setItem("city",userDetails.city);
      localStorage.setItem("gender",userDetails.gender);
      localStorage.setItem("status",userDetails.status);
      localStorage.setItem("role",userDetails.role);
      localStorage.setItem("info",userDetails.info);

      (userDetails.role=="admin")?navigate("/admin"):navigate("/user");

    }).catch((err)=>{
      setOutput("Invalid user or verify your account....");
      setEmail("");
      setPassword("");    
    });  
  };

  return (
    <>  
    <div id="tooplate_content">
  
  <div class="content_box content_box_last">
  
  <h2>Login Here!!!</h2>
  <font color={"blue"} >{output}</font>
  <form>
    <div class="form-group">
      <label for="email">Email address:</label>
      <input type="email" class="form-control" onChange={ e => setEmail(e.target.value) } value={email} />
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" onChange={ e => setPassword(e.target.value) } value={password} />
    </div>
    <button type="button" class="btn btn-default" onClick={handleSubmit} >Submit</button>
  </form>
  
  </div>
  
  <div class="cleaner"></div>
  </div>
    </>
  
  );
}

export default Login;