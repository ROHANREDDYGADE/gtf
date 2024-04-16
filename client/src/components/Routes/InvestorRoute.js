import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function InvestorRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get("https://gtf-lemon.vercel.app/auth/investor-auth");
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
          
        }
      } catch (error) {
        // Handle errors, including 401 Unauthorized
        console.error("Error occurred:", error);
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
}
