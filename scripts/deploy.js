const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

import { TOKEN_ADDRESS, TOKEN_ID, STARTING_BID } from "../constants/index";

async function main() {
  const EnglishAuctionContract = await ethers.getContractFactory(
    "EngilshAuction"
  );

  const deployedEnglishAuctionContract = await EnglishAuctionContract.deploy();

  await deployedEnglishAuctionContract.deployed();

  console.log(
    "EnglishAuction Contract Address:",
    deployedEnglishAuctionContract.address
  );

  console.log("Sleeping.....");
  await sleep(40000);

  await hre.run("verify:verify", {
    address: deployedCrowdFundContract.address,
    constructorArguments: [TOKEN_ADDRESS, TOKEN_ID, STARTING_BID],
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
