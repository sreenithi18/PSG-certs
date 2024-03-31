import { useContract, useContractRead } from "@thirdweb-dev/react";
import React, { useState } from 'react';
export default function Component() {
  const { contract } = useContract("0x0A7056bD7B0cADA95236F0b307457FA54F3c1251");
  
  const [studentAddress, setStudentAddress] = useState('');
  const { data, isLoading } = useContractRead(contract, "verifyCertificateOwnership", [studentAddress])
}