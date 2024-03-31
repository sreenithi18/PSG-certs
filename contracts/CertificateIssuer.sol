// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract CertificateIssuer {

    // School admin address
    address public schoolAdmin;

    // Certificate structure
    struct Certificate {
        address studentAddress;
        string studentName;
        string courseCompleted;
        uint256 issueDate;
        bool isVerified;
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
    function issueCertificate(address studentAddress, string memory studentName, string memory courseCompleted) public onlySchoolAdmin {
        require(certificates[studentAddress].issueDate == 0, "Certificate already issued for this student");

        certificates[studentAddress] = Certificate({
            studentAddress: studentAddress,
            studentName: studentName,
            courseCompleted: courseCompleted,
            issueDate: block.timestamp,
            isVerified: false
        });

        emit CertificateIssued(studentAddress, studentName, courseCompleted, block.timestamp);
    }

    // Function to verify a certificate
    function verifyCertificate(address studentAddress) public {
        require(certificates[studentAddress].issueDate != 0, "Certificate not found");
        require(!certificates[studentAddress].isVerified, "Certificate already verified");

        certificates[studentAddress].isVerified = true;

        emit CertificateVerified(studentAddress);
    }
}
