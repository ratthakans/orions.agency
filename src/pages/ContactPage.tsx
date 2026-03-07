import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/about#contact", { replace: true });
  }, [navigate]);
  return null;
};

export default ContactPage;
