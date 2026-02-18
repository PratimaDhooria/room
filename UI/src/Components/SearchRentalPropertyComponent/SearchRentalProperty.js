import "./SearchRentalProperty.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { __categoryapiurl } from "../../Api.url";
import { Link } from "react-router-dom";

function SearchRentalProperty() {

  const [cDetails, setCategoryDetails] = useState([]);

  useEffect(() => {
    axios
      .get(__categoryapiurl + "fetch")
      .then((response) => {
        setCategoryDetails(response.data || []);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // ✅ dependency added

  return (
    <div id="tooplate_content">
      <div className="content_box content_box_last">
        <h2>Search Rental Property &gt;&gt;</h2>

        <div id="catmain">
          {cDetails.map((row) => (
            <Link key={row._id} to={`/searchsc/${row.catnm}`}>
              <div className="catpart">
                <img
                  src={`assets/uploads/categoryicons/${row.caticonnm}`}
                  height={120}
                  width={150}
                  alt={row.catnm}
                />
                <br />
                <b>{row.catnm}</b>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="cleaner"></div>
    </div>
  );
}

export default SearchRentalProperty;
