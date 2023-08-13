// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ShareContract {
    struct ShareHolder {
        uint256 balance;
    }

    mapping(address => ShareHolder) public shareHolders;
    address[] public safeWalletOwners; // Declare this as a state variable
    uint256 public totalDeposits;
    address public contractOwner;

    modifier onlySafeWalletOwners() {
        require(shareHolders[msg.sender].balance >= 0, "Not a Safe Wallet owner");
        _;
    }

    modifier onlyContractOwner() {
        require(msg.sender == contractOwner, "Only the contract owner can perform this operation");
        _;
    }

    constructor(address[] memory _safeWalletOwners) {
        contractOwner = msg.sender;
        safeWalletOwners = _safeWalletOwners; // Initialize with passed addresses
        for (uint256 i = 0; i < safeWalletOwners.length; i++) {
            require(safeWalletOwners[i] != address(0), "Invalid address");
            shareHolders[safeWalletOwners[i]].balance = 0;
        }
    }

    function depositFunds() external payable onlySafeWalletOwners {
        shareHolders[msg.sender].balance += msg.value;
        totalDeposits += msg.value;
    }

    function withdraw(uint256 _amount) external onlyContractOwner {
        require(_amount <= totalDeposits, "Withdrawal amount exceeds available funds");

        // Calculate share decrease per user
        uint256 shareDecrease = _amount / totalDeposits; // Corrected formula based on total deposits

        // Iterate over the known list of Safe Wallet owners provided during initialization.
        for (uint256 i = 0; i < safeWalletOwners.length; i++) {
            uint256 amountToDecrease = (shareHolders[safeWalletOwners[i]].balance * shareDecrease) / 1 ether; // Assuming 1 ether for full share
            shareHolders[safeWalletOwners[i]].balance -= amountToDecrease;
        }

        totalDeposits -= _amount;
        payable(contractOwner).transfer(_amount);
    }
}
