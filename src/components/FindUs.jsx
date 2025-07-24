import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find Us On</h2>
      <div className="join flex space-y-2 join-vertical">
        <button className="btn join-item justify-start"><FaFacebook/>Facebook</button>

        <button className="btn join-item justify-start"><FaTwitter/>Twitter</button>
        
        <button className="btn join-item justify-start"><FaInstagram/>Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
