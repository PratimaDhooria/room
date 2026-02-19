import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { __userapiurl } from "../../Api.url";
import axios from "axios";

function Verifyuser() {
  const params = useParams();
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (!params.vemail) return;

    axios
      .get(__userapiurl + "fetch", {
        params: { email: params.vemail },
      })
      .then((response) => {
        const user = response.data?.[0];

        if (user && user.__v === 0) {
          const updateDetails = {
            condition_obj: { email: params.vemail },
            content_obj: { status: 1, __v: 1 },
          };

          axios.patch(__userapiurl + "update", updateDetails).then(() => {
            alert("User verified successfully!");
            setVerified(true);
          });
        } else {
          setVerified(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setVerified(true);
      });
  }, [params.vemail]);

  if (verified) {
    return <Navigate to="/login" />;
  }

  return <div>Verifying user...</div>;
}

export default Verifyuser;
