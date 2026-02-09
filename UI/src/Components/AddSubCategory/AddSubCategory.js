import './AddSubCategory.css';
import axios from 'axios';
import { useState , useEffect } from 'react';
import { __categoryapiurl, __subcategoryapiurl } from "../../Api.url";




function AddSubCategory() {

  const [ catnm , setCategoryName ] = useState();
  const [ subcatnm , setSubCategoryName ] = useState();
  const [ caticon , setFile ] = useState();
  const [ output , setOutput ] = useState();
  const [ cDetails , setCategoryDetails ] = useState([]);

  useEffect(()=>{
    axios.get(__categoryapiurl+"fetch").then((response)=>{
      setCategoryDetails(response.data);
    }).catch((error)=>{
      console.log(error);        
    });       
  });

  const handleChange=(event)=>{
    setFile(event.target.files[0]);
  };

  const handleSubmit=(event)=>{
      event.preventDefault();
      var formData = new FormData();
      formData.append('catnm', catnm);
      formData.append('subcatnm', subcatnm);
      formData.append('caticon', caticon);
      const config = {
          'content-type': 'multipart/form-data'
      };
      axios.post(__subcategoryapiurl+"save", formData, config).then((response) => {
        setCategoryName("");
        setSubCategoryName("");
        setOutput("SubCategory Added Successfully....");
      });    
  };

  return (
  <>  
  <div id="tooplate_content">

<div class="content_box content_box_last">

<h2>Add SubCategory Here!!!</h2>

  <font color={"blue"} >{output}</font>
  <form>
    <div class="form-group">
      <label for="catnm">Category Name:</label>
      <select class="form-control" onChange={ e => setCategoryName(e.target.value) } value={catnm} >
        <option>Select Category</option>
        {
          cDetails.map((row)=>(
            <option>{row.catnm}</option>
          ))
        }
      </select>
    </div>
    <div class="form-group">
      <label for="subcatnm">SubCategory Name:</label>
      <input type="text" class="form-control" onChange={ e => setSubCategoryName(e.target.value) } value={subcatnm} />
    </div>
    <div class="form-group">
      <label for="caticon">SubCategory Icon:</label>
      <input type="file" class="form-control" onChange={handleChange} />
    </div>
    <button type="button" class="btn btn-default" onClick={handleSubmit} >Submit</button>
  </form>


</div>

<div class="cleaner"></div>
</div>
  </>
  );
}

export default AddSubCategory;



