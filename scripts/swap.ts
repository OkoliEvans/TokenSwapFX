import { ethers,network } from "hardhat";
import { impersonateAccount } from "@nomicfoundation/hardhat-network-helpers";

async function main() {
  const [owner, account1] = await ethers.getSigners();
  const user = account1.address;
  const liquidityPoolCA = "0x1a2cfe59b845C5920ed2651ab80BB13d1b5FA0AA";
  const tokenAddr = "0xbD9f2EBAe9A237E856ea3b20395fF007D7fE0E94";

  ////////////////////  CONNECT TOKEN & ILIQUIDITY - POOL  /////////////////////////

    const Pool = await ethers.getContractAt("ILiquidityPool", liquidityPoolCA);
    const poolToken = await ethers.getContractAt("IToken", tokenAddr); 

  //////////////////////  TOKENS  ////////////////////////////

  //dai token address
  const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  const DAI_Contract_Address = await ethers.getContractAt("IToken", DAI);
  const DAIHolder = "0x748dE14197922c4Ae258c7939C7739f3ff1db573";


  //uni token address
  const UNI = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
  const UNI_Contract_Address = await ethers.getContractAt("IToken", UNI);


  /////////////////////////  IMPERSONATE ACCOUNTS  ////////////////////
  await impersonateAccount(DAIHolder);
  const impersonatedSigner = await ethers.getSigner(DAIHolder);

  /////////////////////////  approve DAIHOLDER  ///////////////////////
  const amount = 10000;
  await DAI_Contract_Address.connect(impersonatedSigner).approve(liquidityPoolCA, amount);
  
  ////////////////////////  CREATE PAIR  ////////////////////////////////////
  // const pair = await Pool.connect(impersonatedSigner).createPair(DAI,UNI);
  // console.log(`Pair address: ${pair}`);
  
  ///////////////////////  ADD LIQUIDITY  //////////////////////////////////////
  await Pool.connect(impersonatedSigner).addLiquidity(
    DAI,
    UNI,
    5000,
    700
  );

  console.log(`Pool balance...${poolToken.balanceOf(pair_Address)}`);

  ///////////////////////////  SWAP /////////////////////////////
  await Pool.connect(impersonatedSigner).swap(
    DAI,
    UNI,
    200,
    DAIHolder
  );
  





}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
