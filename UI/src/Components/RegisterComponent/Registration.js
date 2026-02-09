import './Registration.css';
import axios from 'axios';
import { useState } from 'react';
import { __userapiurl } from '../../Api.url';

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = () => {
    const userDetails = { name, email, password, mobile, address, city, gender };
    axios.post(__userapiurl + "save", userDetails)
      .then(() => {
        alert("User register successfully");
        setName("");
        setEmail("");
        setPassword("");
        setMobile("");
        setAddress("");
        setCity("");
        setGender("");
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div id="tooplate_content">
        <div className="content_box">

          <h2>Register Here!!!</h2>

          <form>

            <div className="form-group">
              <label>Name:</label>
              <input type="text" className="form-control"
                value={name}
                onChange={e => setName(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Email address:</label>
              <input type="email" className="form-control"
                value={email}
                onChange={e => setEmail(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input type="password" className="form-control"
                value={password}
                onChange={e => setPassword(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Mobile:</label>
              <input type="text" className="form-control"
                value={mobile}
                onChange={e => setMobile(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Address:</label>
              <textarea className="form-control"
                value={address}
                onChange={e => setAddress(e.target.value)} />
            </div>

            <div className="form-group">
              <label>City:</label>
              <select className="form-control"
                value={city}
                onChange={e => setCity(e.target.value)}>
                <option value="">Select City</option>
                <option>Indore</option>
                <option>Bhopal</option>
                <option>Ujjain</option>
              </select>
            </div>

            {/* ✅ GENDER SIDE BY SIDE */}
            <div className="form-group gender-group">
              <label>Gender:</label>

              <div className="gender-option">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={e => setGender(e.target.value)}
                />
                Male
              </div>

              <div className="gender-option">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={e => setGender(e.target.value)}
                />
                Female
              </div>
            </div>

            <button type="button" className="btn" onClick={handleSubmit}>
              Submit
            </button>

          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
