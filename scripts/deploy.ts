import { ethers } from "hardhat";

async function main() {
  const [owner, account1] = await ethers.getSigners();

  ////////////////////  DEPLOY  LIQUIDITY POOL  /////////////////////////

  const LiquidityPool = await ethers.getContractFactory("LiquidityPool");
  const liquidityPool = await LiquidityPool.deploy();
  await liquidityPool.deployed();

  console.log(`Liquidity pool deployed to: ${liquidityPool.address}`);

  ///////////////////  DEPLOY EXCHANGE RATE  ////////////////////////////

  const exchangeRate = await ethers.getContractFactory("ExchangeRate");
  const ExchangeRate = await exchangeRate.deploy();
  await ExchangeRate.deployed();

  console.log(`Exchange rate deployed to: ${ExchangeRate.address}`);

  //////////////////////  DEPLOY TOKEN  ///////////////////////////////////
  const DEXToken = await ethers.getContractFactory("DexToken");
  const DexToken = await DEXToken.deploy();
  await DexToken.deployed();
  console.log(`USDT deployed to: ${DexToken.address}`);

}




// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
