import "./Manageuser.css";
import React from "react";
 import axios from "axios";
 import { useState, useEffect } from "react";
 import { __userapiurl } from "../../Api.url";
 import { useNavigate } from "react-router-dom";


function Manageusers() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  // Fetch users
  useEffect(() => {
    axios
      .get(__userapiurl + "fetch", {
        params: { role: "user" },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // <-- IMPORTANT (Stops infinite API calls)

  // Change status / Delete user
  const changestatususer = (_id, action) => {
    if (action === "verify") {
      const update_details = {
        condition_obj: { _id },
        content_obj: { status: 1 },
      };

      axios.patch(__userapiurl + "update", update_details).then(() => {
        alert("User verified successfully");
        navigate("/manageusers");
      });
    } 
    else if (action === "block") {
      const update_details = {
        condition_obj: { _id },
        content_obj: { status: 0 },
      };

      axios.patch(__userapiurl + "update", update_details).then(() => {
        alert("User blocked successfully");
        navigate("/manageusers");
      });
    } 
    else if (action === "delete") {
      const delete_details = { data: { _id } };

      axios.delete(__userapiurl + "delete", delete_details).then(() => {
        alert("User deleted successfully");
        navigate("/manageusers");
      });
    }
  };

  return (
    <>
      <div id="tooplate_content">
        <div className="content_box content_box_last">
          <h2>View & Manage User Details</h2>

          <table className="table">
            <thead>
              <tr>
                <th>RegID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>City</th>
                <th>Gender</th>
                <th>Info</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              <tr>
                <td colSpan="11">
                  <hr />
                </td>
              </tr>
            </thead>

            <tbody>
              {users.map((row) => (
                <React.Fragment key={row._id}>
                  <tr>
                    <td>{row._id}</td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.password}</td>
                    <td>{row.mobile}</td>
                    <td>{row.address}</td>
                    <td>{row.city}</td>
                    <td>{row.gender}</td>
                    <td>{row.info}</td>

                    {/* Status */}
                    <td>
                      {row.status === 1 ? (
                        <span style={{ color: "green" }}>Verified</span>
                      ) : (
                        <span style={{ color: "orange" }}>Blocked</span>
                      )}
                    </td>

                    {/* Actions */}
                    <td>
                      <span
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={() =>
                          changestatususer(
                            row._id,
                            row.status === 1 ? "block" : "verify"
                          )
                        }
                      >
                        Change Status
                      </span>

                      <br />

                      <span
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => changestatususer(row._id, "delete")}
                      >
                        DELETE
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td colSpan="11">
                      <hr />
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cleaner"></div>
      </div>
    </>
  );
}

export default Manageusers;
