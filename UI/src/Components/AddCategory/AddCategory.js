import './AddCategory.css';
import axios from 'axios';
import { useState } from 'react';
import { __categoryapiurl } from '../../../Api.url.js';


function AddCategory() {

  const [ catnm , setCategoryName ] = useState();
  const [ caticon , setFile ] = useState();
  const [ output , setOutput ] = useState();

  const handleChange=(event)=>{
    setFile(event.target.files[0]);
  };

  const handleSubmit=(event)=>{
      event.preventDefault();
      var formData = new FormData();
      formData.append('catnm', catnm);
      formData.append('caticon', caticon);
      const config = {
          'content-type': 'multipart/form-data'
      };
      axios.post(__categoryapiurl+"save", formData, config).then((response) => {
        setCategoryName("");
        setOutput("Category Added Successfully....");
      });    
  };

  return (
  <>  
  <div id="tooplate_content">

<div class="content_box content_box_last">

<h2>Add Category Here!!!</h2>

  <font color={"blue"} >{output}</font>
  <form>
    <div class="form-group">
      <label for="catnm">Category Name:</label>
      <input type="text" class="form-control" onChange={ e => setCategoryName(e.target.value) } value={catnm} />
    </div>
    <div class="form-group">
      <label for="caticon">Category Icon:</label>
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

export default AddCategory;



