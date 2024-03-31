import React, { useState } from 'react';
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import "./issueCertificate.css";

export default function Component() {
  const { contract } = useContract("0x0A7056bD7B0cADA95236F0b307457FA54F3c1251");
  
  // Define state for student data
  const [students, setStudents] = useState([
    { name: '21z301', address: '0x9565D679950A76b42E8FaBbd95152cE3c25D4823' },
    { name: '21z343', address: '0x7d808E6954C666cC1D510E1a3e238AaaD4aeC3c1' },
    { name: '21z352', address: '0x6274783eE835223Cb51Fc33592f1EF6C8A72f8cC' },
    { name: '21z356', address: '0xc769451eebaE493847e52c6703f31544913e5E69' },
    { name: '21z358', address: '0x53B67228484331B9AfC1E04FFbE0A110D0501901' }
  ]);

  // Define state for selected student
  const [selectedStudent, setSelectedStudent] = useState('');

  const [courseCompleted, setCourseCompleted] = useState('');
  const [ipfsHash, setIpfsHash] = useState('');
  const { mutateAsync: issueCertificate, isLoading: isIssuing } = useContractWrite(contract, "issueCertificate");

  const call = async () => {
    try {
      // Find the selected student object
      const selectedStudentObj = students.find(student => student.name === selectedStudent);
      if (!selectedStudentObj) {
        console.error("Selected student not found");
        return;
      }

      // Issue certificate with selected student's data
      const data = await issueCertificate({ args: [selectedStudentObj.address, selectedStudent, courseCompleted, ipfsHash] });
      console.info("contract call success", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }

  return (
    <div className='container'>
      <div className="title">Issue Certificate</div>
      <label className='label'>
        Student RollNo:
        <select
          className='input-field'
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(e.target.value)}
        >
          <option value="">Select RollNo</option>
          {students.map(student => (
            <option key={student.name} value={student.name}>{student.name}</option>
          ))}
        </select>
      </label>
      <label className='label'>
        Student Address:
        <input
          className='input-field'
          type="text"
          value={students.find(student => student.name === selectedStudent)?.address || ''}
          readOnly
        />
      </label>
      <label className='label'>
        Course Completed:
        <input
          className='input-field'
          type="text"
          value={courseCompleted}
          onChange={(e) => setCourseCompleted(e.target.value)}
        />
      </label>
      <label className='label'>
        IPFS hash:
        <input
          className='input-field'
          type="text"
          value={ipfsHash}
          onChange={(e) => setIpfsHash(e.target.value)}
        />
      </label>
      <button className="button" onClick={call} disabled={isIssuing}>
        Issue Certificate
      </button>
    </div>
  );
}