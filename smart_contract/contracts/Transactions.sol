//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transactions {
    uint256 public transactionCount;

    event Transfer(
        address from,
        address receiver,
        uint256 amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] public transactions;

    function addToBlockchain(
        address _receiver,
        uint _amount,
        string memory _message,
        string memory _keyword
    ) public {
        require(_amount > 0, "Invalid Amount");
        require(bytes(_message).length > 0, "Empty Message"); // Add this line to require a non-empty message
        transactionCount++;
        transactions.push(
            TransferStruct(
                msg.sender,
                _receiver,
                _amount,
                _message,
                block.timestamp,
                _keyword
            )
        );
        emit Transfer(
            msg.sender,
            _receiver,
            _amount,
            _message,
            block.timestamp,
            _keyword
        );
    }

    function getAllTransacions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
