//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

interface IExchangeRate {

    function addAggregator(string calldata _tokenName, address _aggregatorAddress) external;

    function getSwapTokenPrice(
        string memory _fromToken, 
        string memory _toToken,
        uint8 _decimals,
        int256 _amount
    ) external view returns (int256);

}

