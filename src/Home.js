import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <h1 className="title">
            Welcome to{" "}
            <span className="gradient-text-0">
              <a href="" target="_blank" rel="noopener noreferrer">
                PSG CERTS.
              </a>
            </span>
          </h1>
          <p className="description">
            A place for secure certificates
          </p>
          <div className="connect">
            <ConnectWallet />
          </div>
        </div>
      </div>
    </main>
  );
}
// import React from "react";
// import { Link } from "react-router-dom"; // Import Link for navigation
// import { ConnectWallet } from "@thirdweb-dev/react";
// import "./styles/Home.css"; // Assuming styles are defined in a separate CSS file

// export default function Home() {
//   return (
//     <main className="main">
//       <div className="container">
//         <div className="header">
//           <h1 className="title">
//             Welcome to{" "}
//             <span className="gradient-text-0">
//               <Link to="/">  {/* Link to root for clarity */}
//                 PSG CERTS.
//               </Link>
//             </span>
//           </h1>
//           <p className="description">A place for secure certificates</p>
//           <div className="connect">
//             <ConnectWallet />
//           </div>
//           <div className="navigation-buttons">
//             <Link to="./component/issueCertificate">
//               <button className="navigation-button">Issue Certificate</button>
//             </Link>
//             <Link to="./component/getCertificateDetails">
//               <button className="navigation-button">View Certificates</button>
//             </Link>
//             {/* Add more buttons for other components if needed */}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
