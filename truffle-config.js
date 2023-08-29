
const HDWalletProvider = require("@truffle/hdwallet-provider");
const keys = require("./keys.json");

module.exports = {
  contracts_build_directory: "./public/contracts",
  networks: {
    development: {
     host: "192.168.20.169",
     port: 3699,
     network_id: "*",
    },
    goerli:{
      provider: () =>
      new HDWalletProvider(
        keys.PRIVATE_KEY,
        keys.INFURA_GOERLI_URL
      ),
      network_id:5,
      gas:10500000,
      gasPrice:20000000000,
      confirmations: 2,
      timeoutBlocks: 600000
    }
  },
  compilers: {
    solc: {
      version: "0.8.19",
    }
  },
};