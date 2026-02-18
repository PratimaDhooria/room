import "./SearchSubCategory.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { __subcategoryapiurl } from "../../Api.url";
import { useParams, Link } from "react-router-dom";

function SearchSubCategory() {
  const { catnm } = useParams();

  const [scDetails, setSubCategoryDetails] = useState([]);

  useEffect(() => {
    axios
      .get(__subcategoryapiurl + "fetch", {
        params: { catnm: catnm },
      })
      .then((response) => {
        setSubCategoryDetails(response.data || []);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [catnm]); // ✅ dependency fixed

  return (
    <div id="tooplate_content">
      <div className="content_box content_box_last">
        <h2>Search Sub Category &gt;&gt;</h2>

        <div id="scmain">
          {scDetails.map((row) => (
            <Link key={row._id} to={`/searchproperty/${row.subcatnm}`}>
              <div className="scpart">
                <img
                  src={`assets/uploads/subcategoryicons/${row.subcaticonnm}`}
                  height={120}
                  width={150}
                  alt={row.subcatnm}
                />
                <br />
                <b>{row.subcatnm}</b>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="cleaner"></div>
    </div>
  );
}

export default SearchSubCategory;
