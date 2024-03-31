const Certify = artifacts.require("Certify"); // Replace with your contract name

module.exports = async (deployer) => {
  console.log("Before deployment...");
  const deployedContract = await deployer.deploy(Certify);
  console.log("After deployment:", deployedContract); // Check if it's undefined
  console.log("Contract deployed to:",deployedContract); // Access address only if deployed

};