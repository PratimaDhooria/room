import { useEffect } from 'react';
import { href, useNavigate} from 'react-router-dom';
import './Success.css';

function Success() {

  const navigate = useNavigate();

 
  return (
  <>  
  <div id="tooplate_content">

<div class="content_box content_box_last">
      <h2> Payment completed</h2>
      <h3>Charity Done Successfully....</h3>
</div>

<div class="cleaner"></div>
</div>
  </>
  );
}

export default Success;



