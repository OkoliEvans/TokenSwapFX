import { ethers } from "hardhat";

async function main() {
    const [owner, account1] = await ethers.getSigners();


    const Exchange = await ethers.getContractAt("IExchangeRate", "0x1C711dA6c350E8003503A050554C70CBC323EFf9");

    /////////////////////////////  GET RATES  ///////////////////////////////////////////
    console.log(`BTC:LINK ${await Exchange.getSwapTokenPrice("BTC","LINK",8,1)}`);
    console.log(`BTC:SNX ${await Exchange.getSwapTokenPrice("BTC","SNX",8,1)}`);
    console.log(`LINK:BTC ${await Exchange.getSwapTokenPrice("LINK", "BTC",8,100)}`);
    console.log(`LINK:FORTH ${await Exchange.getSwapTokenPrice("LINK","FORTH",8,1000)}`);
    console.log(`LINK:DAI ${await Exchange.getSwapTokenPrice("LINK","DAI",8,100)}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
