require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/7p0kRvYGlBHX-jjAm_KCOjDO8IAOHOel",
      accounts: [PRIVATE_KEY],
    },
  },
};
