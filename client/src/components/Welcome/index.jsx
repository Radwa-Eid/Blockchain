import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../../context/TransactionsContext";
import { shortenAddress } from "../../utils/shortenAddress";
import { Loader } from "..";
import "./welcome.css";

const Input = ({ placeholder, name, type, value, handleChange }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      min="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="form-control mr-5 w-full my-2 rounded-lg p-2 outline-none bg-#fff text-#000 border-none"
    />
  );
};

//keep practicing with state inputs and context and i'm sure you'll get it

export default function Welcome() {
  const {
    connectWallet,
    currentAccount,
    formData,
    sendTransaction,
    handleChange,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };
  return (
    <div className="welcome">
      <div className="flex mf:flex-col flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="welcomeContent w-full">
          <div className="flex flex-row sm:flex-col text-left container">
            <div className="welcomeText mf:mb-8 flex-col items-center justify-center mf:mr-10">
              <h1 className="welcomeHeading sm:text-3xl text-white py-1">
                Send Crypto <br></br> across the world
              </h1>
              <p className="welcomePara text-left mt-5 font-light text-white md:w-0/12">
                Explore the crypto world Send and receive crypto with ease and
                at low cost.
              </p>
              {!currentAccount && (
                <button
                  type="button"
                  onClick={connectWallet}
                  className="justify-center items-center my-5 bg-[#30e3ca] pr-20 pl-20 pt-3 pb-3 rounded-full cursor-pointer hover:bg-[#30e3ca]"
                >
                  <span className="text-white text-base font-semibold">
                    Connect Wallet
                  </span>
                </button>
              )}
            </div>
            <div className="p-3 justify-center items-center flex-col rounded-xl h-40 w-72 sm:w-60 my-5 eth-card white-glassmorpism">
              <div className="flex justify-between flex-col w-full h-full">
                <div className=" flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                    <SiEthereum fontSize={21} color="#fff" />
                  </div>
                  <BsInfoCircle fontSize={17} color="#fff" />
                </div>
                <div>
                  <p className="text-white font-light text-sm">
                    {shortenAddress(currentAccount)}
                  </p>
                  <p className="text-white font-semibold text-lg mt-1">
                    Ethereum
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="welcomeForm">
            <div className="flex flex-row flex-1 items-center justify-start w-full mf:mt-0 mt-10">
              <div className="p-5 sm:flex-col sm:w-full w-full flex flex-row justify-start items-center">
                <Input
                  placeholder="Address To"
                  name="addressTo"
                  type="text"
                  handleChange={handleChange}
                />
                <Input
                  placeholder="Amount (ETH)"
                  name="amount"
                  type="number"
                  min="0.0001"
                  handleChange={handleChange}
                />
                <Input
                  placeholder="Keyword (Gif)"
                  name="keyword"
                  type="text"
                  handleChange={handleChange}
                />
                <Input
                  placeholder="Enter Message"
                  name="message"
                  type="text"
                  handleChange={handleChange}
                />
                {isLoading ? (
                  <Loader />
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-[#30e3ca] text-white w-full border-[1px] p-2 border-[#30e3ca] hover:bg-[#30e3ca] rounded-full cursor-pointer"
                  >
                    Send now
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
