import './SearchRentalProperty.css';
import axios from 'axios';
import { useState , useEffect } from 'react';
import { __subcategoryapiurl , __categoryapiurl , __userapiurl } from '../../Api.url';
import { Link } from 'react-router-dom';

function SearchRentalProperty() {

  const [ cDetails , setCategoryDetails ] = useState([]);

  useEffect(()=>{
    axios.get(__categoryapiurl+"fetch").then((response)=>{
      setCategoryDetails(response.data);
    }).catch((error)=>{
      console.log(error);        
    });        
  });

  return (
  <>  
  <div id="tooplate_content">

<div class="content_box content_box_last">
  <h2>Search Rental Property &gt;&gt;</h2>

  <center>  
  <div id="catmain" >
  { 
    cDetails.map((row)=>(
      <Link to={`/searchsc/${row.catnm}`} >
      <div class="catpart" >
        <img src={`assets/uploads/categoryicons/${row.caticonnm}`} height={120} width={150} />
        <br/>
        <b>{row.catnm}</b>
      </div>
      </Link>
    ))
  }  
  </div>    
  </center>

</div>

<div class="cleaner"></div>
</div>
  </>
  );
}

export default SearchRentalProperty;



