import "./EPAdmin.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { __userapiurl } from "../../Api.url";
import { useNavigate } from "react-router-dom";

function EPAdmin() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email] = useState(localStorage.getItem("email"));
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    axios
      .get(__userapiurl + "fetch", {
        params: { email: email },
      })
      .then((response) => {
        const userDetails = response.data?.[0];

        if (userDetails) {
          setName(userDetails.name || "");
          setMobile(userDetails.mobile || "");
          setAddress(userDetails.address || "");
          setCity(userDetails.city || "");
          setGender(userDetails.gender || "");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [email]); // ✅ dependency added

  const handleSubmit = () => {
    const update_details = {
      condition_obj: { email: email },
      content_obj: { name, mobile, address, city, gender },
    };

    axios
      .patch(__userapiurl + "update", update_details)
      .then(() => {
        alert("User updated successfully");
        navigate("/epadmin");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div id="tooplate_content">
      <div className="content_box content_box_last">
        <h2>Edit Profile</h2>

        <form>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              readOnly
              type="email"
              className="form-control"
              value={email}
            />
          </div>

          <div className="form-group">
            <label>Mobile:</label>
            <input
              type="text"
              className="form-control"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Address:</label>
            <textarea
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>City:</label>
            <select
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">Select City</option>
              <option value="Indore">Indore</option>
              <option value="Bhopal">Bhopal</option>
              <option value="Ujjain">Ujjain</option>
            </select>
          </div>

          <div className="form-group">
            <label>Gender:</label> &nbsp;&nbsp;
            <input
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />{" "}
            Male
            &nbsp;&nbsp;
            <input
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />{" "}
            Female
          </div>

          <button
            type="button"
            className="btn btn-default"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>

      <div className="cleaner"></div>
    </div>
  );
}

export default EPAdmin;
