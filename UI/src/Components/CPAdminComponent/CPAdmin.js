import "./CPAdmin.css";
import axios from "axios";
import { useState } from "react";
import { __userapiurl } from "../../Api.url";
import { useNavigate } from "react-router-dom";

function CPAdmin() {

  const navigate = useNavigate();

  const [email] = useState(localStorage.getItem("email"));
  const [opassword, setOldPassword] = useState("");
  const [npassword, setNewPassword] = useState("");
  const [cnpassword, setConfirmNewPassword] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get(__userapiurl + "fetch", {
      params: { email: email, password: opassword }
    })
    .then(() => {

      // ✅ strict comparison
      if (npassword === cnpassword) {

        const updateDetails = {
          condition_obj: { email: email },
          content_obj: { password: cnpassword }
        };

        axios.patch(__userapiurl + "update", updateDetails)
          .then(() => {
            alert("Password changed successfully");
            navigate("/logout");
          });

      } else {
        setOutput("New & Confirm Password Mismatch");
        setNewPassword("");
        setConfirmNewPassword("");
      }

    })
    .catch(() => {
      setOutput("Invalid Old Password");
      setOldPassword("");
    });
  };

  return (
    <>
      <div id="tooplate_content">

        <div className="content_box content_box_last">
          <h2>Change Password Here!!!</h2>

          <p style={{ color: "blue" }}>{output}</p>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="opwd">Old Password:</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setOldPassword(e.target.value)}
                value={opassword}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="npwd">New Password:</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setNewPassword(e.target.value)}
                value={npassword}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="cnpwd">Confirm New Password:</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                value={cnpassword}
                required
              />
            </div>

            <button type="submit" className="btn btn-default">
              Submit
            </button>

          </form>
        </div>

        <div className="cleaner"></div>
      </div>
    </>
  );
}

export default CPAdmin;
