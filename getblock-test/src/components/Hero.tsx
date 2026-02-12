"use client";
import { useAccount } from "wagmi";
import { ShieldCheck, Zap } from "lucide-react";

export const Hero = () => {
  const { isConnected } = useAccount();

  return (
    <section className="pt-32 pb-10 flex flex-col items-center">
      <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-blue-400 text-sm mb-8 animate-bounce">
        <Zap size={16} />
        <span>Web3 Portfolio Tracker</span>
      </div>
      
      <h1 className="text-6xl md:text-8xl font-extrabold text-center mb-8 tracking-tighter">
        Control your <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
          Digital Assets
        </span>
      </h1>
      
      <p className="text-gray-400 text-xl text-center max-w-2xl mb-10 leading-relaxed">
        Connect your MetaMask to view real-time ETH and USDT balances directly from the Ethereum Mainnet. Built for GetBlock technical assessment.
      </p>

      {!isConnected && (
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-6 text-gray-500 mb-4">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} />
              <span>Secure Connection</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={18} />
              <span>Real-time Data</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};