import useFetch from "../../hooks/useFetch";
import { shortenAddress } from "../../utils/shortenAddress";
import "./transactionsCards.css";
export default function TransactionsCard({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) {
  const gifUrl = useFetch({ keyword });
  return (
    <>
      <div className="featurecard md:mr-5 sm:mr-0">
        <div className="featurecardContent shadow-2xl">
          <div className="featureImg">
            <img src={gifUrl || url} alt="nature" />
          </div>
          <div className="featureText">
            <span className="featureTittle">
              <p className="text-[#37c7da] font-bold">{timestamp}</p>
            </span>
            <h3 className="featureName">
              {" "}
              <a
                href={`https://sepolia.etherscan.io/address/${addressFrom}`}
                target="_blank"
                rel="noreferrer"
              >
                <p className="mb-2">
                  From: <span className="text-black">{shortenAddress(addressFrom)}</span>
                </p>
              </a>
              <a
              href={`https://sepolia.etherscan.io/address/${addressTo}`}
              target="_blank"
              rel="noreferrer"
            >
              <p className="mb-2">
                To: <span className="text-black">{shortenAddress(addressTo)}</span>
              </p>
            </a>
            <p className="mb-2">Amount: <span className="text-black">{amount} ETH</span></p>
            {message && (
              <>
                <p>Message: <span className="text-black">{message}</span></p>
              </>
            )}
            </h3>
            <p className="mt-3 featureAddress featureTittle">{amount}</p>
          </div>
        </div>
      </div>
    </>
  );
}
