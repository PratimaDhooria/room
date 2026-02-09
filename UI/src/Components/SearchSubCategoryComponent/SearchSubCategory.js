import './SearchSubCategory.css';
import axios from 'axios';
import { useState , useEffect } from 'react';
import { __subcategoryapiurl , __categoryapiurl , __userapiurl } from '../../Api.url';
import { Link , useParams } from 'react-router-dom';

function SearchSubCategory() {

  const params = useParams();
  const [ scList , setSubCatList ] = useState([]);    

  useEffect(()=>{
    axios.get(__subcategoryapiurl+"fetch",{
        params :  {"catnm":params.catnm} 
    }).then((response)=>{
        setSubCatList(response.data);
    }).catch((error)=>{
        console.log(error);        
    });  
  },[]);

  /*useEffect(()=>{
    axios.get(__categoryapiurl+"fetch").then((response)=>{
      setCategoryDetails(response.data);
    }).catch((error)=>{
      console.log(error);        
    });        
  });*/

  return (
  <>  
  <div id="tooplate_content">

<div class="content_box content_box_last">
  <h2>Sub Category For Rental Property &gt;&gt; {params.catnm} </h2>

  <center>  
  <div id="catmain" >
  { 
    scList.map((row)=>(
      <Link to={`/searchsc/${row.catnm}`} >
      <div class="catpart" >
        <img src={`../assets/uploads/subcategoryicons/${row.subcaticonnm}`} height={120} width={150} />
        <br/>
        <b>{row.subcatnm}</b>
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

export default SearchSubCategory;



