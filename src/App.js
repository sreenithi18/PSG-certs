import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import React from "react";
import Home from "./Home";
import IssueCertificate from "./component/issueCertificate";
import Certificates from "./component/certificates";
import GetCertificateDetails from "./component/getCertificateDetails";
import SchoolAdmin from "./component/schoolAdmin"; // Assuming you have this component
import VerifyCertificateOwnership from "./component/verifyCertificateOwnership";

function App() {
  return (
    <div>
      <Home />
      <IssueCertificate />
      
      <GetCertificateDetails />
      <Certificates />
      <SchoolAdmin />  {/* Include if you have this component */}
      <VerifyCertificateOwnership />
    </div>
  );
}

export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from "./Home";
// import IssueCertificate from "./component/issueCertificate";
// import Certificates from "./component/certificates";
// import GetCertificateDetails from "./component/getCertificateDetails";
// import SchoolAdmin from "./component/schoolAdmin"; // Assuming you have this component
// import VerifyCertificateOwnership from "./component/verifyCertificateOwnership";

// function App() {
//   return (
//     <Router>
//       <div>
//         {/* Define routes for different components */}
//         <Home/>
    
//       </div>
//     </Router>
//   );
// }

// export default App;
