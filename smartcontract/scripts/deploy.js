const { ethers } = require("hardhat");
 
async function main() {
  // Grab the contract factory
  const CrowdFundingFinal = await ethers.getContractFactory("CrowdFundingFinal");
 
  // Start deployment, returning a promise that resolves to a contract object
  const crowd = await CrowdFundingFinal.deploy(); // Instance of the contract
  await crowd.deployed();
  console.log("Contract deployed to address:", crowd.address);
}
 
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });