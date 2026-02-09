import "./Nav.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [navContent, setNavContent] = useState();

  useEffect(() => {
     setInterval(() => {
     

      if (localStorage.getItem("token") !== undefined && localStorage.getItem ("role") === "admin") {
        setNavContent(<>
          <div id="tooplate_menu">
            <ul>
              <li><Link className="current" to="/admin">AdminHome</Link></li>
              <li><Link to="/manageusers">&nbsp;&nbsp;ManageUsers</Link></li>
              <li><Link to="/addcategory">AddCategory</Link></li>
              <li><Link to="/addsubcategory">AddSubCategory</Link></li>
              <li><Link to="/epadmin">EditProfile</Link></li>
              <li><Link to="/cpadmin">ChangePassword</Link></li>
              <li><Link to="/logout">Logout</Link></li>
             <li><Link to="/admincontact">admincontact</Link></li> 
            </ul>
            <div className="cleaner"></div>
          </div>
   </>     );
      } else if (localStorage.getItem("token") !== undefined && localStorage.getItem("role") === "user") {
        setNavContent(<>
          <div id="tooplate_menu">
            <ul>
              <li><Link className="current" to="/user">User Home</Link></li>
              <li><Link to="/searchrp">SearchRental Property</Link></li>
              <li><Link to="/charity">Charity</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </ul>
            <div className="cleaner"></div>
          </div>
       </> );
      } else {
        setNavContent(<>
          <div id="tooplate_menu">
            <ul>
              <li><Link className="current" to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/service">Service</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
            <div className="cleaner"></div>
          </div>
        </>);
      }
    }, 1);

   
  }, []);

  return <>{navContent}</>;
}

export default Nav;
