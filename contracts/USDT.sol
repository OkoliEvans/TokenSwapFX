//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DexToken is ERC20 {
    constructor() ERC20("Tethers","USDT") {
        Owner = msg.sender;
    }

    address internal Owner;
}