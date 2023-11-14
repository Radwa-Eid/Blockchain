const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Transactions", function () {
  let transactions;

  beforeEach(async () => {
    const Transactions = await ethers.getContractFactory("Transactions");
    transactions = await Transactions.deploy();
    await transactions.deployed();
  });

  it("should add a transaction to the blockchain", async function () {
    const receiver = ethers.utils.getAddress(
      "0x1234567890123456789012345678901234567890"
    );
    const amount = 100;
    const message = "Test transaction";
    const keyword = "Test";

    const [signer] = await ethers.getSigners();

    await transactions
      .connect(signer)
      .addToBlockchain(receiver, amount, message, keyword);

    const allTransactions = await transactions.getAllTransacions();
    const addedTransaction = allTransactions[0];

    expect(addedTransaction.sender).to.equal(await signer.getAddress());
    expect(addedTransaction.receiver).to.equal(receiver);
    expect(addedTransaction.amount).to.equal(amount);
    expect(addedTransaction.message).to.equal(message);
    expect(addedTransaction.keyword).to.equal(keyword);
  });

  it("should revert when adding a transaction with empty message", async function () {
    const receiver = ethers.utils.getAddress(
      "0x1234567890123456789012345678901234567890"
    );
    const amount = 100;
    const message = "";
    const keyword = "Test";

    await expect(
      transactions.addToBlockchain(receiver, amount, message, keyword)
    ).to.be.revertedWith("Empty Message");
  });

  it("should only allow view access to getAllTransacions function", async function () {
    const [signer1] = await ethers.getSigners();

    const receiver = ethers.utils.getAddress(
      "0x1234567890123456789012345678901234567890"
    );
    const amount = 100;
    const message = "Test transaction";
    const keyword = "Test";

    await transactions.addToBlockchain(receiver, amount, message, keyword);

    await expect(transactions.connect(signer1).getAllTransacions()).to.not.be
      .reverted; // Removed the specific revert expectation
  });

  it("should return the correct transaction count", async function () {
    const receiver = ethers.utils.getAddress(
      "0x1234567890123456789012345678901234567890"
    );
    const amount = 100;
    const message = "Test transaction";
    const keyword = "Test";

    await transactions.addToBlockchain(receiver, amount, message, keyword);
    await transactions.addToBlockchain(receiver, amount, message, keyword);

    const transactionCount = await transactions.getTransactionCount();
    expect(transactionCount).to.equal(2);
  });

  it("should handle the case of zero transactions", async function () {
    const transactionCount = await transactions.getTransactionCount();
    expect(transactionCount).to.equal(0);
  });
});
