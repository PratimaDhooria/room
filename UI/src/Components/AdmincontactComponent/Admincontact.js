import "./Admincontact.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { __contactapiurl } from "../../Api.url";
import { useNavigate } from "react-router-dom";

function AdminContact() {
  const navigate = useNavigate();

  // ✅ contacts ALWAYS array
  const [contacts, setContacts] = useState([]);

  // ✅ FETCH CONTACTS
  useEffect(() => {
    axios
      .get(__contactapiurl + "fetch")
      .then((response) => {
        console.log("API RESPONSE 👉", response.data);

        // backend returns: { success: true, data: [] }
        setContacts(response.data?.data || []);
      })
      .catch((error) => {
        console.log("API ERROR 👉", error);
        setContacts([]);
      });
  }, []);

  // ✅ DELETE CONTACT
  const deleteContact = (_id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      axios
        .delete(__contactapiurl + "delete", {
          data: { _id },
        })
        .then(() => {
          alert("Contact deleted successfully");

          // 🔄 refresh list after delete
          setContacts((prev) => prev.filter((c) => c._id !== _id));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div id="tooplate_content">
      <div className="content_box content_box_last">
        <h2>Contact Users List</h2>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td colSpan="6" align="center">
                  No contact data found
                </td>
              </tr>
            ) : (
              contacts.map((row, index) => (
                <tr key={row._id}>
                  <td>{index + 1}</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.phone}</td>
                  <td>{row.message}</td>
                  <td>
                    <span
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => deleteContact(row._id)}
                    >
                      DELETE
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminContact;
