import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL || "";
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks : {
    hardhat: {
      chainId: 7777
    },
    sepolia : {
      url : SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId : 7855
    },
    mainnet : {
      url : MAINNET_RPC_URL,
      // accounts: [PRIVATE_KEY]
    }
  },
  gasReporter : {
    enabled : true,
    currency : "USD",
    coinmarketcap:COINMARKETCAP_API_KEY,
  },
  mocha : {
    timeout : 4000
  },
  paths : {
    tests : "./test",
    sources : "./contracts"
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};

export default config;
