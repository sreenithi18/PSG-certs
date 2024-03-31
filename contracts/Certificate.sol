// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Certify {

  // School admin address
  address public schoolAdmin;

  // Certificate structure
  struct Certificate {
    address studentAddress;
    string studentName;
    string courseCompleted;
    uint256 issueDate;
    bool isVerified;
    string ipfsHash; // IPFS hash of the certificate document
  }

  // Mapping from student address to their certificate
  mapping(address => Certificate) public certificates;

  // Events
  event CertificateIssued(address indexed studentAddress, string studentName, string courseCompleted, uint256 issueDate);
  event CertificateVerified(address indexed studentAddress);

  // Modifier to restrict function access to only the school admin
  modifier onlySchoolAdmin() {
    require(msg.sender == schoolAdmin, "Only the school admin can call this function");
    _;
  }

  // Constructor to set the school admin
  constructor() {
    schoolAdmin = msg.sender;
  }

  // Function to issue a certificate
  function issueCertificate(address studentAddress, string memory studentName, string memory courseCompleted, string memory ipfsHash) public onlySchoolAdmin {
    require(certificates[studentAddress].issueDate == 0, "Certificate already issued for this student");

    certificates[studentAddress] = Certificate({
      studentAddress: studentAddress,
      studentName: studentName,
      courseCompleted: courseCompleted,
      issueDate: block.timestamp,
      isVerified: false,
      ipfsHash: ipfsHash
    });

    emit CertificateIssued(studentAddress, studentName, courseCompleted, block.timestamp);
  }

  // Function to verify a certificate (for student)
  function verifyCertificateOwnership(address studentAddress) public view returns (bool) {
    return certificates[studentAddress].issueDate != 0;
  }

  // Function to get certificate details (student can use retrieved IPFS hash to access the document)
  function getCertificateDetails(address studentAddress) public view returns (Certificate memory) {
    require(certificates[studentAddress].issueDate != 0, "Certificate not found");
    return certificates[studentAddress];
  }
}
