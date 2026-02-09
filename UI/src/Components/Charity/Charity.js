import './Charity.css';
import axios from 'axios';
import { __paymentapiurl } from '../../Api.urls';


function Charity() {

  const MakeCharity=async()=>{
    const response=await axios.post(__paymentapiurl,{"amount":1000});
    window.open(response.data.url);
    //console.log(response);
  };

  return (
    <>
{/* Content Section Start */}
<div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
<div class="col-lg-12 py-6 px-5">
<h1 class="display-5 mb-4">Click To <span class="text-primary">Make Charity</span></h1>
<button onClick={ ()=> {MakeCharity()} } >Click to make charity</button>
</div>
</div>
    </div>
{/* Content Section Start */}
    </>
  );
}

export default Charity;


