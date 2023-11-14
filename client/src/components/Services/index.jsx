import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import ServiceCard from "../ServiceCard";
import FeatureCard from "../FeatureCard";

import "./servescard.css";
import { FaEthereum } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { FaBitcoin } from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";
import { SiWeb3Dotjs } from "react-icons/si";
import { SiSolidity } from "react-icons/si";

export default function Services() {
  return (
    <div className="servescards">
      <div className="mb-30 pb-30">
        <div className="container">
          <div className="flex flex-row mb-30 sm:flex-col">
            <div className="overLap">
              <div className="flex cardsList sm:flex-col items-center">
                <FeatureCard
                  icon={<FaEthereum />}
                  caption="Ethereum"
                />
                <FeatureCard
                  icon={<GiWallet />}
                  caption="Low Fess"
                />
                <FeatureCard
                  icon={<FaBitcoin />}
                  caption="Bitcoin"
                />
                <FeatureCard
                  icon={<SiHiveBlockchain />}
                  caption="Blockchain"
                />
                <FeatureCard
                  icon={<SiWeb3Dotjs />}
                  caption="Web 3.0"
                />
                <FeatureCard
                  icon={<SiSolidity />}
                  caption="Solidity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center">
        <div
          id="Services"
          className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4"
        >
          <div className="flex-1 flex flex-col justify-start items-start">
            <h1 className="text-black text-3xl sm:text-3xl py-2 ">
              Services that we
              <br />
              continue to improve
            </h1>
            <p className="text-left my-2 text-black font-light md:w-9/12 w-11/12">
              The best choice for buying and selling your crypto assets, with
              the various super friendly services we offer
            </p>
          </div>

          <div className="flex-1 flex flex-col justify-start items-center">
            <ServiceCard
              color="bg-[#2952E3]"
              title="Security gurantee"
              icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
              subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
            />
            <ServiceCard
              color="bg-[#8945F8]"
              title="Best exchange rates"
              icon={<BiSearchAlt fontSize={21} className="text-white" />}
              subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
            />
            <ServiceCard
              color="bg-[#F84550]"
              title="Fastest transactions"
              icon={<RiHeart2Fill fontSize={21} className="text-white" />}
              subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
