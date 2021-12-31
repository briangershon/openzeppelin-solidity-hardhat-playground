require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: process.env.POLYGON_MUMBAI_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
