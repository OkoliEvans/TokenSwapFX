import { ethers } from "hardhat";

async function main() {
    const [owner, account1] = await ethers.getSigners();

    const xchngRateAddress = "0xB90B78291e28cdf002a112b306164EC81E799bc4";
    const exchangeRate = await ethers.getContractAt("IExchangeRate", xchngRateAddress);

    /////////////////////////////  CONNECT AGGREGATORS  /////////////////////////////////////////////
    await exchangeRate.addAggregator("BTC", "0xA39434A63A52E749F02807ae27335515BA4b07F7");
    await exchangeRate.addAggregator("LINK", "0x48731cF7e84dc94C5f84577882c14Be11a5B7456");
    await exchangeRate.addAggregator("FORTH", "0x7A65Cf6C2ACE993f09231EC1Ea7363fb29C13f2F");
    await exchangeRate.addAggregator("SNX", "0xdC5f59e61e51b90264b38F0202156F07956E2577");
    await exchangeRate.addAggregator("DAI", "0x0d79df66BE487753B02D015Fb622DED7f0E9798d");

    console.log("Operation completed for all Aggregators");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
