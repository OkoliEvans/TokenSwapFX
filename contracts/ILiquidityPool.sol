//SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

interface ILiquidityPool {

    function createPair(address _tokenA, address _tokenB) external returns (address);

    function addLiquidity(
        address _tokenA, 
        address _tokenB, 
        int256 _amountInTokenA, 
        int256 _amountInTokenB
    ) external returns(bool success1, bool success2);

    function removeLiquidity(
            address _tokenA,
            address _tokenB,
            address _to,
            uint _amountTokenA,
            uint _amountTokenB
        ) external returns(bool success1, bool success2);

    function swap(
            address _tokenA,
            address _tokenB,
            int _amountToSwap,
            // address _DEXPool,
            address _buyer
        ) external returns(bool success);

}