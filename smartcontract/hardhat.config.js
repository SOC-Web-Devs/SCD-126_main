

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("dotenv").config();
 require("@nomicfoundation/hardhat-toolbox");
 require("@nomiclabs/hardhat-ethers");
 require("@nomiclabs/hardhat-etherscan");
 
 module.exports = {
   solidity: "0.8.15",
   defaultNetwork: "bsc",
   networks: {
     hardhat: {},
     bsc: {
       //ankr's free public rpc
       url: "https://rpc.ankr.com/bsc_testnet_chapel",
       accounts: [`0x${process.env.PRIVATE_KEY}`],
     },
   },
   bscscan: {
     apiKey: {
       bsc: process.env.BSC_API_KEY || "",
       bsctestnet: process.env.BSC_API_KEY || "",
     },
   },
 };