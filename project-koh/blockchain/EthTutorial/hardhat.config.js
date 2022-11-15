require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
   defaultNetwork: "goerli",
   networks: {
     hardhat: {
     },
     goerli: {
       url: "https://eth-goerli.g.alchemy.com/v2/_xtvbx98H0BR4y_GsXc8uqwtiGVKJgGL",
       accounts: ["e0cc301683cf0037f584a272c9baa1bf215b94964553512319dec064ee39efaf"]
     }
   },
   solidity: {
     version: "0.8.4",
     settings: {
       optimizer: {
         enabled: true,
         runs: 200
       }
     }
   },
   paths: {
     sources: "./contracts",
     tests: "./test",
     cache: "./cache",
     artifacts: "./artifacts"
   },
   mocha: {
     timeout: 40000
   }
 }
