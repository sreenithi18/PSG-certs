import React, { useState } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import "./issueCertificate.css"; // Import the CSS file

export default function Component() {
  const { contract } = useContract("0x0A7056bD7B0cADA95236F0b307457FA54F3c1251");
  
  const [studentAddress, setStudentAddress] = useState('');
  const { data, isLoading } = useContractRead(contract, "getCertificateDetails", [studentAddress]);

  const handleFetchCertificate = () => {
    // You can add additional logic here if needed
    // For now, the data fetching is handled automatically by useContractRead hook
  };

  return (
    <div className="container"> {/* Add container class */}
      <div className="title" style={{ marginTop: "50px" }}>Get CertificateDetails</div> {/* Add title class */}
      <label className="label"> {/* Add label class */}
        Student Address:
        <input
          className="input-field" 
          type="text"
          placeholder="Enter student address"
          value={studentAddress}
          onChange={(e) => setStudentAddress(e.target.value)}
        />
      </label>
      <button className="button" onClick={handleFetchCertificate}>Fetch Certificate Details</button> {/* Add button class */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* Display certificate details here */}
          {data && (
            <div>
              <p>Student Name: {data.studentName}</p>
              <p>Course Completed: {data.courseCompleted}</p>
              <p>IPFS Hash: {data.ipfsHash}</p>
              {/* Add more fields as needed */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}